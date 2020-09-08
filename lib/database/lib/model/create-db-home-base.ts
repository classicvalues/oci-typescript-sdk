/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for creating a Database Home.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateDbHomeBase {
  /**
   * The user-provided name of the Database Home.
   */
  "displayName"?: string;
  /**
   * The database software image [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "databaseSoftwareImageId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "source": string;
}

export namespace CreateDbHomeBase {
  export function getJsonObj(obj: CreateDbHomeBase): object {
    const jsonObj = { ...obj, ...{} };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "DATABASE":
          return model.CreateDbHomeWithDbSystemIdFromDatabaseDetails.getJsonObj(
            <model.CreateDbHomeWithDbSystemIdFromDatabaseDetails>(<object>jsonObj),
            true
          );
        case "DB_BACKUP":
          return model.CreateDbHomeWithDbSystemIdFromBackupDetails.getJsonObj(
            <model.CreateDbHomeWithDbSystemIdFromBackupDetails>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.CreateDbHomeWithDbSystemIdDetails.getJsonObj(
            <model.CreateDbHomeWithDbSystemIdDetails>(<object>jsonObj),
            true
          );
        case "VM_CLUSTER_NEW":
          return model.CreateDbHomeWithVmClusterIdDetails.getJsonObj(
            <model.CreateDbHomeWithVmClusterIdDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
