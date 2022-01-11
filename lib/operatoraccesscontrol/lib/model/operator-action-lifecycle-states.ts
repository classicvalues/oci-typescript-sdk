/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Possible lifecycle states for an operator action. Operator action lifecycles are controlled by Oracle.
 **/
export enum OperatorActionLifecycleStates {
  Active = "ACTIVE",
  Inactive = "INACTIVE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperatorActionLifecycleStates {
  export function getJsonObj(obj: OperatorActionLifecycleStates): OperatorActionLifecycleStates {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: OperatorActionLifecycleStates
  ): OperatorActionLifecycleStates {
    return obj;
  }
}
