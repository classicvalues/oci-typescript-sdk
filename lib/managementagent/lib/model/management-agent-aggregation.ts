/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * A count of Management Agents sharing the values for specified dimensions.
 */
export interface ManagementAgentAggregation {
  "dimensions"?: model.ManagementAgentAggregationDimensions;
  /**
   * The number of Management Agents in this group Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
}

export namespace ManagementAgentAggregation {
  export function getJsonObj(obj: ManagementAgentAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.ManagementAgentAggregationDimensions.getJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementAgentAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.ManagementAgentAggregationDimensions.getDeserializedJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
}
