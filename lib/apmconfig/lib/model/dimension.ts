/**
 * Apm Configuration API
 * An API for the APM Configuration service. Use this API to query and set APM configuration.
 * OpenAPI spec version: 20210201
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
 * A dimension is a label that can be used to describe or group metrics.
 *
 */
export interface Dimension {
  /**
   * The dimension name
   */
  "name": string;
  /**
   * The source to populate the dimension. Must be NULL at the moment.
   *
   */
  "valueSource"?: string;
}

export namespace Dimension {
  export function getJsonObj(obj: Dimension): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Dimension): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
