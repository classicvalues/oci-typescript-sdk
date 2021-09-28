/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Note: Deprecated. Use the new resource model APIs instead.
 * Parameters for Extract processes.
 * If an empty object is specified, the stored Extract details will be removed.
 *
 */
export interface UpdateExtract {
  /**
   * Extract performance.
   *
   */
  "performanceProfile"?: model.ExtractPerformanceProfile;
  /**
   * Length of time (in seconds) that a transaction can be open before Extract generates a warning message that the transaction is long-running.
   * If not specified, Extract will not generate a warning on long-running transactions.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "longTransDuration"?: number;
}

export namespace UpdateExtract {
  export function getJsonObj(obj: UpdateExtract): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateExtract): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
