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
 * A collection of resources and their category assignments.
 */
export interface LogAnalyticsResourceCategoryCollection {
  /**
   * An array of categories. The array contents include detailed information about
   * the distinct set of categories assigned to all the listed resources under items.
   *
   */
  "categories"?: Array<model.LogAnalyticsCategory>;
  /**
   * A list of resources and their category assignments
   */
  "items"?: Array<model.LogAnalyticsResourceCategory>;
}

export namespace LogAnalyticsResourceCategoryCollection {
  export function getJsonObj(obj: LogAnalyticsResourceCategoryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.LogAnalyticsResourceCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsResourceCategoryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getDeserializedJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.LogAnalyticsResourceCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
