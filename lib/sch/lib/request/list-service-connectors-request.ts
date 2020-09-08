/**
 *
 *
 * OpenAPI spec version: 20200909
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListServiceConnectorsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment for this request.
   *
   */
  "compartmentId": string;
  /**
 * A filter to return only resources that match the given lifecycle state.
* <p>
Example: `ACTIVE`
* 
 */
  "lifecycleState"?: model.LifecycleState;
  /**
 * A filter to return only resources that match the given display name exactly.
* <p>
Example: `example_service_connector`
* 
 */
  "displayName"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return
   * in a paginated \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the opc-next-page response header from the previous
   * \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for `timeCreated` is descending.
   * Default order for `displayName` is ascending. If no value is specified `timeCreated` is default.
   *
   */
  "sortBy"?: ListServiceConnectorsRequest.SortBy;
  /**
   * The unique Oracle-assigned identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListServiceConnectorsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
