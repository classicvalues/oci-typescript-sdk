/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the conditional input link.
 */
export interface ConditionalInputLink extends model.FlowPortLink {
  "fromLink"?: model.OutputLink;
  "fieldMap"?:
    | model.RuleBasedFieldMap
    | model.DirectFieldMap
    | model.CompositeFieldMap
    | model.DirectNamedFieldMap;
  "condition"?: model.Expression;

  "modelType": string;
}

export namespace ConditionalInputLink {
  export function getJsonObj(obj: ConditionalInputLink, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FlowPortLink.getJsonObj(obj) as ConditionalInputLink)),
      ...{
        "fromLink": obj.fromLink ? model.OutputLink.getJsonObj(obj.fromLink) : undefined,
        "fieldMap": obj.fieldMap ? model.FieldMap.getJsonObj(obj.fieldMap) : undefined,
        "condition": obj.condition ? model.Expression.getJsonObj(obj.condition) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "CONDITIONAL_INPUT_LINK";
  export function getDeserializedJsonObj(
    obj: ConditionalInputLink,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FlowPortLink.getDeserializedJsonObj(obj) as ConditionalInputLink)),
      ...{
        "fromLink": obj.fromLink
          ? model.OutputLink.getDeserializedJsonObj(obj.fromLink)
          : undefined,
        "fieldMap": obj.fieldMap ? model.FieldMap.getDeserializedJsonObj(obj.fieldMap) : undefined,
        "condition": obj.condition
          ? model.Expression.getDeserializedJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
}
