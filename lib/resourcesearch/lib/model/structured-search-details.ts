/**
 * Search Service API
 * Search for resources in your cloud network.
 * OpenAPI spec version: 20180409
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
 * A request that uses Search's structured query language to specify filter conditions to apply to search results.
 * For more information about writing queries, see [Search Language Syntax](https://docs.cloud.oracle.com/en-us/iaas/Content/Search/Concepts/querysyntax.htm).
 *
 */
export interface StructuredSearchDetails extends model.SearchDetails {
  /**
   * The structured query describing which resources to search for.
   */
  "query": string;

  "type": string;
}

export namespace StructuredSearchDetails {
  export function getJsonObj(obj: StructuredSearchDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SearchDetails.getJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "Structured";
  export function getDeserializedJsonObj(
    obj: StructuredSearchDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchDetails.getDeserializedJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
}
