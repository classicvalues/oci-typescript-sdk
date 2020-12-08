/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for a custom endpoint for the integration instance (update).
 */
export interface UpdateCustomEndpointDetails {
  /**
   * A custom hostname to be used for the integration instance URL, in FQDN format.
   */
  "hostname": string;
  /**
   * Optional OCID of a vault/secret containing a private SSL certificate bundle to be used for the custom hostname.
   * All certificates should be stored in a single base64 encoded secret.
   * Note the update will fail if this is not a valid certificate.
   *
   */
  "certificateSecretId"?: string;
}

export namespace UpdateCustomEndpointDetails {
  export function getJsonObj(obj: UpdateCustomEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
