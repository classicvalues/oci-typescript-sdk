/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Recommendation Definition.
 */
export interface RecommendationSummary {
  /**
   * Unique identifier for Recommendation
   */
  "id": string;
  /**
   * Recommendation type
   */
  "type"?: model.RecommendationType;
  /**
   * Tenant Identifier
   */
  "tenantId"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * targetId associated with the problem
   */
  "targetId": string;
  /**
   * Recommendation details
   */
  "details": { [key: string]: string };
  /**
   * The Risk Level
   */
  "riskLevel"?: model.RiskLevel;
  /**
   * Count number of the problem Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "problemCount": number;
  /**
   * The current state of the Recommendation.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The lifecycleDetail will give more detail on the substate of the lifecycleState.
   */
  "lifecycleDetail": model.RecommendationLifecycleDetail;
  /**
   * problem creating time
   */
  "timeCreated"?: Date;
  /**
   * problem updating time
   */
  "timeUpdated"?: Date;
  /**
   * recommendation string showing on UX
   */
  "name": string;
  /**
   * description of the recommendation
   */
  "description": string;
}

export namespace RecommendationSummary {
  export function getJsonObj(obj: RecommendationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecommendationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
