/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The AWR database parameter change history.
 */
export interface AwrDbParameterChangeCollection extends model.AwrQueryResult {
  /**
   * A list of AWR database parameter change summary data.
   */
  "items"?: Array<model.AwrDbParameterChangeSummary>;

  "awrResultType": string;
}

export namespace AwrDbParameterChangeCollection {
  export function getJsonObj(
    obj: AwrDbParameterChangeCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDbParameterChangeCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbParameterChangeSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_DB_PARAMETER_CHANGE";
}
