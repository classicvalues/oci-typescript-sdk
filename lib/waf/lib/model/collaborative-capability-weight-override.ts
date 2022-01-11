/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * Collaborative capability key and overriding weight.
 */
export interface CollaborativeCapabilityWeightOverride {
  /**
   * Unique key of collaborative capability for which weight will be overridden.
   */
  "key": string;
  /**
   * The value of weight to set. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weight": number;
}

export namespace CollaborativeCapabilityWeightOverride {
  export function getJsonObj(obj: CollaborativeCapabilityWeightOverride): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CollaborativeCapabilityWeightOverride): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
