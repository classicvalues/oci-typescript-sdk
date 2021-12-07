/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The intraline diff result.
 */
export interface CompareContentResult {
  /**
   * An array of line comparison results.
   */
  "lineComparisonResults"?: Array<model.CompareLineResult>;
}

export namespace CompareContentResult {
  export function getJsonObj(obj: CompareContentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "lineComparisonResults": obj.lineComparisonResults
          ? obj.lineComparisonResults.map(item => {
              return model.CompareLineResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CompareContentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "lineComparisonResults": obj.lineComparisonResults
          ? obj.lineComparisonResults.map(item => {
              return model.CompareLineResult.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
