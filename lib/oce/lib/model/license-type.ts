/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * license types can be NEW for new oracle content and experience cloud license,
 * or BYOL for bring your own license
 *
 **/
export enum LicenseType {
  New = "NEW",
  Byol = "BYOL",
  Premium = "PREMIUM",
  Starter = "STARTER",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LicenseType {
  export function getJsonObj(obj: LicenseType): LicenseType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LicenseType): LicenseType {
    return obj;
  }
}
