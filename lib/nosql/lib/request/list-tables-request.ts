/**
 *
 *
 * OpenAPI spec version: 20190828
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/nosql/ListTables.ts.html |here} to see how to use ListTablesRequest.
 */
export interface ListTablesRequest extends common.BaseRequest {
  /**
   * The ID of a table's compartment.
   */
  "compartmentId": string;
  /**
   * A shell-globbing-style (*?[]) filter for names.
   */
  "name"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start
   * retrieving results. This is usually retrieved from a previous
   * list call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: ListTablesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be
   * provided. Default order for timeCreated is descending. Default
   * order for name is ascending. If no value is specified
   * timeCreated is default.
   *
   */
  "sortBy"?: ListTablesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Filter list by the lifecycle state of the item.
   */
  "lifecycleState"?: ListTablesRequest.LifecycleState;
}

export namespace ListTablesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    Name = "name"
  }

  export enum LifecycleState {
    All = "ALL",
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Inactive = "INACTIVE"
  }
}
