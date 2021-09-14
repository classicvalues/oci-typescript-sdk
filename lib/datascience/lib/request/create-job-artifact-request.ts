/**
 *
 *
 * OpenAPI spec version: 20190101
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
import stream = require("stream");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datascience/CreateJobArtifact.ts.html |here} to see how to use CreateJobArtifactRequest.
 */
export interface CreateJobArtifactRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "jobId": string;
  /**
   * The content length of the body.
   */
  "contentLength"?: number;
  /**
   * The job artifact to upload.
   */
  "jobArtifact": Uint8Array | Buffer | Blob | stream.Readable | ReadableStream | string;
  /**
   * Unique Oracle assigned identifier for the request. If you need to contact Oracle about a particular request, then provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * This header allows you to specify a filename during upload. This file name is used to dispose of the file contents
   * while downloading the file. If this optional field is not populated in the request, then the OCID of the model is used for the file
   * name when downloading.
   * Example: `{\"Content-Disposition\": \"attachment\"
   *            \"filename\"=\"model.tar.gz\"
   *            \"Content-Length\": \"2347\"
   *            \"Content-Type\": \"application/gzip\"}`
   *
   */
  "contentDisposition"?: string;
}
