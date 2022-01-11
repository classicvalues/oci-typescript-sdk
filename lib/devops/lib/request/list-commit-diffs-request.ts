/**
 *
 *
 * OpenAPI spec version: 20210630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListCommitDiffs.ts.html |here} to see how to use ListCommitDiffsRequest.
 */
export interface ListCommitDiffsRequest extends common.BaseRequest {
  /**
   * Unique repository identifier.
   */
  "repositoryId": string;
  /**
   * The commit or reference name to compare changes against.
   */
  "baseVersion": string;
  /**
   * The commit or reference name where changes are coming from.
   */
  "targetVersion": string;
  /**
   * Boolean value to indicate whether to use merge base or most recent revision.
   */
  "isComparisonFromMergeBase"?: boolean;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request.  If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId"?: string;
}
