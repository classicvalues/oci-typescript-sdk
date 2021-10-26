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
 * The manner in which the certificate was created. You can have a CA that was generated internally by the service issue a certificate. You can subsequently manage that certificate internally or externally. Alternatively, you can import a certificate that was issued by an external, third-party public or private CA, and then manage it internally.
 *
 **/
export enum CertificateConfigType {
  IssuedByInternalCa = "ISSUED_BY_INTERNAL_CA",
  ManagedExternallyIssuedByInternalCa = "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA",
  Imported = "IMPORTED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CertificateConfigType {
  export function getJsonObj(obj: CertificateConfigType): CertificateConfigType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CertificateConfigType): CertificateConfigType {
    return obj;
  }
}
