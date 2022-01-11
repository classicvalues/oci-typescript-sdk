/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Information about an index.
 */
export interface Index {
  /**
   * Index name.
   */
  "name"?: string;
  /**
   * Compartment Identifier.
   */
  "compartmentId"?: string;
  /**
   * The name of the table to which this index belongs.
   */
  "tableName"?: string;
  /**
   * the OCID of the table to which this index belongs.
   */
  "tableId"?: string;
  /**
   * A set of keys for a secondary index.
   */
  "keys"?: Array<model.IndexKey>;
  /**
   * The state of an index.
   */
  "lifecycleState"?: Index.LifecycleState;
  /**
   * A message describing the current state in more detail.
   *
   */
  "lifecycleDetails"?: string;
}

export namespace Index {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Index): object {
    const jsonObj = {
      ...obj,
      ...{
        "keys": obj.keys
          ? obj.keys.map(item => {
              return model.IndexKey.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Index): object {
    const jsonObj = {
      ...obj,
      ...{
        "keys": obj.keys
          ? obj.keys.map(item => {
              return model.IndexKey.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
