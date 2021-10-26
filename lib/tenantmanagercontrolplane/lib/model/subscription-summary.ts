/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * Summary of subscription.
 */
export interface SubscriptionSummary {
  /**
   * OCID of the subscription details for a particular root compartment or tenancy.
   */
  "id": string;
  /**
   * Classic subscription ID.
   */
  "classicSubscriptionId": string;
  /**
   * OCID of the compartment. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * The type of subscription, such as 'CLOUDCM', 'SAAS', 'ERP', or 'CRM'.
   */
  "serviceName": string;
  /**
   * Denotes if the subscription is from classic systems or not.
   */
  "isClassicSubscription"?: boolean;
  /**
   * The pay model of the subscription, such as 'Pay as you go' or 'Monthly'.
   */
  "paymentModel"?: string;
  /**
   * Region for the subscription.
   */
  "regionAssignment"?: string;
  /**
   * Lifecycle state of the subscription.
   */
  "lifecycleState"?: model.SubscriptionLifecycleState;
  /**
   * Subscription start time.
   */
  "startDate"?: Date;
  /**
   * Subscription end time.
   */
  "endDate"?: Date;
  /**
   * Date-time when subscription is updated.
   */
  "timeUpdated"?: Date;
  /**
   * Date-time when subscription is created.
   */
  "timeCreated"?: Date;
}

export namespace SubscriptionSummary {
  export function getJsonObj(obj: SubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
