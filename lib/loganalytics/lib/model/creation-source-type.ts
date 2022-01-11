/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Entities are auto-created when enterprise manager bridge is configured in logging analytics. Similarly
 * entities can be auto-created when logs are forwarded from service connector.
 *
 **/
export enum CreationSourceType {
  EmBridge = "EM_BRIDGE",
  ServiceConnectorHub = "SERVICE_CONNECTOR_HUB",
  None = "NONE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CreationSourceType {
  export function getJsonObj(obj: CreationSourceType): CreationSourceType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CreationSourceType): CreationSourceType {
    return obj;
  }
}
