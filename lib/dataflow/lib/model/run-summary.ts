/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * A summary of the run.
 *
 */
export interface RunSummary {
  /**
   * The application ID.
   *
   */
  "applicationId": string;
  /**
   * The OCID of a compartment.
   *
   */
  "compartmentId": string;
  /**
   * The data read by the run in bytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataReadInBytes"?: number;
  /**
   * The data written by the run in bytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataWrittenInBytes"?: number;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. This name is not necessarily unique.
   *
   */
  "displayName"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * The ID of a run.
   *
   */
  "id": string;
  /**
   * The Spark language.
   *
   */
  "language": model.ApplicationLanguage;
  /**
   * The detailed messages about the lifecycle state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of this run.
   *
   */
  "lifecycleState": model.RunLifecycleState;
  /**
   * Unique Oracle assigned identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The OCID of the user who created the resource.
   *
   */
  "ownerPrincipalId"?: string;
  /**
   * The username of the user who created the resource.  If the username of the owner does not exist,
   * `null` will be returned and the caller should refer to the ownerPrincipalId value instead.
   *
   */
  "ownerUserName"?: string;
  /**
   * The duration of the run in milliseconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "runDurationInMilliseconds"?: number;
  /**
   * The total number of oCPU requested by the run.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalOCpu"?: number;
  /**
   * The date and time a application was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2018-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The date and time a application was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2018-04-03T21:10:29.600Z`
   *
   */
  "timeUpdated": Date;
}

export namespace RunSummary {
  export function getJsonObj(obj: RunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
