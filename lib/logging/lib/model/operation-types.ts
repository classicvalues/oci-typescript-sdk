/**
 * loggingManagementControlplane API
 * loggingManagementControlplane API specification
 * OpenAPI spec version: 20200531
 *
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
 * The types of work request operations.
 **/
export enum OperationTypes {
  CreateLog = "CREATE_LOG",
  UpdateLog = "UPDATE_LOG",
  DeleteLog = "DELETE_LOG",
  MoveLog = "MOVE_LOG",
  CreateLogGroup = "CREATE_LOG_GROUP",
  UpdateLogGroup = "UPDATE_LOG_GROUP",
  DeleteLogGroup = "DELETE_LOG_GROUP",
  MoveLogGroup = "MOVE_LOG_GROUP",
  CreateConfiguration = "CREATE_CONFIGURATION",
  UpdateConfiguration = "UPDATE_CONFIGURATION",
  DeleteConfiguration = "DELETE_CONFIGURATION",
  MoveConfiguration = "MOVE_CONFIGURATION",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): object {
    return { obj };
  }
}
