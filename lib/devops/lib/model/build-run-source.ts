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
 * The source from which the build run is triggered.
 */
export interface BuildRunSource {
  "sourceType": string;
}

export namespace BuildRunSource {
  export function getJsonObj(obj: BuildRunSource): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "GITHUB":
          return model.GithubBuildRunSource.getJsonObj(
            <model.GithubBuildRunSource>(<object>jsonObj),
            true
          );
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryBuildRunSource.getJsonObj(
            <model.DevopsCodeRepositoryBuildRunSource>(<object>jsonObj),
            true
          );
        case "MANUAL":
          return model.ManualBuildRunSource.getJsonObj(
            <model.ManualBuildRunSource>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabBuildRunSource.getJsonObj(
            <model.GitlabBuildRunSource>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildRunSource): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "GITHUB":
          return model.GithubBuildRunSource.getDeserializedJsonObj(
            <model.GithubBuildRunSource>(<object>jsonObj),
            true
          );
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryBuildRunSource.getDeserializedJsonObj(
            <model.DevopsCodeRepositoryBuildRunSource>(<object>jsonObj),
            true
          );
        case "MANUAL":
          return model.ManualBuildRunSource.getDeserializedJsonObj(
            <model.ManualBuildRunSource>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabBuildRunSource.getDeserializedJsonObj(
            <model.GitlabBuildRunSource>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
