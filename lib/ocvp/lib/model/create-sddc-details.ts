/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage your [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the SDDC.
 */
export interface CreateSddcDetails {
  /**
   * The availability domain to create the SDDC's ESXi hosts in. For multi-AD SDDC deployment, set to `multi-AD`.
   *
   */
  "computeAvailabilityDomain": string;
  /**
   * A descriptive name for the SDDC.
   * SDDC name requirements are 1-16 character length limit, Must start with a letter, Must be English letters, numbers, - only, No repeating hyphens, Must be unique within the region.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The VMware software bundle to install on the ESXi hosts in the SDDC. To get a
   * list of the available versions, use
   * {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}.
   *
   */
  "vmwareSoftwareVersion": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment to contain the SDDC.
   *
   */
  "compartmentId": string;
  /**
    * A prefix used in the name of each ESXi host and Compute instance in the SDDC.
* If this isn't set, the SDDC's `displayName` is used as the prefix.
* <p>
For example, if the value is `mySDDC`, the ESXi hosts are named `mySDDC-1`,
* `mySDDC-2`, and so on.
* 
    */
  "instanceDisplayNamePrefix"?: string;
  /**
   * The number of ESXi hosts to create in the SDDC. You can add more hosts later
   * (see {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}).
   * <p>
   **Note:** If you later delete EXSi hosts from the SDDC to total less than 3,
   * you are still billed for the 3 minimum recommended EXSi hosts. Also,
   * you cannot add more VMware workloads to the SDDC until it again has at least
   * 3 ESXi hosts.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "esxiHostsCount": number;
  /**
   * The billing option selected during SDDC creation.
   * {@link #listSupportedSkus(ListSupportedSkusRequest) listSupportedSkus}.
   *
   */
  "initialSku"?: model.Sku;
  /**
   * Indicates whether to enable HCX for this SDDC.
   *
   */
  "isHcxEnabled"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the HCX
   * component of the VMware environment. This value is required only when `isHcxEnabled` is true.
   *
   */
  "hcxVlanId"?: string;
  /**
   * Indicates whether to enable HCX Enterprise for this SDDC.
   *
   */
  "isHcxEnterpriseEnabled"?: boolean;
  /**
   * One or more public SSH keys to be included in the `~/.ssh/authorized_keys` file for
   * the default user on each ESXi host. Use a newline character to separate multiple keys.
   * The SSH keys must be in the format required for the `authorized_keys` file
   *
   */
  "sshAuthorizedKeys": string;
  /**
   * The CIDR block for the IP addresses that VMware VMs in the SDDC use to run application
   * workloads.
   *
   */
  "workloadNetworkCidr"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the management subnet to use
   * for provisioning the SDDC.
   *
   */
  "provisioningSubnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the vSphere
   * component of the VMware environment.
   *
   */
  "vsphereVlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the vMotion
   * component of the VMware environment.
   *
   */
  "vmotionVlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the vSAN
   * component of the VMware environment.
   *
   */
  "vsanVlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the NSX VTEP
   * component of the VMware environment.
   *
   */
  "nsxVTepVlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the NSX Edge VTEP
   * component of the VMware environment.
   *
   */
  "nsxEdgeVTepVlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the NSX Edge
   * Uplink 1 component of the VMware environment.
   *
   */
  "nsxEdgeUplink1VlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN to use for the NSX Edge
   * Uplink 2 component of the VMware environment.
   * <p>
   **Note:** This VLAN is reserved for future use to deploy public-facing applications on the VMware SDDC.
   *
   */
  "nsxEdgeUplink2VlanId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
   * for the vSphere Replication component of the VMware environment.
   *
   */
  "replicationVlanId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN used by the SDDC
   * for the Provisioning component of the VMware environment.
   *
   */
  "provisioningVlanId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateSddcDetails {
  export function getJsonObj(obj: CreateSddcDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSddcDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
