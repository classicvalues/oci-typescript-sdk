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
 * LogAnalyticsPatternFilter
 */
export interface LogAnalyticsPatternFilter {
  "pattern"?: model.LogAnalyticsSourcePattern;
  /**
   * agent version
   */
  "agentVersion"?: string;
  /**
   * is in use flag
   */
  "isInUse"?: boolean;
  /**
   * operating system
   */
  "operatingSystem"?: string;
  /**
   * pattern Id
   */
  "patternId"?: number;
  /**
   * source Id
   */
  "sourceId"?: number;
  /**
   * version
   */
  "version"?: string;
  "source"?: model.LogAnalyticsSource;
}

export namespace LogAnalyticsPatternFilter {
  export function getJsonObj(obj: LogAnalyticsPatternFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "pattern": obj.pattern
          ? model.LogAnalyticsSourcePattern.getJsonObj(obj.pattern)
          : undefined,

        "source": obj.source ? model.LogAnalyticsSource.getJsonObj(obj.source) : undefined
      }
    };

    return jsonObj;
  }
}
