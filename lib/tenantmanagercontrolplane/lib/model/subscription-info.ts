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
 * A single subscription's details.
 */
export interface SubscriptionInfo {
  /**
   * Subscription ID.
   */
  "spmSubscriptionId": string;
  /**
   * Service name for subscription.
   */
  "service": string;
  /**
   * Subscription start date. An RFC 3339-formatted date and time string.
   */
  "startDate": Date;
  /**
   * Subscription end date. An RFC 3339-formatted date and time string.
   */
  "endDate": Date;
  /**
   * List of SKUs the subscription contains.
   */
  "skus": Array<model.Sku>;
}

export namespace SubscriptionInfo {
  export function getJsonObj(obj: SubscriptionInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.Sku.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.Sku.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
