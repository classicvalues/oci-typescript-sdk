/**
 *
 *
 * OpenAPI spec version: 20180501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/healthchecks/GetPingMonitor.ts.html |here} to see how to use GetPingMonitorRequest.
 */
export interface GetPingMonitorRequest extends common.BaseRequest {
  /**
   * The OCID of a monitor.
   */
  "monitorId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The `If-None-Match` header field makes the request method conditional on
   * the absence of any current representation of the target resource, when
   * the field-value is `*`, or having a selected representation with an
   * entity-tag that does not match any of those listed in the field-value.
   *
   */
  "ifNoneMatch"?: string;
}
