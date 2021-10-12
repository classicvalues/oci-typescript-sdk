/**
 * DlsDataPlane API
 * A description of the DlsDataPlane API.
 * OpenAPI spec version: 20211001
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
 * Object Storage Source Details.
 */
export interface ObjectStorageSourceDetails extends model.SourceDetails {
  /**
   * The path relative to the prefix specified in the dataset source details (file name).
   */
  "relativePath": string;
  /**
   * The full path of the file this record belongs to.
   */
  "path": string;
  /**
   * The offset into the file containing the content. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offset"?: number;
  /**
   * The length from offset into the file containing the content. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length"?: number;

  "sourceType": string;
}

export namespace ObjectStorageSourceDetails {
  export function getJsonObj(obj: ObjectStorageSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getJsonObj(obj) as ObjectStorageSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as ObjectStorageSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
