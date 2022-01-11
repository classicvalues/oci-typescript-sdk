/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * High level summary of query job work request.
 *
 */
export interface QueryWorkRequestSummary {
  /**
   * Unique OCID identifier to reference this query job work Request with.
   *
   */
  "id": string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId"?: string;
  /**
   * When the work request started.
   */
  "timeStarted": Date;
  /**
   * When the work request was accepted. Should match timeStarted in all cases.
   *
   */
  "timeAccepted"?: Date;
  /**
   * When the work request finished execution.
   */
  "timeFinished"?: Date;
  /**
   * When the work request will expire.
   */
  "timeExpires"?: Date;
  /**
   * Current execution mode for the job.
   */
  "mode": model.JobMode;
  /**
   * Percentage progress completion of the query.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * Work request status.
   *
   */
  "status"?: model.WorkRequestStatus;
  /**
   * Asynchronous action name.
   *
   */
  "operationType"?: model.QueryOperationType;
}

export namespace QueryWorkRequestSummary {
  export function getJsonObj(obj: QueryWorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryWorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
