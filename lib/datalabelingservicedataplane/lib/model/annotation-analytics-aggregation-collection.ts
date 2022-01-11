/**
 * DlsDataPlane API
 * A description of the DlsDataPlane API.
 * OpenAPI spec version: 20211001
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
 * Aggregation entities are required by the api consistency guidelines for API Consistency Guidelines#AnalyticsAPIs.  These are used to summarize annotations for a given dataset and will be used to populate UI elements.  Aggregations need to have the fields that identify the exact scope that they're summarizing.  Any filters to the list API we apply would have to show up in the aggregation. We should limit the number of filters and dimensions as much as possible.
 */
export interface AnnotationAnalyticsAggregationCollection {
  /**
   * List of Annotation entities.
   */
  "items": Array<model.AnnotationAnalyticsAggregation>;
}

export namespace AnnotationAnalyticsAggregationCollection {
  export function getJsonObj(obj: AnnotationAnalyticsAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AnnotationAnalyticsAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnnotationAnalyticsAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AnnotationAnalyticsAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
