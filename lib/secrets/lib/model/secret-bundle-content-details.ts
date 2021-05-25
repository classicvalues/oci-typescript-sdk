/**
 * Vault Service Secret Retrieval API
 * API for retrieving secrets from vaults.
 * OpenAPI spec version: 20190301
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
 * The contents of the secret.
 */
export interface SecretBundleContentDetails {
  "contentType": string;
}

export namespace SecretBundleContentDetails {
  export function getJsonObj(obj: SecretBundleContentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("contentType" in obj && obj.contentType) {
      switch (obj.contentType) {
        case "BASE64":
          return model.Base64SecretBundleContentDetails.getJsonObj(
            <model.Base64SecretBundleContentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.contentType);
      }
    }
    return jsonObj;
  }
}
