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
 * The information about a data flow task.
 */
export interface TaskFromDataLoaderTaskDetails extends model.Task {
  "dataFlow"?: model.DataFlow;

  "modelType": string;
}

export namespace TaskFromDataLoaderTaskDetails {
  export function getJsonObj(
    obj: TaskFromDataLoaderTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Task.getJsonObj(obj) as TaskFromDataLoaderTaskDetails)),
      ...{
        "dataFlow": obj.dataFlow ? model.DataFlow.getJsonObj(obj.dataFlow) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DATA_LOADER_TASK";
  export function getDeserializedJsonObj(
    obj: TaskFromDataLoaderTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Task.getDeserializedJsonObj(obj) as TaskFromDataLoaderTaskDetails)),
      ...{
        "dataFlow": obj.dataFlow ? model.DataFlow.getDeserializedJsonObj(obj.dataFlow) : undefined
      }
    };

    return jsonObj;
  }
}
