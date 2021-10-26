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
 * Commit object with commit information
 */
export interface RepositoryCommit {
  /**
   * Commit hash pointed to by Ref name
   */
  "commitId": string;
  /**
   * The commit message.
   */
  "commitMessage": string;
  /**
   * The name of the author of the repository.
   */
  "authorName"?: string;
  /**
   * The email of the author of the repository.
   */
  "authorEmail"?: string;
  /**
   * The name of who create the commit.
   */
  "committerName"?: string;
  /**
   * The email of who create the commit.
   */
  "committerEmail"?: string;
  /**
   * An array of parent commit ids of created commit.
   */
  "parentCommitIds"?: Array<string>;
  /**
   * The time at which commit was created.
   */
  "timeCreated"?: Date;
  /**
   * Tree information for the specified commit
   */
  "treeId"?: string;
}

export namespace RepositoryCommit {
  export function getJsonObj(obj: RepositoryCommit): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RepositoryCommit): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
