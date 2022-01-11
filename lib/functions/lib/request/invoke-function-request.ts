/**
 *
 *
 * OpenAPI spec version: 20181201
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
import stream = require("stream");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/InvokeFunction.ts.html |here} to see how to use InvokeFunctionRequest.
 */
export interface InvokeFunctionRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of this function.
   *
   */
  "functionId": string;
  /**
   * The body of the function invocation.
   * Note: The maximum size of the request is limited. This limit is currently 6MB and the endpoint will not accept requests that are bigger than this limit.
   *
   */
  "invokeFunctionBody"?: Uint8Array | Buffer | Blob | stream.Readable | ReadableStream | string;
  /**
   * An optional intent header that indicates to the FDK the way the event should be interpreted. E.g. 'httprequest', 'cloudevent'.
   *
   */
  "fnIntent"?: InvokeFunctionRequest.FnIntent;
  /**
   * Indicates whether the functions platform should execute the request directly and return the result ('sync') or
   * whether the platform should enqueue the request for later processing and acknowledge that it has been processed ('detached').
   *
   */
  "fnInvokeType"?: InvokeFunctionRequest.FnInvokeType;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace InvokeFunctionRequest {
  export enum FnIntent {
    Httprequest = "httprequest",
    Cloudevent = "cloudevent"
  }

  export enum FnInvokeType {
    Detached = "detached",
    Sync = "sync"
  }
}
