/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * An object that represents the action of removing a header from a request. This rule applies only to HTTP listeners.
 * If the same header appears more than once in the request, the load balancer removes all occurances of the specified header.
 * **Note:** The system does not distinquish between underscore and dash characters in headers. That is, it treats
 * `example_header_name` and `example-header-name` as identical. Oracle recommends that you do not rely on underscore
 * or dash characters to uniquely distinguish header names.
 *
 */
export interface RemoveHttpRequestHeaderRule extends model.Rule {
  /**
    * A header name that conforms to RFC 7230.
* <p>
Example: `example_header_name`
* 
    */
  "header": string;

  "action": string;
}

export namespace RemoveHttpRequestHeaderRule {
  export function getJsonObj(obj: RemoveHttpRequestHeaderRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Rule.getJsonObj(obj) as RemoveHttpRequestHeaderRule)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "REMOVE_HTTP_REQUEST_HEADER";
}
