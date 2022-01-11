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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListCommits.ts.html |here} to see how to use ListCommitsRequest.
 */
export interface ListCommitsRequest extends common.BaseRequest {
  /**
   * Unique repository identifier.
   */
  "repositoryId": string;
  /**
   * A filter to return only resources that match the given reference name.
   */
  "refName"?: string;
  /**
   * A filter to exclude commits that match the given reference name.
   */
  "excludeRefName"?: string;
  /**
   * A filter to return only commits that affect any of the specified paths.
   */
  "filePath"?: string;
  /**
   * A filter to return commits only created after the specified timestamp value.
   */
  "timestampGreaterThanOrEqualTo"?: Date;
  /**
   * A filter to return commits only created before the specified timestamp value.
   */
  "timestampLessThanOrEqualTo"?: Date;
  /**
   * A filter to return any commits that contains the given message.
   */
  "commitMessage"?: string;
  /**
   * A filter to return any commits that are pushed by the requested author.
   */
  "authorName"?: string;
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
