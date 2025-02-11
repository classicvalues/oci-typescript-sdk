/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
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
 * A VCN [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) and a list of CIDR blocks.
 */
export interface DatabaseToolsVirtualSource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a VCN.
   */
  "vcnId"?: string;
  /**
   * A list of CIDR blocks.
   */
  "ipRanges"?: Array<string>;
}

export namespace DatabaseToolsVirtualSource {
  export function getJsonObj(obj: DatabaseToolsVirtualSource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsVirtualSource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
