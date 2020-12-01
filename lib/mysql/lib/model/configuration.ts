/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * The set of MySQL variables to be used when deploying a MySQL Database Service DB System.
 *
 */
export interface Configuration {
  /**
   * The OCID of the Configuration.
   */
  "id": string;
  /**
   * OCID of the Compartment the Configuration exists in.
   */
  "compartmentId": string;
  /**
   * User-provided data about the Configuration.
   */
  "description"?: string;
  /**
   * The display name of the Configuration.
   */
  "displayName"?: string;
  /**
   * The name of the associated Shape.
   */
  "shapeName": string;
  /**
   * The Configuration type, DEFAULT or CUSTOM.
   */
  "type": Configuration.Type;
  /**
   * The date and time the Configuration was created, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the Configuration was last updated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The current state of the Configuration.
   */
  "lifecycleState": Configuration.LifecycleState;
  "variables": model.ConfigurationVariables;
  /**
   * The OCID of the Configuration from which this Configuration is
   * \"derived\". This is entirely a metadata relationship. There is no
   * relation between the values in this Configuration and its parent.
   *
   */
  "parentConfigurationId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Configuration {
  export enum Type {
    Default = "DEFAULT",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Configuration): object {
    const jsonObj = {
      ...obj,
      ...{
        "variables": obj.variables
          ? model.ConfigurationVariables.getJsonObj(obj.variables)
          : undefined
      }
    };

    return jsonObj;
  }
}
