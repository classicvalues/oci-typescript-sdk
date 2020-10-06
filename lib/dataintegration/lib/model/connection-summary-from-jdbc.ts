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
 * The connection details for a generic JDBC data asset.
 */
export interface ConnectionSummaryFromJdbc extends model.ConnectionSummary {
  /**
   * The user name for the connection.
   */
  "username"?: string;

  "modelType": string;
}

export namespace ConnectionSummaryFromJdbc {
  export function getJsonObj(obj: ConnectionSummaryFromJdbc, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as ConnectionSummaryFromJdbc)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "GENERIC_JDBC_CONNECTION";
}
