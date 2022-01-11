/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Specifies advanced options for Terraform commands. These options are not necessary for normal usage of Terraform.
 *
 */
export interface TerraformAdvancedOptions {
  /**
   * Specifies whether to refresh the state for each resource before running the job (operation).
   * Refreshing the state can affect performance. Consider setting to `false` if the configuration includes several resources.
   * Used with the following operations: `PLAN`, `APPLY`, `DESTROY`.
   *
   */
  "isRefreshRequired"?: boolean;
  /**
   * Limits the number of concurrent Terraform operations when [walking the graph](https://www.terraform.io/docs/internals/graph.html#walking-the-graph).
   * Use this parameter to help debug Terraform issues or to accomplish certain special use cases.
   * A higher value might cause resources to be throttled.
   * Used with the following operations: `PLAN`, `APPLY`, `DESTROY`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parallelism"?: number;
  /**
   * Enables detailed logs at the specified verbosity for running the job (operation).
   * Used with the following operations: `PLAN`, `APPLY`, `DESTROY`.
   *
   */
  "detailedLogLevel"?: TerraformAdvancedOptions.DetailedLogLevel;
}

export namespace TerraformAdvancedOptions {
  export enum DetailedLogLevel {
    Error = "ERROR",
    Warn = "WARN",
    Info = "INFO",
    Debug = "DEBUG",
    Trace = "TRACE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TerraformAdvancedOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TerraformAdvancedOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
