/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the client or backup networks in an Exadata VM cluster network. Applies to Exadata Cloud@Customer instances only.
 *
 */
export interface VmNetworkDetails {
  /**
   * The network VLAN ID.
   */
  "vlanId": string;
  /**
   * The network type.
   */
  "networkType": VmNetworkDetails.NetworkType;
  /**
   * The network netmask.
   */
  "netmask": string;
  /**
   * The network gateway.
   */
  "gateway": string;
  /**
   * The network domain name.
   */
  "domainName": string;
  /**
   * The list of node details.
   */
  "nodes": Array<model.NodeDetails>;
}

export namespace VmNetworkDetails {
  export enum NetworkType {
    Client = "CLIENT",
    Backup = "BACKUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VmNetworkDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.NodeDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
