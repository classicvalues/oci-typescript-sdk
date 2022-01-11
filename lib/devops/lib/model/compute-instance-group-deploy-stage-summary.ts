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
 * Specifies the instance group rolling deployment stage.
 */
export interface ComputeInstanceGroupDeployStageSummary extends model.DeployStageSummary {
  /**
   * A compute instance group environment OCID for rolling deployment.
   */
  "computeInstanceGroupDeployEnvironmentId": string;
  /**
   * The OCID of the artifact that contains the deployment specification.
   */
  "deploymentSpecDeployArtifactId": string;
  /**
   * Additional file artifact OCIDs.
   */
  "deployArtifactIds"?: Array<string>;
  "rolloutPolicy":
    | model.ComputeInstanceGroupLinearRolloutPolicyByPercentage
    | model.ComputeInstanceGroupLinearRolloutPolicyByCount;
  "rollbackPolicy"?: model.NoDeployStageRollbackPolicy | model.AutomatedDeployStageRollbackPolicy;
  "failurePolicy"?:
    | model.ComputeInstanceGroupFailurePolicyByPercentage
    | model.ComputeInstanceGroupFailurePolicyByCount;
  "loadBalancerConfig"?: model.LoadBalancerConfig;

  "deployStageType": string;
}

export namespace ComputeInstanceGroupDeployStageSummary {
  export function getJsonObj(
    obj: ComputeInstanceGroupDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getJsonObj(obj) as ComputeInstanceGroupDeployStageSummary)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getJsonObj(obj.rolloutPolicy)
          : undefined,
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getJsonObj(obj.rollbackPolicy)
          : undefined,
        "failurePolicy": obj.failurePolicy
          ? model.ComputeInstanceGroupFailurePolicy.getJsonObj(obj.failurePolicy)
          : undefined,
        "loadBalancerConfig": obj.loadBalancerConfig
          ? model.LoadBalancerConfig.getJsonObj(obj.loadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: ComputeInstanceGroupDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getDeserializedJsonObj(
            obj
          ) as ComputeInstanceGroupDeployStageSummary)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getDeserializedJsonObj(obj.rolloutPolicy)
          : undefined,
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getDeserializedJsonObj(obj.rollbackPolicy)
          : undefined,
        "failurePolicy": obj.failurePolicy
          ? model.ComputeInstanceGroupFailurePolicy.getDeserializedJsonObj(obj.failurePolicy)
          : undefined,
        "loadBalancerConfig": obj.loadBalancerConfig
          ? model.LoadBalancerConfig.getDeserializedJsonObj(obj.loadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
