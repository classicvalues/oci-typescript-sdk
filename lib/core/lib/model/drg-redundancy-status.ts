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
 * The redundancy status of the DRG. For more information, see
 * [Redundancy Remedies](https://docs.cloud.oracle.com/iaas/Content/Network/Troubleshoot/drgredundancy.htm).
 *
 */
export interface DrgRedundancyStatus {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DRG.
   */
  "id"?: string;
  /**
   * The redundancy status of the DRG.
   */
  "status"?: DrgRedundancyStatus.Status;
}

export namespace DrgRedundancyStatus {
  export enum Status {
    NotAvailable = "NOT_AVAILABLE",
    Redundant = "REDUNDANT",
    NotRedundantSingleIpsec = "NOT_REDUNDANT_SINGLE_IPSEC",
    NotRedundantSingleVirtualcircuit = "NOT_REDUNDANT_SINGLE_VIRTUALCIRCUIT",
    NotRedundantMultipleIpsecs = "NOT_REDUNDANT_MULTIPLE_IPSECS",
    NotRedundantMultipleVirtualcircuits = "NOT_REDUNDANT_MULTIPLE_VIRTUALCIRCUITS",
    NotRedundantMixConnections = "NOT_REDUNDANT_MIX_CONNECTIONS",
    NotRedundantNoConnection = "NOT_REDUNDANT_NO_CONNECTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrgRedundancyStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgRedundancyStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
