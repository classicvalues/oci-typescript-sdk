/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details about each step in Build Stage.
 */
export interface BuildStageRunStep {
  /**
   * Name of the step.
   */
  "name"?: string;
  /**
   * State of the step.
   */
  "state"?: BuildStageRunStep.State;
  /**
   * Time when the step started.
   */
  "timeStarted"?: Date;
  /**
   * Time when the step finished.
   */
  "timeFinished"?: Date;
}

export namespace BuildStageRunStep {
  export enum State {
    Waiting = "WAITING",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BuildStageRunStep): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildStageRunStep): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
