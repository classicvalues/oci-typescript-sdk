/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
* A detachable boot volume device that contains the image used to boot a Compute instance. For more information, see
* [Overview of Boot Volumes](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/bootvolumes.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface BootVolume {
  /**
    * The availability domain of the boot volume.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the boot volume.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The boot volume's Oracle ID (OCID).
   */
  "id": string;
  /**
   * The image OCID used to create the boot volume.
   */
  "imageId"?: string;
  /**
   * Specifies whether the boot volume's data has finished copying
   * from the source boot volume or boot volume backup.
   *
   */
  "isHydrated"?: boolean;
  /**
    * The number of volume performance units (VPUs) that will be applied to this boot volume per GB,
* representing the Block Volume service's elastic performance options.
* See [Block Volume Elastic Performance](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumeelasticperformance.htm) for more information.
* <p>
Allowed values:
* <p>
  * `10`: Represents Balanced option.
* <p>
  * `20`: Represents Higher Performance option.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vpusPerGB"?: number;
  /**
   * The current state of a boot volume.
   */
  "lifecycleState": BootVolume.LifecycleState;
  /**
   * The size of the boot volume in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs"?: number;
  /**
   * The size of the volume in MBs. The value must be a multiple of 1024.
   * This field is deprecated. Please use sizeInGBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInMBs": number;
  "sourceDetails"?:
    | model.BootVolumeSourceFromBootVolumeBackupDetails
    | model.BootVolumeSourceFromBootVolumeDetails
    | model.BootVolumeSourceFromBootVolumeReplicaDetails;
  /**
   * The date and time the boot volume was created. Format defined
   * by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The OCID of the source volume group.
   */
  "volumeGroupId"?: string;
  /**
   * The OCID of the Key Management master encryption key assigned to the boot volume.
   */
  "kmsKeyId"?: string;
  /**
   * Specifies whether the auto-tune performance is enabled for this boot volume.
   *
   */
  "isAutoTuneEnabled"?: boolean;
  /**
   * The number of Volume Performance Units per GB that this boot volume is effectively tuned to when it's idle.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autoTunedVpusPerGB"?: number;
  /**
   * The list of boot volume replicas of this boot volume
   */
  "bootVolumeReplicas"?: Array<model.BootVolumeReplicaInfo>;
}

export namespace BootVolume {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Restoring = "RESTORING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BootVolume): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.BootVolumeSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "bootVolumeReplicas": obj.bootVolumeReplicas
          ? obj.bootVolumeReplicas.map(item => {
              return model.BootVolumeReplicaInfo.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BootVolume): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.BootVolumeSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "bootVolumeReplicas": obj.bootVolumeReplicas
          ? obj.bootVolumeReplicas.map(item => {
              return model.BootVolumeReplicaInfo.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
