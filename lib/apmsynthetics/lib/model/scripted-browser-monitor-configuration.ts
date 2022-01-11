/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
 * OpenAPI spec version: 20200630
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
 * Configuration details for the SCRIPTED_BROWSER monitor type.
 */
export interface ScriptedBrowserMonitorConfiguration extends model.MonitorConfiguration {
  /**
   * If certificate validation is enabled, then the call will fail in case of certification errors.
   */
  "isCertificateValidationEnabled"?: boolean;
  "networkConfiguration"?: model.NetworkConfiguration;

  "configType": string;
}

export namespace ScriptedBrowserMonitorConfiguration {
  export function getJsonObj(
    obj: ScriptedBrowserMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getJsonObj(obj) as ScriptedBrowserMonitorConfiguration)),
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "SCRIPTED_BROWSER_CONFIG";
  export function getDeserializedJsonObj(
    obj: ScriptedBrowserMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getDeserializedJsonObj(
            obj
          ) as ScriptedBrowserMonitorConfiguration)),
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
