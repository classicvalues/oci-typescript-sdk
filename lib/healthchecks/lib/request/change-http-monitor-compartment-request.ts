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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/healthchecks/ChangeHttpMonitorCompartment.ts.html |here} to see how to use ChangeHttpMonitorCompartmentRequest.
 */
export interface ChangeHttpMonitorCompartmentRequest extends common.BaseRequest {
  /**
   * The OCID of a monitor.
   */
  "monitorId": string;
  /**
   * The details needed to move the monitor.
   */
  "changeHttpMonitorCompartmentDetails": model.ChangeHttpMonitorCompartmentDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource,
   * set the `if-match` parameter to the value of the etag from a previous GET
   * or POST response for that resource.  The resource will be updated or deleted
   * only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request that can be retried in case of a timeout or
   * server error without risk of executing the same action again. Retry tokens expire after 24
   * hours.
   * <p>
   *Note:* Retry tokens can be invalidated before the 24 hour time limit due to conflicting
   * operations, such as a resource being deleted or purged from the system.
   *
   */
  "opcRetryToken"?: string;
}
