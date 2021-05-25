/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type.
 * OpenAPI spec version: 20181025
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
 * Request object for create quota operation.
 */
export interface CreateQuotaDetails {
  /**
   * The OCID of the compartment containing the resource this quota applies to.
   */
  "compartmentId": string;
  /**
   * The description you assign to the quota.
   */
  "description": string;
  /**
   * The name you assign to the quota during creation. The name must be unique across all quotas
   * in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * An array of quota statements written in the declarative quota statement language.
   *
   */
  "statements": Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateQuotaDetails {
  export function getJsonObj(obj: CreateQuotaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
