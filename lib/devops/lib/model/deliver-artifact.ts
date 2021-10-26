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
 * Artifact info that need to be pushed to the artifactory stores.
 */
export interface DeliverArtifact {
  /**
   * Name of the artifact specified in the build_spec.yml file.
   */
  "artifactName": string;
  /**
   * Artifact Identifier which contains the Artifact Definition.
   */
  "artifactId": string;
}

export namespace DeliverArtifact {
  export function getJsonObj(obj: DeliverArtifact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeliverArtifact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
