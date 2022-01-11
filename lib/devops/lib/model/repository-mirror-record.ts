/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Object containing information about a mirror record.
 */
export interface RepositoryMirrorRecord {
  /**
   * Mirror status of current mirror entry.
   * QUEUED - Mirroring Queued
   * RUNNING - Mirroring is Running
   * PASSED - Mirroring Passed
   * FAILED - Mirroring Failed
   *
   */
  "mirrorStatus": RepositoryMirrorRecord.MirrorStatus;
  /**
   * Workrequest ID to track current mirror operation.
   */
  "workRequestId"?: string;
  /**
   * The time to enqueue a mirror operation.
   */
  "timeEnqueued"?: Date;
  /**
   * The time to start a mirror operation.
   */
  "timeStarted"?: Date;
  /**
   * The time taken to complete a mirror operation. Value is null if not completed.
   */
  "timeEnded"?: Date;
}

export namespace RepositoryMirrorRecord {
  export enum MirrorStatus {
    None = "NONE",
    Queued = "QUEUED",
    Running = "RUNNING",
    Passed = "PASSED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RepositoryMirrorRecord): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RepositoryMirrorRecord): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
