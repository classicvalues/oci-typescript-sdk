/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * Specifies where to output the export.
 */
export interface SnapshotExportDetails {
  "exportType": string;
}

export namespace SnapshotExportDetails {
  export function getJsonObj(obj: SnapshotExportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("exportType" in obj && obj.exportType) {
      switch (obj.exportType) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageSnapshotExportDetails.getJsonObj(
            <model.ObjectStorageSnapshotExportDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.exportType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SnapshotExportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("exportType" in obj && obj.exportType) {
      switch (obj.exportType) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageSnapshotExportDetails.getDeserializedJsonObj(
            <model.ObjectStorageSnapshotExportDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.exportType);
      }
    }
    return jsonObj;
  }
}
