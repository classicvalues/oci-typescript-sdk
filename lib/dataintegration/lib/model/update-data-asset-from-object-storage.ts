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
 * Details for the Oracle Object storage data asset type.
 */
export interface UpdateDataAssetFromObjectStorage extends model.UpdateDataAssetDetails {
  /**
   * The Oracle Object storage Region ie. us-ashburn-1
   */
  "ociRegion"?: string;
  /**
   * The Oracle Object storage URL.
   */
  "url"?: string;
  /**
   * The OCI tenancy OCID.
   */
  "tenancyId"?: string;
  /**
   * The namespace for the specified Oracle Object storage resource. You can find the namespace under Object Storage Settings in the Console.
   */
  "namespace"?: string;
  "defaultConnection"?: model.UpdateConnectionFromObjectStorage;

  "modelType": string;
}

export namespace UpdateDataAssetFromObjectStorage {
  export function getJsonObj(
    obj: UpdateDataAssetFromObjectStorage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getJsonObj(obj) as UpdateDataAssetFromObjectStorage)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromObjectStorage.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_OBJECT_STORAGE_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: UpdateDataAssetFromObjectStorage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDataAssetFromObjectStorage)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromObjectStorage.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
