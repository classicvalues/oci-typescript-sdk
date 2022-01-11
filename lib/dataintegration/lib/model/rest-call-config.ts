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
 * The REST API configuration.
 */
export interface RestCallConfig {
  /**
   * The REST method to use.
   */
  "methodType"?: RestCallConfig.MethodType;
  /**
   * The headers for the REST call.
   */
  "requestHeaders"?: { [key: string]: string };
  "configValues"?: model.ConfigValues;
}

export namespace RestCallConfig {
  export enum MethodType {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE",
    Put = "PUT"
  }

  export function getJsonObj(obj: RestCallConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestCallConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined
      }
    };

    return jsonObj;
  }
}
