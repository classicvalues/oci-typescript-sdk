/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * A base object for creating a private application package.
 */
export interface CreatePrivateApplicationPackage {
  /**
   * The package version.
   */
  "version": string;

  "packageType": string;
}

export namespace CreatePrivateApplicationPackage {
  export function getJsonObj(obj: CreatePrivateApplicationPackage): object {
    const jsonObj = { ...obj, ...{} };

    if ("packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.CreatePrivateApplicationStackPackage.getJsonObj(
            <model.CreatePrivateApplicationStackPackage>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.packageType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePrivateApplicationPackage): object {
    const jsonObj = { ...obj, ...{} };

    if ("packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.CreatePrivateApplicationStackPackage.getDeserializedJsonObj(
            <model.CreatePrivateApplicationStackPackage>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.packageType);
      }
    }
    return jsonObj;
  }
}
