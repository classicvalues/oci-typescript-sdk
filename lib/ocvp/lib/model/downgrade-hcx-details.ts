/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * The HCX on-premise license keys to be reserved when downgrading from HCX Enterprise to HCX Advanced.
 * Downgrading from HCX Enterprise to HCX Advanced reduces the number of provided license keys from 10 to 3.
 *
 */
export interface DowngradeHcxDetails {
  /**
   * The HCX on-premise license keys to be reserved when downgrading from HCX Enterprise to HCX Advanced.
   *
   */
  "reservingHcxOnPremiseLicenseKeys": Array<string>;
}

export namespace DowngradeHcxDetails {
  export function getJsonObj(obj: DowngradeHcxDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DowngradeHcxDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
