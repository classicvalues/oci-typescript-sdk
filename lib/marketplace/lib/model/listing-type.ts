/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * Possible values for the publisher category to which a publication can belong. The publisher category informs where the listing appears for use.
 *
 **/
export enum ListingType {
  Community = "COMMUNITY",
  Partner = "PARTNER",
  Private = "PRIVATE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ListingType {
  export function getJsonObj(obj: ListingType): ListingType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ListingType): ListingType {
    return obj;
  }
}
