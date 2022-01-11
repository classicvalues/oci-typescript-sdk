/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for creating the mount target.
 */
export interface CreateMountTargetDetails {
  /**
    * The availability domain in which to create the mount target.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to create the mount target.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My mount target`
* 
    */
  "displayName"?: string;
  /**
    * The hostname for the mount target's IP address, used for
* DNS resolution. The value is the hostname portion of the private IP
* address's fully qualified domain name (FQDN). For example,
* `files-1` in the FQDN `files-1.subnet123.vcn1.oraclevcn.com`.
* Must be unique across all VNICs in the subnet and comply
* with [RFC 952](https://tools.ietf.org/html/rfc952)
* and [RFC 1123](https://tools.ietf.org/html/rfc1123). 
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
Example: `files-1`
* 
    */
  "hostnameLabel"?: string;
  /**
    * A private IP address of your choice. Must be an available IP address within
* the subnet's CIDR. If you don't specify a value, Oracle automatically
* assigns a private IP address from the subnet.
* <p>
Example: `10.0.3.3`
* 
    */
  "ipAddress"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet in which to create the mount target.
   *
   */
  "subnetId": string;
  /**
   * A list of Network Security Group [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with this mount target.
   * A maximum of 5 is allowed.
   * Setting this to an empty array after the list is created removes the mount target from all NSGs.
   * For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateMountTargetDetails {
  export function getJsonObj(obj: CreateMountTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMountTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
