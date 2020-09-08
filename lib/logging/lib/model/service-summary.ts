/**
 * loggingManagementControlplane API
 * loggingManagementControlplane API specification
 * OpenAPI spec version: 20200531
 *
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
 * Summary of Services that are integrated with public logging
 */
export interface ServiceSummary {
  /**
   * Tenant OCID.
   */
  "tenantId": string;
  /**
   * Apollo project namespace if any.
   */
  "namespace"?: string;
  /**
   * Service id as set in Service Principal.
   */
  "servicePrincipalName": string;
  /**
   * Service endpoint.
   */
  "endpoint": string;
  /**
   * User friendly service name.
   */
  "name": string;
  /**
   * Service id.
   */
  "id"?: string;
  /**
   * Type of Resource that a Service provides.
   */
  "resourceTypes": Array<model.ResourceType>;
}

export namespace ServiceSummary {
  export function getJsonObj(obj: ServiceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceTypes": obj.resourceTypes
          ? obj.resourceTypes.map(item => {
              return model.ResourceType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
