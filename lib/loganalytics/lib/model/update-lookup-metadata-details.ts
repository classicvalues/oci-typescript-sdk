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
 * UpdateLookupMetadataDetails
 */
export interface UpdateLookupMetadataDetails {
  /**
   * The default match value.
   */
  "defaultMatchValue"?: string;
  /**
   * The lookup description.
   */
  "description"?: string;
  /**
   * The lookup fields.
   */
  "fields"?: Array<model.LogAnalyticsLookupFields>;
  /**
   * The maximum number of matches. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMatches"?: number;
  /**
   * An array of categories to assign to the lookup. Specifying the name attribute for each category would suffice.
   * Oracle-defined category assignments cannot be removed.
   *
   */
  "categories"?: Array<model.LogAnalyticsCategory>;
}

export namespace UpdateLookupMetadataDetails {
  export function getJsonObj(obj: UpdateLookupMetadataDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LogAnalyticsLookupFields.getJsonObj(item);
            })
          : undefined,

        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateLookupMetadataDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LogAnalyticsLookupFields.getDeserializedJsonObj(item);
            })
          : undefined,

        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
