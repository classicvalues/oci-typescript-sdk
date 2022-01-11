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
 * The configuration details for creating a Data Guard association between databases.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateDataGuardAssociationDetails {
  /**
   * The database software image [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "databaseSoftwareImageId"?: string;
  /**
    * A strong password for the `SYS`, `SYSTEM`, and `PDB Admin` users to apply during standby creation.
* <p>
The password must contain no fewer than nine characters and include:
* <p>
* At least two uppercase characters.
* <p>
* At least two lowercase characters.
* <p>
* At least two numeric characters.
* <p>
* At least two special characters. Valid special characters include \"_\", \"#\", and \"-\" only.
* <p>
**The password MUST be the same as the primary admin password.**
* 
    */
  "databaseAdminPassword": string;
  /**
   * The protection mode to set up between the primary and standby databases. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   * <p>
   **IMPORTANT** - The only protection mode currently supported by the Database service is MAXIMUM_PERFORMANCE.
   *
   */
  "protectionMode": CreateDataGuardAssociationDetails.ProtectionMode;
  /**
    * The redo transport type to use for this Data Guard association.  Valid values depend on the specified `protectionMode`:
* <p>
* MAXIMUM_AVAILABILITY - SYNC or FASTSYNC
* * MAXIMUM_PERFORMANCE - ASYNC
* * MAXIMUM_PROTECTION - SYNC
* <p>
For more information, see
* [Redo Transport Services](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400)
* in the Oracle Data Guard documentation.
* <p>
**IMPORTANT** - The only transport type currently supported by the Database service is ASYNC.
* 
    */
  "transportType": CreateDataGuardAssociationDetails.TransportType;
  /**
   * True if active Data Guard is enabled.
   */
  "isActiveDataGuardEnabled"?: boolean;
  /**
   * Specifies the `DB_UNIQUE_NAME` of the peer database to be created.
   *
   */
  "peerDbUniqueName"?: string;
  /**
   * Specifies a prefix for the `Oracle SID` of the database to be created.
   *
   */
  "peerSidPrefix"?: string;

  "creationType": string;
}

export namespace CreateDataGuardAssociationDetails {
  export enum ProtectionMode {
    MaximumAvailability = "MAXIMUM_AVAILABILITY",
    MaximumPerformance = "MAXIMUM_PERFORMANCE",
    MaximumProtection = "MAXIMUM_PROTECTION"
  }

  export enum TransportType {
    Sync = "SYNC",
    Async = "ASYNC",
    Fastsync = "FASTSYNC"
  }

  export function getJsonObj(obj: CreateDataGuardAssociationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("creationType" in obj && obj.creationType) {
      switch (obj.creationType) {
        case "NewDbSystem":
          return model.CreateDataGuardAssociationWithNewDbSystemDetails.getJsonObj(
            <model.CreateDataGuardAssociationWithNewDbSystemDetails>(<object>jsonObj),
            true
          );
        case "ExistingVmCluster":
          return model.CreateDataGuardAssociationToExistingVmClusterDetails.getJsonObj(
            <model.CreateDataGuardAssociationToExistingVmClusterDetails>(<object>jsonObj),
            true
          );
        case "ExistingDbSystem":
          return model.CreateDataGuardAssociationToExistingDbSystemDetails.getJsonObj(
            <model.CreateDataGuardAssociationToExistingDbSystemDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.creationType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDataGuardAssociationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("creationType" in obj && obj.creationType) {
      switch (obj.creationType) {
        case "NewDbSystem":
          return model.CreateDataGuardAssociationWithNewDbSystemDetails.getDeserializedJsonObj(
            <model.CreateDataGuardAssociationWithNewDbSystemDetails>(<object>jsonObj),
            true
          );
        case "ExistingVmCluster":
          return model.CreateDataGuardAssociationToExistingVmClusterDetails.getDeserializedJsonObj(
            <model.CreateDataGuardAssociationToExistingVmClusterDetails>(<object>jsonObj),
            true
          );
        case "ExistingDbSystem":
          return model.CreateDataGuardAssociationToExistingDbSystemDetails.getDeserializedJsonObj(
            <model.CreateDataGuardAssociationToExistingDbSystemDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.creationType);
      }
    }
    return jsonObj;
  }
}
