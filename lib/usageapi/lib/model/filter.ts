/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The filter object for query usage.
 */
export interface Filter {
  /**
   * The filter operator. Example: 'AND', 'OR', 'NOT'.
   */
  "operator"?: Filter.Operator;
  /**
   * The dimensions to filter on.
   */
  "dimensions"?: Array<model.Dimension>;
  /**
   * The tags to filter on.
   */
  "tags"?: Array<model.Tag>;
  /**
   * The nested filter object.
   */
  "filters"?: Array<model.Filter>;
}

export namespace Filter {
  export enum Operator {
    And = "AND",
    Not = "NOT",
    Or = "OR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Filter): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.Dimension.getJsonObj(item);
            })
          : undefined,
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined,
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Filter): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.Dimension.getDeserializedJsonObj(item);
            })
          : undefined,
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined,
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.Filter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
