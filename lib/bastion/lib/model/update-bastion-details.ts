/**
 * Bastion API
 * Oracle Cloud Infrastructure Bastion provides restricted and time-limited access to target resources that don't have public endpoints. Through the configuration of a bastion, you can let authorized users connect from specific IP addresses to target resources by way of Secure Shell (SSH) sessions hosted on the bastion.
 * OpenAPI spec version: 20210331
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
 * The configuration to update on an existing bastion.
 */
export interface UpdateBastionDetails {
  /**
   * The maximum amount of time that any session on the bastion can remain active. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSessionTtlInSeconds"?: number;
  /**
   * A list of IP addresses of the hosts that the bastion has access to. Not applicable to `standard` bastions.
   *
   */
  "staticJumpHostIpAddresses"?: Array<string>;
  /**
   * A list of address ranges in CIDR notation that you want to allow to connect to sessions hosted by this bastion.
   */
  "clientCidrBlockAllowList"?: Array<string>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateBastionDetails {
  export function getJsonObj(obj: UpdateBastionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
