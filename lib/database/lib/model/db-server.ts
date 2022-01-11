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
 * Details of the Exacc Db server resource. Applies to Exadata Cloud@Customer instances only.
 *
 */
export interface DbServer {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exacc Db server.
   */
  "id"?: string;
  /**
   * The user-friendly name for the Db server. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The number of CPU cores enabled on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The allocated memory in GBs on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The allocated local node storage in GBs on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM Clusters associated with the Db server.
   *
   */
  "vmClusterIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Db nodes associated with the Db server.
   *
   */
  "dbNodeIds"?: Array<string>;
  /**
   * The current state of the Db server.
   */
  "lifecycleState"?: DbServer.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The total number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCpuCount"?: number;
  /**
   * The total memory available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMemoryInGBs"?: number;
  /**
   * The total local node storage available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDbNodeStorageInGBs"?: number;
  /**
   * The date and time that the Db Server was created.
   */
  "timeCreated"?: Date;
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
}

export namespace DbServer {
  export enum LifecycleState {
    Creating = "CREATING",
    Available = "AVAILABLE",
    Unavailable = "UNAVAILABLE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbServer): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbServer): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
