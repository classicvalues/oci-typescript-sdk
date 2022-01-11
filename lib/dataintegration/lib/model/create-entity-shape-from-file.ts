/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The file data entity details.
 */
export interface CreateEntityShapeFromFile extends model.CreateEntityShapeDetails {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  "shape"?: model.Shape;
  /**
   * The shape ID.
   */
  "shapeId"?: string;
  "types"?: model.TypeLibrary;
  /**
   * The entity type.
   */
  "entityType"?: CreateEntityShapeFromFile.EntityType;
  /**
   * Specifies other type label.
   */
  "otherTypeLabel"?: string;
  /**
   * An array of unique keys.
   */
  "uniqueKeys"?: Array<model.UniqueKey>;
  /**
   * An array of foreign keys.
   */
  "foreignKeys"?: Array<model.ForeignKey>;
  /**
   * The resource name.
   */
  "resourceName"?: string;
  "dataFormat"?: model.DataFormat;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;

  "modelType": string;
}

export namespace CreateEntityShapeFromFile {
  export enum EntityType {
    Table = "TABLE",
    View = "VIEW",
    File = "FILE",
    Queue = "QUEUE",
    Stream = "STREAM",
    Other = "OTHER"
  }

  export function getJsonObj(obj: CreateEntityShapeFromFile, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateEntityShapeDetails.getJsonObj(obj) as CreateEntityShapeFromFile)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined,

        "types": obj.types ? model.TypeLibrary.getJsonObj(obj.types) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getJsonObj(item);
            })
          : undefined,

        "dataFormat": obj.dataFormat ? model.DataFormat.getJsonObj(obj.dataFormat) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FILE_ENTITY";
  export function getDeserializedJsonObj(
    obj: CreateEntityShapeFromFile,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateEntityShapeDetails.getDeserializedJsonObj(
            obj
          ) as CreateEntityShapeFromFile)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "shape": obj.shape ? model.Shape.getDeserializedJsonObj(obj.shape) : undefined,

        "types": obj.types ? model.TypeLibrary.getDeserializedJsonObj(obj.types) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getDeserializedJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getDeserializedJsonObj(item);
            })
          : undefined,

        "dataFormat": obj.dataFormat
          ? model.DataFormat.getDeserializedJsonObj(obj.dataFormat)
          : undefined
      }
    };

    return jsonObj;
  }
}
