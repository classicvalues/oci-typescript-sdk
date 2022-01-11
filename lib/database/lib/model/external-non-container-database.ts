/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * an external Oracle non-container database.
 */
export interface ExternalNonContainerDatabase {
  "operationsInsightsConfig"?: model.OperationsInsightsConfig;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
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
  /**
   * The user-friendly name for the external database. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure external database resource.
   *
   */
  "id": string;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the Oracle Cloud Infrastructure external database resource.
   */
  "lifecycleState": ExternalNonContainerDatabase.LifecycleState;
  /**
   * The date and time the database was created.
   */
  "timeCreated": Date;
  /**
   * The `DB_UNIQUE_NAME` of the external database.
   */
  "dbUniqueName"?: string;
  /**
   * The Oracle Database ID, which identifies an Oracle Database located outside of Oracle Cloud.
   *
   */
  "dbId"?: string;
  /**
   * The Oracle Database version.
   */
  "databaseVersion"?: string;
  /**
   * The Oracle Database edition.
   *
   */
  "databaseEdition"?: ExternalNonContainerDatabase.DatabaseEdition;
  /**
   * The time zone of the external database.
   * It is a time zone offset (a character type in the format '[+|-]TZH:TZM') or a time zone region name,
   * depending on how the time zone value was specified when the database was created / last altered.
   *
   */
  "timeZone"?: string;
  /**
   * The character set of the external database.
   */
  "characterSet"?: string;
  /**
   * The national character of the external database.
   */
  "ncharacterSet"?: string;
  /**
   * The database packs licensed for the external Oracle Database.
   */
  "dbPacks"?: string;
  /**
   * The Oracle Database configuration
   */
  "databaseConfiguration"?: ExternalNonContainerDatabase.DatabaseConfiguration;
  "databaseManagementConfig"?: model.DatabaseManagementConfig;
}

export namespace ExternalNonContainerDatabase {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    NotConnected = "NOT_CONNECTED",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DatabaseEdition {
    StandardEdition = "STANDARD_EDITION",
    EnterpriseEdition = "ENTERPRISE_EDITION",
    EnterpriseEditionHighPerformance = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    EnterpriseEditionExtremePerformance = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DatabaseConfiguration {
    Rac = "RAC",
    SingleInstance = "SINGLE_INSTANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalNonContainerDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "operationsInsightsConfig": obj.operationsInsightsConfig
          ? model.OperationsInsightsConfig.getJsonObj(obj.operationsInsightsConfig)
          : undefined,

        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.DatabaseManagementConfig.getJsonObj(obj.databaseManagementConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalNonContainerDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "operationsInsightsConfig": obj.operationsInsightsConfig
          ? model.OperationsInsightsConfig.getDeserializedJsonObj(obj.operationsInsightsConfig)
          : undefined,

        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.DatabaseManagementConfig.getDeserializedJsonObj(obj.databaseManagementConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
