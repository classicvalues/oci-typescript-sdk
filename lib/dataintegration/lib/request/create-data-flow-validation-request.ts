/**
 *
 *
 * OpenAPI spec version: 20200430
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataintegration/CreateDataFlowValidation.ts.html |here} to see how to use CreateDataFlowValidationRequest.
 */
export interface CreateDataFlowValidationRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The information needed to create the data flow validation for the data flow object.
   */
  "createDataFlowValidationDetails": model.CreateDataFlowValidationDetails;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again.
   *
   */
  "opcRetryToken"?: string;
}
