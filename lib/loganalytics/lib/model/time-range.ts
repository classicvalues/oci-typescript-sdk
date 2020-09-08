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
 * Specify time range. This paramter can be overwritten if time criteria is specified in the query string. If no time criteria are found in query string this time range is used.
 *
 */
export interface TimeRange {
  /**
   * Time for query to start matching results from. Start time must be less than end time otherwise it will result in error.
   *
   */
  "timeStart": Date;
  /**
   * Time for query to stop matching results to. End Time must be greater than or equal to start time otherwise it will result in error.
   *
   */
  "timeEnd": Date;
  /**
   * Time zone for query.
   *
   */
  "timeZone"?: string;
}

export namespace TimeRange {
  export function getJsonObj(obj: TimeRange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
