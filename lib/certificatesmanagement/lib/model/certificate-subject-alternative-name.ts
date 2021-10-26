/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * A subject alternative name for the certificate that binds additional or alternate names to the subject of the certificate. In the certificate, the alternate subject name format is \"type:name\".
 *
 */
export interface CertificateSubjectAlternativeName {
  /**
   * The subject alternative name type. Currently only DNS domain or host names and IP addresses are supported.
   */
  "type": CertificateSubjectAlternativeName.Type;
  /**
   * The subject alternative name.
   */
  "value": string;
}

export namespace CertificateSubjectAlternativeName {
  export enum Type {
    Dns = "DNS",
    Ip = "IP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CertificateSubjectAlternativeName): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateSubjectAlternativeName): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
