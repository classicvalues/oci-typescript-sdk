/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * The information to be updated for NetworkAddressListAddresses.
 */
export interface UpdateNetworkAddressListAddressesDetails
  extends model.UpdateNetworkAddressListDetails {
  /**
   * A list of IP address prefixes in CIDR notation.
   * To specify all addresses, use \"0.0.0.0/0\" for IPv4 and \"::/0\" for IPv6.
   *
   */
  "addresses"?: Array<string>;

  "type": string;
}

export namespace UpdateNetworkAddressListAddressesDetails {
  export function getJsonObj(
    obj: UpdateNetworkAddressListAddressesDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateNetworkAddressListDetails.getJsonObj(
            obj
          ) as UpdateNetworkAddressListAddressesDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ADDRESSES";
  export function getDeserializedJsonObj(
    obj: UpdateNetworkAddressListAddressesDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateNetworkAddressListDetails.getDeserializedJsonObj(
            obj
          ) as UpdateNetworkAddressListAddressesDetails)),
      ...{}
    };

    return jsonObj;
  }
}
