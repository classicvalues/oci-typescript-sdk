/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the Data Safe target database.
 */
export interface TargetDatabase {
  /**
   * The OCID of the compartment which contains the Data Safe target database.
   */
  "compartmentId": string;
  /**
   * The OCID of the Data Safe target database.
   */
  "id": string;
  /**
   * The display name of the target database in Data Safe.
   */
  "displayName": string;
  /**
   * The description of the target database in Data Safe.
   */
  "description"?: string;
  "databaseDetails":
    | model.InstalledDatabaseDetails
    | model.AutonomousDatabaseDetails
    | model.DatabaseCloudServiceDetails;
  "credentials"?: model.Credentials;
  "tlsConfig"?: model.TlsConfig;
  "connectionOption"?: model.PrivateEndpoint | model.OnPremiseConnector;
  /**
   * The current state of the target database in Data Safe.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Details about the current state of the target database in Data Safe.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time of target database registration and creation in Data Safe.
   */
  "timeCreated": Date;
  /**
   * The date and time of the target database update in Data Safe.
   */
  "timeUpdated"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace TargetDatabase {
  export function getJsonObj(obj: TargetDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getJsonObj(obj.databaseDetails)
          : undefined,
        "credentials": obj.credentials ? model.Credentials.getJsonObj(obj.credentials) : undefined,
        "tlsConfig": obj.tlsConfig ? model.TlsConfig.getJsonObj(obj.tlsConfig) : undefined,
        "connectionOption": obj.connectionOption
          ? model.ConnectionOption.getJsonObj(obj.connectionOption)
          : undefined
      }
    };

    return jsonObj;
  }
}
