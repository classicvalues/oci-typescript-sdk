/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A composite field map.
 */
export interface CompositeFieldMap extends model.FieldMap {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "configValues"?: model.ConfigValues;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * An array of field maps.
   */
  "fieldMaps"?: Array<model.FieldMap>;

  "modelType": string;
}

export namespace CompositeFieldMap {
  export function getJsonObj(obj: CompositeFieldMap, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldMap.getJsonObj(obj) as CompositeFieldMap)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined,

        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.FieldMap.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "COMPOSITE_FIELD_MAP";
  export function getDeserializedJsonObj(
    obj: CompositeFieldMap,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FieldMap.getDeserializedJsonObj(obj) as CompositeFieldMap)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined,

        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.FieldMap.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
