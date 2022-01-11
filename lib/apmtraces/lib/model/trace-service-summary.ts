/**
 * Apm Traces API
 * API for APM Trace service. Use this API to query the Traces and associated Spans.

 * OpenAPI spec version: 20200630
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
 * A summary of the spans in a trace by service.
 *
 */
export interface TraceServiceSummary {
  /**
   * Name associated with the service.
   *
   */
  "spanServiceName": string;
  /**
   * Number of spans for serviceName in this trace.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSpans": number;
  /**
   * Number of spans with errorsfor serviceName in this trace.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorSpans": number;
}

export namespace TraceServiceSummary {
  export function getJsonObj(obj: TraceServiceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TraceServiceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
