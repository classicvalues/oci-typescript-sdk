/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * The details to create a replication policy.
 */
export interface CreateReplicationPolicyDetails {
  /**
   * The name of the policy. Avoid entering confidential information.
   */
  "name": string;
  /**
   * The destination region to replicate to, for example \"us-ashburn-1\".
   */
  "destinationRegionName": string;
  /**
   * The bucket to replicate to in the destination region. Replication policy creation does not automatically
   * create a destination bucket. Create the destination bucket before creating the policy.
   *
   */
  "destinationBucketName": string;
}

export namespace CreateReplicationPolicyDetails {
  export function getJsonObj(obj: CreateReplicationPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateReplicationPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
