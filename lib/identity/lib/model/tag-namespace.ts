/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
 * A managed container for defined tags. A tag namespace is unique in a tenancy. For more information,
 * see [Managing Tags and Tag Namespaces](https://docs.cloud.oracle.com/Content/Identity/Concepts/taggingoverview.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values
 * using the API.
 *
 */
export interface TagNamespace {
  /**
   * The OCID of the tag namespace.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the tag namespace.
   */
  "compartmentId": string;
  /**
   * The name of the tag namespace. It must be unique across all tag namespaces in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the tag namespace.
   */
  "description": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Whether the tag namespace is retired.
   * See [Retiring Key Definitions and Namespace Definitions](https://docs.cloud.oracle.com/Content/Identity/Concepts/taggingoverview.htm#Retiring).
   *
   */
  "isRetired": boolean;
  /**
   * The tagnamespace's current state. After creating a tagnamespace, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tagnamespace, make sure its `lifecycleState` is INACTIVE before using it.
   */
  "lifecycleState"?: TagNamespace.LifecycleState;
  /**
   * Date and time the tagNamespace was created, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
}

export namespace TagNamespace {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TagNamespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TagNamespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
