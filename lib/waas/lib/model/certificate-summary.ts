/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * A summary of the SSL certificate's information.
 * **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface CertificateSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SSL certificate.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SSL certificate's compartment.
   */
  "compartmentId"?: string;
  /**
   * The user-friendly name of the SSL certificate.
   */
  "displayName"?: string;
  /**
   * The date and time the certificate will expire, expressed in RFC 3339 timestamp format.
   */
  "timeNotValidAfter"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current lifecycle state of the certificate.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The date and time the certificate was created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
}

export namespace CertificateSummary {
  export function getJsonObj(obj: CertificateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
