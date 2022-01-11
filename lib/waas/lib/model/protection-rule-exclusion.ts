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
* Allows specified types of requests to bypass the protection rule. If a request matches any of the criteria in the `exclusions` field, the protection rule will not be executed. Rules can have more than one exclusion and exclusions are applied to requests disjunctively, meaning the specified exclusion strings are independently matched against the specified targets of a request. The first target to match a specified string will trigger an exclusion. **Example:** If the following exclusions are defined for a protection rule:
* <p>
    \"action\": \"BLOCK\",
*     \"exclusions\": [
*         {
*             \"target\":\"REQUEST_COOKIES\",
*             \"exclusions\":[\"example.com\", \"12345\", \"219ffwef9w0f\"]
*         },
*         {
*             \"target\":\"REQUEST_COOKIE_NAMES\",
*             \"exclusions\":[\"OAMAuthnCookie\", \"JSESSIONID\", \"HCM-PSJSESSIONID\"]
*         }
*     ],
*     \"key\": \"1000000\",
* <p>
A request with the cookie name `sessionid` would trigger an exclusion. A request with the cookie name `yourcompany.com` would *not* trigger and exclusion.
*/
export interface ProtectionRuleExclusion {
  /**
   * The target of the exclusion.
   */
  "target"?: ProtectionRuleExclusion.Target;
  "exclusions"?: Array<string>;
}

export namespace ProtectionRuleExclusion {
  export enum Target {
    RequestCookies = "REQUEST_COOKIES",
    RequestCookieNames = "REQUEST_COOKIE_NAMES",
    Args = "ARGS",
    ArgsNames = "ARGS_NAMES",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ProtectionRuleExclusion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectionRuleExclusion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
