/**
 * loggingManagementControlplane API
 * loggingManagementControlplane API specification
 * OpenAPI spec version: 20200531
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
 * OCI service logging configuration.
 */
export interface OciService extends model.Source {
  /**
   * Service generating log.
   */
  "service": string;
  /**
   * The unique identifier of the resource emitting the log.
   */
  "resource": string;
  /**
   * Log object category.
   */
  "category": string;
  /**
   * Log category parameters are stored here.
   */
  "parameters"?: { [key: string]: string };

  "sourceType": string;
}

export namespace OciService {
  export function getJsonObj(obj: OciService, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Source.getJsonObj(obj) as OciService)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OCISERVICE";
}
