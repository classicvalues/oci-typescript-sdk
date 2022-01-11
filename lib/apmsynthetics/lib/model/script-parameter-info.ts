/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
 * OpenAPI spec version: 20200630
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
 * Information about script parameters.
 * isOverwritten specifies that the default parameter present in the script content is overwritten.
 *
 */
export interface ScriptParameterInfo {
  "scriptParameter": model.ScriptParameter;
  /**
   * If parameter value is default or overwritten.
   *
   */
  "isOverwritten": boolean;
}

export namespace ScriptParameterInfo {
  export function getJsonObj(obj: ScriptParameterInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "scriptParameter": obj.scriptParameter
          ? model.ScriptParameter.getJsonObj(obj.scriptParameter)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScriptParameterInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "scriptParameter": obj.scriptParameter
          ? model.ScriptParameter.getDeserializedJsonObj(obj.scriptParameter)
          : undefined
      }
    };

    return jsonObj;
  }
}
