/**
 *
 *
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/GetObject.ts.html |here} to see how to use GetObjectRequest.
 */
export interface GetObjectRequest extends common.BaseRequest {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespaceName": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: `my-new-bucket1`
   *
   */
  "bucketName": string;
  /**
   * The name of the object. Avoid entering confidential information.
   * Example: `test/object1.log`
   *
   */
  "objectName": string;
  /**
   * VersionId used to identify a particular version of the object
   */
  "versionId"?: string;
  /**
   * The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of
   * the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload
   * the resource.
   *
   */
  "ifMatch"?: string;
  /**
   * The entity tag (ETag) to avoid matching. Wildcards ('*') are not allowed. If the specified ETag does not
   * match the ETag of the existing resource, the request returns the expected response. If the ETag matches
   * the ETag of the existing resource, the request returns an HTTP 304 status without a response body.
   *
   */
  "ifNoneMatch"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
  /**
   * Optional byte range to fetch, as described in [RFC 7233](https://tools.ietf.org/html/rfc7233#section-2.1).
   * Note that only a single range of bytes is supported.
   *
   */
  "range"?: common.Range;
  /**
   * The optional header that specifies \"AES256\" as the encryption algorithm. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerAlgorithm"?: string;
  /**
   * The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or
   * decrypt the data. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKey"?: string;
  /**
   * The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This
   * value is used to check the integrity of the encryption key. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKeySha256"?: string;
  /**
   * Specify this query parameter to override the value of the Content-Disposition response header in the GetObject response.
   */
  "httpResponseContentDisposition"?: string;
  /**
   * Specify this query parameter to override the Cache-Control response header in the GetObject response.
   */
  "httpResponseCacheControl"?: string;
  /**
   * Specify this query parameter to override the Content-Type response header in the GetObject response.
   */
  "httpResponseContentType"?: string;
  /**
   * Specify this query parameter to override the Content-Language response header in the GetObject response.
   */
  "httpResponseContentLanguage"?: string;
  /**
   * Specify this query parameter to override the Content-Encoding response header in the GetObject response.
   */
  "httpResponseContentEncoding"?: string;
  /**
   * Specify this query parameter to override the Expires response header in the GetObject response.
   */
  "httpResponseExpires"?: string;
}
