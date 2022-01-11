/**
 * Billing Center Gateway API
 * This site describes all the Rest endpoints of Billing Center Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * PayPal Payment related details
 */
export interface PaypalPaymentDetail extends model.PaymentDetail {
  "paymentMethod": string;
}

export namespace PaypalPaymentDetail {
  export function getJsonObj(obj: PaypalPaymentDetail, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PaymentDetail.getJsonObj(obj) as PaypalPaymentDetail)),
      ...{}
    };

    return jsonObj;
  }
  export const paymentMethod = "PAYPAL";
  export function getDeserializedJsonObj(
    obj: PaypalPaymentDetail,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PaymentDetail.getDeserializedJsonObj(obj) as PaypalPaymentDetail)),
      ...{}
    };

    return jsonObj;
  }
}
