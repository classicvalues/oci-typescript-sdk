/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

/**
 * The bulk action resource entity.
 *
 */
export interface BulkActionResource {
  /**
   * The resource OCID.
   */
  "identifier": string;
  /**
   * The resource-type. To get the list of supported resource-types use
   * {@link #listBulkActionResourceTypes(ListBulkActionResourceTypesRequest) listBulkActionResourceTypes}.
   *
   */
  "entityType": string;
  /**
    * Additional information that helps to identity the resource for bulk action.
* <p>
The APIs to delete and move most resource types only require the resource identifier (ocid).
* But some resource-types require additional identifying information.
* <p>
This information is provided in the resource's public API document. It is also
* available through the
* {@link #listBulkActionResourceTypes(ListBulkActionResourceTypesRequest) listBulkActionResourceTypes}.
* <p>
**Example**:
* The APIs to delete or move the `buckets` resource-type require `namespaceName` and `bucketName` to identify the resource, as
* shown in the APIs, {@link #deleteBucket(DeleteBucketRequest) deleteBucket} and
* {@link #updateBucket(UpdateBucketRequest) updateBucket}.
* <p>
To add a bucket for bulk actions, specify `namespaceName` and `bucketName` in
* the metadata property as shown in this example
* <p>
    {
*       \"identifier\": \"<OCID_of_bucket>\"
*       \"entityType\": \"bucket\",
*       \"metadata\":
*       {
*         \"namespaceName\": \"sampleNamespace\",
*         \"bucketName\": \"sampleBucket\"
*       }
*     }
* 
    */
  "metadata"?: { [key: string]: string };
}

export namespace BulkActionResource {
  export function getJsonObj(obj: BulkActionResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
