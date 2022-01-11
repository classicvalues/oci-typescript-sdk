/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { RoverEntitlementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class RoverEntitlementWaiter {
  public constructor(
    private client: RoverEntitlementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forRoverEntitlement till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRoverEntitlementResponse | null (null in case of 404 response)
   */
  public async forRoverEntitlement(
    request: serviceRequests.GetRoverEntitlementRequest,
    ...targetStates: models.RoverEntitlement.LifecycleState[]
  ): Promise<serviceResponses.GetRoverEntitlementResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRoverEntitlement(request),
      response => targetStates.includes(response.roverEntitlement.lifecycleState!),
      targetStates.includes(models.RoverEntitlement.LifecycleState.Deleted)
    );
  }
}
