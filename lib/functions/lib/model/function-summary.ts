/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
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
 * Summary of a function.
 *
 */
export interface FunctionSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the function.
   *
   */
  "id": string;
  /**
   * The display name of the function. The display name is unique within the application containing the function.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the application the function belongs to.
   */
  "applicationId"?: string;
  /**
   * The OCID of the compartment that contains the function.
   *
   */
  "compartmentId"?: string;
  /**
   * The current state of the function.
   *
   */
  "lifecycleState"?: FunctionSummary.LifecycleState;
  /**
   * The qualified name of the Docker image to use in the function, including the image tag.
   * The image should be in the OCI Registry that is in the same region as the function itself.
   * Example: `phx.ocir.io/ten/functions/function:0.0.1`
   *
   */
  "image"?: string;
  /**
   * The image digest for the version of the image that will be pulled when invoking this function.
   * If no value is specified, the digest currently associated with the image in the OCI Registry will be used.
   * Example: `sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7`
   *
   */
  "imageDigest"?: string;
  /**
   * Maximum usable memory for the function (MiB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInMBs"?: number;
  /**
   * Timeout for executions of the function. Value in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  "traceConfig"?: model.FunctionTraceConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The base https invoke URL to set on a client in order to invoke a function. This URL will never change over the lifetime of the function and can be cached.
   *
   */
  "invokeEndpoint"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The time the function was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2018-09-12T22:47:12.613Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * The time the function was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2018-09-12T22:47:12.613Z`
* 
    */
  "timeUpdated"?: Date;
}

export namespace FunctionSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FunctionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.FunctionTraceConfig.getJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FunctionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.FunctionTraceConfig.getDeserializedJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
