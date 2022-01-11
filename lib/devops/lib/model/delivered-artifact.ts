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
 * Details of the artifacts delivered through the Deliver Artifacts stage.
 */
export interface DeliveredArtifact {
  /**
   * The OCID of the deployment artifact definition.
   */
  "deployArtifactId": string;
  /**
   * Name of the output artifact defined in the build specification file.
   */
  "outputArtifactName": string;

  "artifactType": string;
}

export namespace DeliveredArtifact {
  export function getJsonObj(obj: DeliveredArtifact): object {
    const jsonObj = { ...obj, ...{} };

    if ("artifactType" in obj && obj.artifactType) {
      switch (obj.artifactType) {
        case "OCIR":
          return model.ContainerRegistryDeliveredArtifact.getJsonObj(
            <model.ContainerRegistryDeliveredArtifact>(<object>jsonObj),
            true
          );
        case "GENERIC_ARTIFACT":
          return model.GenericDeliveredArtifact.getJsonObj(
            <model.GenericDeliveredArtifact>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.artifactType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeliveredArtifact): object {
    const jsonObj = { ...obj, ...{} };

    if ("artifactType" in obj && obj.artifactType) {
      switch (obj.artifactType) {
        case "OCIR":
          return model.ContainerRegistryDeliveredArtifact.getDeserializedJsonObj(
            <model.ContainerRegistryDeliveredArtifact>(<object>jsonObj),
            true
          );
        case "GENERIC_ARTIFACT":
          return model.GenericDeliveredArtifact.getDeserializedJsonObj(
            <model.GenericDeliveredArtifact>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.artifactType);
      }
    }
    return jsonObj;
  }
}
