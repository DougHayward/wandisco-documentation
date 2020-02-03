---
id: azure_vm_creation
title: Creating an Azure Linux VM for a Fusion installation
sidebar_label: Azure VM creation
---

This quickstart helps you create an Azure Linux VM suitable for a Fusion installation. It walks you through:

* Creating an [Azure Linux VM template](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/create-ssh-secured-vm-from-template) script.
* Creating a [cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html) template to initialise the VM.
* How to use the Azure Linux VM template script.
  * Logging in to the VM for the first time.

## Prerequisites

* [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) with the ability to run `az login` on your terminal.

### SSH keys

SSH keys will be generated as part of the VM creation process.
See the Microsoft documentation for further details - [Linux or macOS](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) or [Windows](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows).

If you already have keys in the default location(s), these keys will be used with the Azure VM and will not be overwritten.

## Create templates

The two required templates are given below. Create these in the same location with the names given.

1. `create_docker_vm.sh` - this contains the template options required for the VM.

   ```bash
   #!/usr/bin/env bash
   GROUP=''
   RG=''
   VNET=''
   VM_NAME=''
   ADMIN_USERNAME=''
   TYPE=''
   DISK=''
   IMAGE=''

   print_usage() {
     echo "Usage: ./create_docker_vm.sh -g AZ-USER-GROUP -r AZ-RESOURCE-GROUP -v AZ-VNET -s AZ-SUBNET-NAME -n VM-NAME -u VM-USERNAME -t VM-TYPE -d VM-DISK-SIZE (GB) -i OPERATING-SYSTEM"

     echo "Example: ./create_docker_vm.sh -g DEV -r DEV-john.smith1 -v DEV-westeurope-vnet -s default -n johnsmith-docker -u john -t Standard_D8_v3 -d 32 -i UbuntuLTS"
   }
   #Setup of env
   while getopts "g:G:r:R:v:V:s:S:n:N:u:U:t:T:d:D:i:I:h:H:" opt; do
     case $opt in
       g|G) GROUP="${OPTARG}" ;;
       r|R) RG="${OPTARG}" ;;
       v|V) VNET="${OPTARG}" ;;
       s|S) SUBNAME="${OPTARG}" ;;
       n|N) VM_NAME="${OPTARG}" ;;
       u|U) VM_USERNAME="${OPTARG}" ;;
       t|T) TYPE=${OPTARG} ;;
       d|D) DISK=${OPTARG} ;;
       i|I) IMAGE=${OPTARG} ;;
       h|H) print_usage exit 1;;
       *) print_usage
          exit 1 ;;
     esac
   done

   #VM Characteristics
   SUBNETID=$(az network vnet subnet show -g $GROUP -n $SUBNAME --vnet-name $VNET |grep addressPrefix -a3 |grep -i id | awk '{print $2}' | tr -d [\",])

   echo "Parameters"
   echo "Group: $GROUP"
   echo "Resource Group: $RG"
   echo "VNET: $VNET"
   echo "Subnet Name: $SUBNAME"
   echo "VM Name: $VM_NAME"
   echo "VM Username: $VM_USERNAME"
   echo "VM Type: $TYPE"
   echo "Disk Size: $DISK GB"
   echo "Image (OS): $IMAGE"
   echo "Subnet ID: $SUBNETID"

   az vm create \
       --resource-group $RG \
       --name $VM_NAME \
       --image $IMAGE \
       --size $TYPE \
       --admin-username $VM_USERNAME \
       --generate-ssh-keys \
       --storage-sku Standard_LRS \
       --os-disk-size-gb $DISK \
       --custom-data cloud-init.txt \
       --subnet $SUBNETID \
       --public-ip-address ""
   ```

2. `cloud-init.txt` - contains initialisation settings for the VM.

   ```text
   #cloud-config

   package_update: true

   disk_setup:
       ephemeral0:
           table_type: mbr
           layout: [66, [33, 82]]
           overwrite: True
   fs_setup:
       - device: ephemeral0.1
         filesystem: ext4
       - device: ephemeral0.2
         filesystem: swap
   mounts:
       - ["ephemeral0.1", "/mnt"]
       - ["ephemeral0.2", "none", "swap", "sw", "0", "0"]

   bootcmd:
       - [ sh, -c, 'sudo echo GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1" >> /etc/default/grub' ]
       - [ sh, -c, 'sudo update-grub' ]
       - [ cloud-init-per, once, mymkfs, mkfs, /dev/vdb ]

   system_info:
       default_user:
           groups: [docker]
   ```

## Use the Azure template script to create the VM

1. Collect all required variables before running the script.

   |Variable|Flag|Example|Description|
   |---|---|---|---|
   |Group|`-g`|`GRP`|The [Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis) group to use. **Must already exist**.|
   |Resource Group|`-r`|`GRP-my.name1`|The [Azure Resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups) to use. **Must already exist**.|
   |VNET|`-v`|`GRP-westeurope-vnet`|The [Azure Virtual Network](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) to use. **Must already exist**.|
   |Subnet Name|`-s`|`default`|The Azure Virtual Network [Subnet name](https://docs.microsoft.com/en-us/cli/azure/network/vnet/subnet?view=azure-cli-latest). **Must already exist**.|
   |VM Name|`-n`|`docker_host01`|Define the Virtual Machine name in Azure.|
   |VM Username|`-u`|`vm_user`|Define the username to access the Virtual Machine with.|
   |[VM Type](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az-vm-list-sizes)|`-t`|`Standard_D8_v3`|Define the Virtual Machine size from the [Azure templates](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes). The `name` value from `az vm list-sizes --location <vm_location>` should be the value here.|
   |Disk Size|`-d`|`32`|Define the disk space on the Virtual Machine in GigaBytes (GB).|
   |[Image (OS)](https://docs.microsoft.com/en-us/cli/azure/vm/image?view=azure-cli-latest#az-vm-image-list)|`-i`|`UbuntuLTS`|Define the Virtual Machine's Operating System from the [Azure images](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage). The `urnAlias` value from `az vm image list [--all] [--location]` should be the value here.|

2. Make the script executable.

   `chmod +x create_docker_vm.sh`

3. Run the script using the variables collected above.

   `./create_docker_vm.sh -g GRP -r GRP-my.name1 -v GRP-westeurope-vnet -s default -n docker_host01 -u vm_user -t Standard_D8_v3 -d 32 -i UbuntuLTS`

   _Example output_

   ```text
   Parameters
   Group: GRP
   Resource Group: GRP-my.name1
   VNET: GRP-westeurope-vnet
   Subnet Name: default
   VM Name: docker_host01
   VM Username: vm_user
   VM Type: Standard_D8_v3
   Disk Size: 32 GB
   Image (OS): UbuntuLTS
   Subnet ID: /subscriptions/3842fefa-7697-4e7d-b051-a5a3ae601030/resourceGroups/GRP/providers/Microsoft.Network/virtualNetworks/GRP-westeurope-vnet/subnets/default
   {
     "fqdns": "",
     "id": "/subscriptions/3842fefa-7697-4e7d-b051-a5a3ae601030/resourceGroups/GRP-my.name1/providers/Microsoft.Compute/virtualMachines/docker_host01",
     "location": "westeurope",
     "macAddress": "00-0D-3A-3A-9D-52",
     "powerState": "VM running",
     "privateIpAddress": "172.10.1.10",
     "publicIpAddress": "",
     "resourceGroup": "GRP-my.name1",
     "zones": ""
   }
   ```

You can now log in to your Azure VM, for example `ssh vm_user@172.10.1.10`.

## Next steps

To prepare your VM for a Fusion installation, see the [Azure VM preparation](https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/azure_vm_prep) guide.
