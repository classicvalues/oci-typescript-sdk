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
 * Details for the Autonomous Transaction Processing data asset type.
 */
export interface UpdateDataAssetFromAtp extends model.UpdateDataAssetDetails {
  /**
   * The Autonomous Transaction Processing instance service name.
   */
  "serviceName"?: string;
  /**
   * The Autonomous Transaction Processing driver class
   */
  "driverClass"?: string;
  /**
   * The credential file content from an Autonomous Transaction Processing wallet.
   */
  "credentialFileContent"?: string;
  "walletSecret"?: model.SensitiveAttribute;
  "walletPasswordSecret"?: model.SensitiveAttribute;
  /**
   * The Autonomous Data Warehouse instance region Id.
   */
  "regionId"?: string;
  /**
   * The Autonomous Data Warehouse instance tenancy Id.
   */
  "tenancyId"?: string;
  /**
   * The Autonomous Data Warehouse instance compartment Id.
   */
  "compartmentId"?: string;
  /**
   * Tha Autonomous Database Id
   */
  "autonomousDbId"?: string;
  "defaultConnection"?: model.UpdateConnectionFromAtp;

  "modelType": string;
}

export namespace UpdateDataAssetFromAtp {
  export function getJsonObj(obj: UpdateDataAssetFromAtp, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getJsonObj(obj) as UpdateDataAssetFromAtp)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletPasswordSecret)
          : undefined,

        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromAtp.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ATP_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: UpdateDataAssetFromAtp,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getDeserializedJsonObj(obj) as UpdateDataAssetFromAtp)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletPasswordSecret)
          : undefined,

        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromAtp.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
