/**
 * OneSubscription API Usage Computation
 * OneSubscription API Common set of Subscription Plan Management (SPM) Usage Computation resources

 * OpenAPI spec version: 20210501
 * Contact: kuaskum_org_ww@oracle.com
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
 * Computed Usage Summary object
 *
 */
export interface ComputedUsage {
  /**
   * Computed Usage created time, expressed in RFC 3339 timestamp format.
   *
   */
  "timeCreated"?: Date;
  /**
   * Computed Usage updated time, expressed in RFC 3339 timestamp format.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Subscribed service line parent id
   *
   */
  "parentSubscribedServiceId"?: string;
  "parentProduct"?: model.Product;
  /**
   * Subscription plan number
   *
   */
  "planNumber"?: string;
  /**
   * Currency code
   *
   */
  "currencyCode"?: string;
  /**
   * References the tier in the ratecard for that usage (OCI will be using the same reference to cross-reference for correctness on the usage csv report), comes from Entity OBSCNTR_IPT_PRODUCTTIER.
   *
   */
  "rateCardTierdId"?: string;
  /**
   * Ratecard Id at subscribed service level
   *
   */
  "rateCardId"?: string;
  /**
   * SPM Internal compute records source .
   *
   */
  "computeSource"?: string;
  /**
   * Data Center Attribute as sent by MQS to SPM.
   *
   */
  "dataCenter"?: string;
  /**
   * MQS Identfier send to SPM , SPM does not transform this attribute and is received as is.
   *
   */
  "mqsMessageId"?: string;
  /**
   * SPM Internal computed usage Id , 32 character string
   *
   */
  "id": string;
  /**
   * Total Quantity that was used for computation
   *
   */
  "quantity"?: string;
  /**
   * SPM Internal usage Line number identifier in SPM coming from Metered Services entity.
   *
   */
  "usageNumber"?: string;
  /**
   * SPM Internal Original usage Line number identifier in SPM coming from Metered Services entity.
   *
   */
  "originalUsageNumber"?: string;
  /**
   * Subscribed service commitmentId.
   *
   */
  "commitmentServiceId"?: string;
  /**
   * Invoicing status for the aggregated compute usage
   *
   */
  "isInvoiced"?: boolean;
  /**
   * Usage compute type in SPM.
   *
   */
  "type"?: ComputedUsage.Type;
  /**
   * Usae computation date, expressed in RFC 3339 timestamp format.
   *
   */
  "timeOfArrival"?: Date;
  /**
   * Metered Service date, expressed in RFC 3339 timestamp format.
   *
   */
  "timeMeteredOn"?: Date;
  /**
   * Net Unit Price for the product in consideration, price actual.
   *
   */
  "netUnitPrice"?: string;
  /**
   * Computed Line Amount rounded.
   *
   */
  "costRounded"?: string;
  /**
   * Computed Line Amount not rounded
   *
   */
  "cost"?: string;
  "product"?: model.Product;
  /**
   * Unit of Messure
   *
   */
  "unitOfMeasure"?: string;
}

export namespace ComputedUsage {
  export enum Type {
    Promotion = "PROMOTION",
    DoNotBill = "DO_NOT_BILL",
    Usage = "USAGE",
    Commit = "COMMIT",
    Overage = "OVERAGE",
    PayAsYouGo = "PAY_AS_YOU_GO",
    MonthlyMinimum = "MONTHLY_MINIMUM",
    DelayedUsageInvoiceTiming = "DELAYED_USAGE_INVOICE_TIMING",
    DelayedUsageCommitmentExp = "DELAYED_USAGE_COMMITMENT_EXP",
    OnAccountCredit = "ON_ACCOUNT_CREDIT",
    ServiceCredit = "SERVICE_CREDIT",
    CommitmentExpiration = "COMMITMENT_EXPIRATION",
    FundedAllocation = "FUNDED_ALLOCATION",
    DonotBillUsagePostTermination = "DONOT_BILL_USAGE_POST_TERMINATION",
    DelayedUsagePostTermination = "DELAYED_USAGE_POST_TERMINATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ComputedUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentProduct": obj.parentProduct
          ? model.Product.getJsonObj(obj.parentProduct)
          : undefined,

        "product": obj.product ? model.Product.getJsonObj(obj.product) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputedUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentProduct": obj.parentProduct
          ? model.Product.getDeserializedJsonObj(obj.parentProduct)
          : undefined,

        "product": obj.product ? model.Product.getDeserializedJsonObj(obj.product) : undefined
      }
    };

    return jsonObj;
  }
}
