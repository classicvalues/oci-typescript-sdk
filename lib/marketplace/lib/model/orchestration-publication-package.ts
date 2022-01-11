/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * A publication package for stack publications.
 */
export interface OrchestrationPublicationPackage extends model.PublicationPackage {
  /**
   * A link to the stack resource.
   */
  "resourceLink"?: string;
  /**
   * A list of variables for the stack resource.
   */
  "variables"?: Array<model.OrchestrationVariable>;

  "packageType": string;
}

export namespace OrchestrationPublicationPackage {
  export function getJsonObj(
    obj: OrchestrationPublicationPackage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PublicationPackage.getJsonObj(obj) as OrchestrationPublicationPackage)),
      ...{
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.OrchestrationVariable.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const packageType = "ORCHESTRATION";
  export function getDeserializedJsonObj(
    obj: OrchestrationPublicationPackage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PublicationPackage.getDeserializedJsonObj(
            obj
          ) as OrchestrationPublicationPackage)),
      ...{
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.OrchestrationVariable.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
