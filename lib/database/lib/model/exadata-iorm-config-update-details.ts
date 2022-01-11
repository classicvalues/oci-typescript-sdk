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
 * IORM Setting details for this Exadata System to be updated
 *
 */
export interface ExadataIormConfigUpdateDetails {
  /**
   * Value for the IORM objective
   * Default is \"Auto\"
   *
   */
  "objective"?: ExadataIormConfigUpdateDetails.Objective;
  /**
   * Array of IORM Setting for all the database in
   * this Exadata DB System
   *
   */
  "dbPlans"?: Array<model.DbIormConfigUpdateDetail>;
}

export namespace ExadataIormConfigUpdateDetails {
  export enum Objective {
    LowLatency = "LOW_LATENCY",
    HighThroughput = "HIGH_THROUGHPUT",
    Balanced = "BALANCED",
    Auto = "AUTO",
    Basic = "BASIC"
  }

  export function getJsonObj(obj: ExadataIormConfigUpdateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbPlans": obj.dbPlans
          ? obj.dbPlans.map(item => {
              return model.DbIormConfigUpdateDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExadataIormConfigUpdateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbPlans": obj.dbPlans
          ? obj.dbPlans.map(item => {
              return model.DbIormConfigUpdateDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
