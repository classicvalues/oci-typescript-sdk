/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the database used for updating the target database in Data Safe.
 */
export interface UpdateTargetDatabaseDetails {
  /**
   * The display name of the target database in Data Safe.
   */
  "displayName"?: string;
  /**
   * The description of the target database in Data Safe.
   */
  "description"?: string;
  "databaseDetails"?:
    | model.InstalledDatabaseDetails
    | model.AutonomousDatabaseDetails
    | model.DatabaseCloudServiceDetails;
  "credentials"?: model.Credentials;
  "tlsConfig"?: model.TlsConfig;
  "connectionOption"?: model.PrivateEndpoint | model.OnPremiseConnector;
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
}

export namespace UpdateTargetDatabaseDetails {
  export function getJsonObj(obj: UpdateTargetDatabaseDetails): object {
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
  export function getDeserializedJsonObj(obj: UpdateTargetDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getDeserializedJsonObj(obj.databaseDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.Credentials.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "tlsConfig": obj.tlsConfig
          ? model.TlsConfig.getDeserializedJsonObj(obj.tlsConfig)
          : undefined,
        "connectionOption": obj.connectionOption
          ? model.ConnectionOption.getDeserializedJsonObj(obj.connectionOption)
          : undefined
      }
    };

    return jsonObj;
  }
}
