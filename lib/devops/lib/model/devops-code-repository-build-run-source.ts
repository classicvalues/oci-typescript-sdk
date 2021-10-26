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
 * Specifies details of build run through Devops Code Repository.
 */
export interface DevopsCodeRepositoryBuildRunSource extends model.BuildRunSource {
  /**
   * The Trigger that invoked this build run
   */
  "triggerId": string;
  "triggerInfo": model.TriggerInfo;
  /**
   * The Devops Code Repository RepoId that invoked this build run
   */
  "repositoryId": string;

  "sourceType": string;
}

export namespace DevopsCodeRepositoryBuildRunSource {
  export function getJsonObj(
    obj: DevopsCodeRepositoryBuildRunSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunSource.getJsonObj(obj) as DevopsCodeRepositoryBuildRunSource)),
      ...{
        "triggerInfo": obj.triggerInfo ? model.TriggerInfo.getJsonObj(obj.triggerInfo) : undefined
      }
    };

    return jsonObj;
  }
  export const sourceType = "DEVOPS_CODE_REPOSITORY";
  export function getDeserializedJsonObj(
    obj: DevopsCodeRepositoryBuildRunSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunSource.getDeserializedJsonObj(obj) as DevopsCodeRepositoryBuildRunSource)),
      ...{
        "triggerInfo": obj.triggerInfo
          ? model.TriggerInfo.getDeserializedJsonObj(obj.triggerInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
