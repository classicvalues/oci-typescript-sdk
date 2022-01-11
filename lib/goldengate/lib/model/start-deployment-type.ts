/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The deployment start type.
 *
 **/
export enum StartDeploymentType {
  Default = "DEFAULT"
}

export namespace StartDeploymentType {
  export function getJsonObj(obj: StartDeploymentType): StartDeploymentType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: StartDeploymentType): StartDeploymentType {
    return obj;
  }
}
