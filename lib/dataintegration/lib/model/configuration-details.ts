/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A key map. If provided, key is replaced with generated key.
 */
export interface ConfigurationDetails {
  "dataAsset"?:
    | model.DataAssetFromJdbc
    | model.DataAssetFromOracleDetails
    | model.DataAssetFromAdwcDetails
    | model.DataAssetFromObjectStorageDetails
    | model.DataAssetFromAtpDetails
    | model.DataAssetFromMySQL;
  "connection"?:
    | model.ConnectionFromObjectStorage
    | model.ConnectionFromAdwc
    | model.ConnectionFromAtp
    | model.ConnectionFromOracle
    | model.ConnectionFromMySQL
    | model.ConnectionFromJdbc;
  /**
   * The compartment ID of the object store.
   */
  "compartmentId"?: string;
  "schema"?: model.Schema;
}

export namespace ConfigurationDetails {
  export function getJsonObj(obj: ConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAsset": obj.dataAsset ? model.DataAsset.getJsonObj(obj.dataAsset) : undefined,
        "connection": obj.connection ? model.Connection.getJsonObj(obj.connection) : undefined,

        "schema": obj.schema ? model.Schema.getJsonObj(obj.schema) : undefined
      }
    };

    return jsonObj;
  }
}
