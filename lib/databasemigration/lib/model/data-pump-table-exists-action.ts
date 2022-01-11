/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * IMPORT: Specifies the action to be performed when data is loaded into a preexisting table.
 *
 **/
export enum DataPumpTableExistsAction {
  Truncate = "TRUNCATE",
  Replace = "REPLACE",
  Append = "APPEND",
  Skip = "SKIP",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DataPumpTableExistsAction {
  export function getJsonObj(obj: DataPumpTableExistsAction): DataPumpTableExistsAction {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DataPumpTableExistsAction
  ): DataPumpTableExistsAction {
    return obj;
  }
}
