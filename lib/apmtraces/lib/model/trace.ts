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
 * Definition of a trace object.
 *
 */
export interface Trace {
  /**
   * Unique identifier (traceId) for the trace that represents the span set.  Note that this field is
   * defined as traceKey in the API to comply with OCI API fields naming conventions.  The traceKey maps to
   * the traceId in the APM repository.
   *
   */
  "key": string;
  /**
   * Root span name associated with the trace. This is usually the flow start operation name.
   * Null if the root span is not yet completed.
   *
   */
  "rootSpanOperationName"?: string;
  /**
   * Start time of the earliest span in this span collection.
   *
   */
  "timeEarliestSpanStarted"?: Date;
  /**
   * End time of the span that most recently ended in this span collection.
   *
   */
  "timeLatestSpanEnded"?: Date;
  /**
   * The number of spans that have been processed by the system for this trace.  Note that there
   * could be additional spans that have not been processed or reported yet if the trace is still
   * in progress.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "spanCount"?: number;
  /**
   * The number of spans with error that have been processed by the system for this trace.
   * Note that the number of spans with errors may be less than the total number of actual spans
   * in this trace.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorSpanCount"?: number;
  /**
   * Service associated with this trace.
   *
   */
  "rootSpanServiceName"?: string;
  /**
   * Start time of the root span for this span collection.
   *
   */
  "timeRootSpanStarted"?: Date;
  /**
   * End time of the root span for this span collection.
   *
   */
  "timeRootSpanEnded"?: Date;
  /**
   * Time taken for the root span operation to complete in milliseconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rootSpanDurationInMs"?: number;
  /**
   * Time between the start of the earliest span and the end of the most recent span in milliseconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "traceDurationInMs"?: number;
  /**
   * Boolean flag that indicates whether the trace errored out.
   *
   */
  "isFault"?: boolean;
  /**
   * The status of the trace.
   * The trace statuses are defined as follows:
   * complete \u2013 a root span has been recorded, but there is no information on the errors.
   * success - a complete root span is recorded there is a successful error type and error code - HTTP 200.
   * incomplete - the root span has not yet been received.
   * error - the root span returned with an error. There may or may not be an associated error code or error type.
   *
   */
  "traceStatus"?: string;
  /**
   * Error type of the trace.
   *
   */
  "traceErrorType"?: string;
  /**
   * Error code of the trace.
   *
   */
  "traceErrorCode"?: string;
  /**
   * A summary of the spans by service
   *
   */
  "serviceSummaries"?: Array<model.TraceServiceSummary>;
  "spanSummary"?: model.TraceSpanSummary;
  /**
   * An array of spans in the trace.
   *
   */
  "spans": Array<model.Span>;
}

export namespace Trace {
  export function getJsonObj(obj: Trace): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceSummaries": obj.serviceSummaries
          ? obj.serviceSummaries.map(item => {
              return model.TraceServiceSummary.getJsonObj(item);
            })
          : undefined,
        "spanSummary": obj.spanSummary
          ? model.TraceSpanSummary.getJsonObj(obj.spanSummary)
          : undefined,
        "spans": obj.spans
          ? obj.spans.map(item => {
              return model.Span.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Trace): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceSummaries": obj.serviceSummaries
          ? obj.serviceSummaries.map(item => {
              return model.TraceServiceSummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "spanSummary": obj.spanSummary
          ? model.TraceSpanSummary.getDeserializedJsonObj(obj.spanSummary)
          : undefined,
        "spans": obj.spans
          ? obj.spans.map(item => {
              return model.Span.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
