/**
 *
 *
 * OpenAPI spec version: 20211001
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

export interface GetRecordPreviewContentResponse {
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The content size of the body in bytes.
   */
  "contentLength": number;
  /**
   * The content disposition of the body, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 19.5.1.
   */
  "contentDisposition": string;
  /**
   * The content type as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.17.
   */
  "contentType": string;
  /**
   * Cache-control allows us to tell browsers to cache assets, how long to store them, and whether to validate them.
   *
   */
  "cacheControl": string;
  /**
   * The returned stream.Readable | ReadableStream instance, or null if {@link #isNotModified()} is true.
   */
  "value": stream.Readable | ReadableStream;

  /**
   * Flag to indicate whether or not the object was modified.  If this is true,
   * the getter for the object itself will return null.  Callers should check this
   * if they specified one of the request params that might result in a conditional
   * response (like 'if-match'/'if-none-match').
   */
  "isNotModified": boolean;
}
