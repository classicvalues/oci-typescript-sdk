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
 * The platform configuration used when launching a bare metal instance with an E4 shape
 * (the AMD Milan platform).
 *
 */
export interface InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig
  extends model.InstanceConfigurationLaunchInstancePlatformConfig {
  /**
   * The number of NUMA nodes per socket.
   *
   */
  "numaNodesPerSocket"?: InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig.NumaNodesPerSocket;

  "type": string;
}

export namespace InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig {
  export enum NumaNodesPerSocket {
    Nps0 = "NPS0",
    Nps1 = "NPS1",
    Nps2 = "NPS2",
    Nps4 = "NPS4",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationLaunchInstancePlatformConfig.getJsonObj(
            obj
          ) as InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "AMD_MILAN_BM";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationLaunchInstancePlatformConfig.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationAmdMilanBmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
}
