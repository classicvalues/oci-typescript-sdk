/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Operating System of the platform on which the Java Runtime was reported.
 *
 */
export interface OperatingSystem {
  /**
   * The operating system type, such as Windows or Linux
   */
  "family": model.OsFamily;
  /**
   * The name of the operating system as provided by the Java system property os.name.
   */
  "name": string;
  /**
   * The version of the operating system as provided by the Java system property os.version.
   */
  "version": string;
  /**
   * The architecture of the operating system as provided by the Java system property os.arch.
   */
  "architecture": string;
}

export namespace OperatingSystem {
  export function getJsonObj(obj: OperatingSystem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperatingSystem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
