/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * The information about the current management agent plugins that agent is having.
 */
export interface ManagementAgentPluginDetails {
  /**
   * Plugin Id
   */
  "pluginId"?: string;
  /**
   * Management Agent Plugin Name
   */
  "pluginName": string;
  /**
   * Management Agent Plugin Identifier, can be renamed
   */
  "pluginDisplayName"?: string;
  /**
   * Plugin Version
   */
  "pluginVersion"?: string;
  /**
   * flag indicating whether the plugin is in enabled mode or disabled mode.
   */
  "isEnabled"?: boolean;
}

export namespace ManagementAgentPluginDetails {
  export function getJsonObj(obj: ManagementAgentPluginDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementAgentPluginDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
