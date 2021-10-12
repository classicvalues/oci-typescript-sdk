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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of the WebAppFirewall.
 */
export interface WebAppFirewallSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the WebAppFirewall.
   */
  "id": string;
  /**
   * WebAppFirewall display name, can be renamed.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of WebAppFirewallPolicy, which is attached to the resource.
   */
  "webAppFirewallPolicyId": string;
  /**
   * The time the WebAppFirewall was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the WebAppFirewall was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the WebAppFirewall.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in FAILED state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags": { [key: string]: { [key: string]: any } };

  "backendType": string;
}

export namespace WebAppFirewallSummary {
  export function getJsonObj(obj: WebAppFirewallSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.WebAppFirewallLoadBalancerSummary.getJsonObj(
            <model.WebAppFirewallLoadBalancerSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.backendType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WebAppFirewallSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.WebAppFirewallLoadBalancerSummary.getDeserializedJsonObj(
            <model.WebAppFirewallLoadBalancerSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.backendType);
      }
    }
    return jsonObj;
  }
}
