/**
 * Logging Search API
 * Search for logs in your compartements / log groups / log objects.
 * OpenAPI spec version: 20190909
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
 * A log search result entry
 */
export interface SearchResult {
  /**
   * JSON blob containing the search entry with projected fields.
   */
  "data": any;
}

export namespace SearchResult {
  export function getJsonObj(obj: SearchResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
