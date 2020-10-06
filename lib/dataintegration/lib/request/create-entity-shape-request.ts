/**
 *
 *
 * OpenAPI spec version: 20200430
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
export interface CreateEntityShapeRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The connection key.
   */
  "connectionKey": string;
  /**
   * The schema resource name used for retrieving schemas.
   */
  "schemaResourceName": string;
  /**
   * The details needed to create the data entity shape.
   */
  "createEntityShapeDetails": model.CreateEntityShapeFromFile;
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
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the `etag` from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the `etag` you provide matches the resource's current `etag` value.
   * When 'if-match' is provided and its value does not exactly match the 'etag' of the resource on the server, the request fails with the 412 response code.
   *
   */
  "ifMatch"?: string;
}
