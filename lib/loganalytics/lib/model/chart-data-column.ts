/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * A data series specific to a particular link output field.
 *
 */
export interface ChartDataColumn extends model.AbstractColumn {
  /**
   * Data points for each timestamp for a specific link field un-filtered.
   *
   */
  "dataItems"?: Array<any>;
  /**
   * Data points filtered by query string. May not contain data points for each timestamp due to filtering.
   *
   */
  "filteredDataItems"?: Array<any>;

  "type": string;
}

export namespace ChartDataColumn {
  export function getJsonObj(obj: ChartDataColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getJsonObj(obj) as ChartDataColumn)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CHART_DATA_COLUMN";
}
