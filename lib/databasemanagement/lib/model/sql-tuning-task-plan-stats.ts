/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The statistics of an SQL execution plan.
 *
 */
export interface SqlTuningTaskPlanStats {
  /**
   * The type of the plan for the original or the new plan with profile/index etc.
   */
  "planType": string;
  /**
   * A map contains the statistics for the SQL execution using the plan.
   * The key of the map is the metric's name. The value of the map is the metric's value.
   *
   */
  "planStats": { [key: string]: number };
  /**
   * The status of the execution using the plan.
   *
   */
  "planStatus": SqlTuningTaskPlanStats.PlanStatus;
}

export namespace SqlTuningTaskPlanStats {
  export enum PlanStatus {
    Complete = "COMPLETE",
    Partial = "PARTIAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SqlTuningTaskPlanStats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningTaskPlanStats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
