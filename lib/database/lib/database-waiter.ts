/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DatabaseClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DatabaseWaiter {
  public constructor(
    private client: DatabaseClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAutonomousContainerDatabase till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousContainerDatabaseResponse | null (null in case of 404 response)
   */
  public async forAutonomousContainerDatabase(
    request: serviceRequests.GetAutonomousContainerDatabaseRequest,
    ...targetStates: models.AutonomousContainerDatabase.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousContainerDatabaseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousContainerDatabase(request),
      response => targetStates.exists(response.autonomousContainerDatabase.lifecycleState),
      targetStates.includes(models.AutonomousContainerDatabase.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forAutonomousDataWarehouse till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousDataWarehouseResponse | null (null in case of 404 response)
   */
  public async forAutonomousDataWarehouse(
    request: serviceRequests.GetAutonomousDataWarehouseRequest,
    ...targetStates: models.AutonomousDataWarehouse.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousDataWarehouseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousDataWarehouse(request),
      response => targetStates.exists(response.autonomousDataWarehouse.lifecycleState),
      targetStates.includes(models.AutonomousDataWarehouse.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forAutonomousDataWarehouseBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousDataWarehouseBackupResponse | null (null in case of 404 response)
   */
  public async forAutonomousDataWarehouseBackup(
    request: serviceRequests.GetAutonomousDataWarehouseBackupRequest,
    ...targetStates: models.AutonomousDataWarehouseBackup.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousDataWarehouseBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousDataWarehouseBackup(request),
      response => targetStates.exists(response.autonomousDataWarehouseBackup.lifecycleState),
      targetStates.includes(models.AutonomousDataWarehouseBackup.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forAutonomousDatabase till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousDatabaseResponse | null (null in case of 404 response)
   */
  public async forAutonomousDatabase(
    request: serviceRequests.GetAutonomousDatabaseRequest,
    ...targetStates: models.AutonomousDatabase.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousDatabaseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousDatabase(request),
      response => targetStates.exists(response.autonomousDatabase.lifecycleState),
      targetStates.includes(models.AutonomousDatabase.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forAutonomousDatabaseBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousDatabaseBackupResponse | null (null in case of 404 response)
   */
  public async forAutonomousDatabaseBackup(
    request: serviceRequests.GetAutonomousDatabaseBackupRequest,
    ...targetStates: models.AutonomousDatabaseBackup.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousDatabaseBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousDatabaseBackup(request),
      response => targetStates.exists(response.autonomousDatabaseBackup.lifecycleState),
      targetStates.includes(models.AutonomousDatabaseBackup.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forAutonomousDatabaseWallet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousDatabaseWalletResponse
   */
  public async forAutonomousDatabaseWallet(
    request: serviceRequests.GetAutonomousDatabaseWalletRequest,
    ...targetStates: models.AutonomousDatabaseWallet.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousDatabaseWalletResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getAutonomousDatabaseWallet(request),
      response => targetStates.exists(response.autonomousDatabaseWallet.lifecycleState)
    );
  }

  /**
   * Waits forAutonomousExadataInfrastructure till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousExadataInfrastructureResponse | null (null in case of 404 response)
   */
  public async forAutonomousExadataInfrastructure(
    request: serviceRequests.GetAutonomousExadataInfrastructureRequest,
    ...targetStates: models.AutonomousExadataInfrastructure.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousExadataInfrastructureResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousExadataInfrastructure(request),
      response => targetStates.exists(response.autonomousExadataInfrastructure.lifecycleState),
      targetStates.includes(models.AutonomousExadataInfrastructure.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forAutonomousPatch till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousPatchResponse
   */
  public async forAutonomousPatch(
    request: serviceRequests.GetAutonomousPatchRequest,
    ...targetStates: models.AutonomousPatch.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousPatchResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getAutonomousPatch(request),
      response => targetStates.exists(response.autonomousPatch.lifecycleState)
    );
  }

  /**
   * Waits forAutonomousVmCluster till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutonomousVmClusterResponse | null (null in case of 404 response)
   */
  public async forAutonomousVmCluster(
    request: serviceRequests.GetAutonomousVmClusterRequest,
    ...targetStates: models.AutonomousVmCluster.LifecycleState[]
  ): Promise<serviceResponses.GetAutonomousVmClusterResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutonomousVmCluster(request),
      response => targetStates.exists(response.autonomousVmCluster.lifecycleState),
      targetStates.includes(models.AutonomousVmCluster.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBackupResponse | null (null in case of 404 response)
   */
  public async forBackup(
    request: serviceRequests.GetBackupRequest,
    ...targetStates: models.Backup.LifecycleState[]
  ): Promise<serviceResponses.GetBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBackup(request),
      response => targetStates.exists(response.backup.lifecycleState),
      targetStates.includes(models.Backup.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forBackupDestination till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBackupDestinationResponse | null (null in case of 404 response)
   */
  public async forBackupDestination(
    request: serviceRequests.GetBackupDestinationRequest,
    ...targetStates: models.BackupDestination.LifecycleState[]
  ): Promise<serviceResponses.GetBackupDestinationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBackupDestination(request),
      response => targetStates.exists(response.backupDestination.lifecycleState),
      targetStates.includes(models.BackupDestination.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forConsoleConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConsoleConnectionResponse | null (null in case of 404 response)
   */
  public async forConsoleConnection(
    request: serviceRequests.GetConsoleConnectionRequest,
    ...targetStates: models.ConsoleConnection.LifecycleState[]
  ): Promise<serviceResponses.GetConsoleConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getConsoleConnection(request),
      response => targetStates.exists(response.consoleConnection.lifecycleState),
      targetStates.includes(models.ConsoleConnection.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDataGuardAssociation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDataGuardAssociationResponse | null (null in case of 404 response)
   */
  public async forDataGuardAssociation(
    request: serviceRequests.GetDataGuardAssociationRequest,
    ...targetStates: models.DataGuardAssociation.LifecycleState[]
  ): Promise<serviceResponses.GetDataGuardAssociationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDataGuardAssociation(request),
      response => targetStates.exists(response.dataGuardAssociation.lifecycleState),
      targetStates.includes(models.DataGuardAssociation.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDatabase till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseResponse | null (null in case of 404 response)
   */
  public async forDatabase(
    request: serviceRequests.GetDatabaseRequest,
    ...targetStates: models.Database.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabase(request),
      response => targetStates.exists(response.database.lifecycleState),
      targetStates.includes(models.Database.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDatabaseSoftwareImage till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseSoftwareImageResponse | null (null in case of 404 response)
   */
  public async forDatabaseSoftwareImage(
    request: serviceRequests.GetDatabaseSoftwareImageRequest,
    ...targetStates: models.DatabaseSoftwareImage.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseSoftwareImageResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseSoftwareImage(request),
      response => targetStates.exists(response.databaseSoftwareImage.lifecycleState),
      targetStates.includes(models.DatabaseSoftwareImage.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDbHome till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDbHomeResponse | null (null in case of 404 response)
   */
  public async forDbHome(
    request: serviceRequests.GetDbHomeRequest,
    ...targetStates: models.DbHome.LifecycleState[]
  ): Promise<serviceResponses.GetDbHomeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDbHome(request),
      response => targetStates.exists(response.dbHome.lifecycleState),
      targetStates.includes(models.DbHome.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDbNode till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDbNodeResponse | null (null in case of 404 response)
   */
  public async forDbNode(
    request: serviceRequests.GetDbNodeRequest,
    ...targetStates: models.DbNode.LifecycleState[]
  ): Promise<serviceResponses.GetDbNodeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDbNode(request),
      response => targetStates.exists(response.dbNode.lifecycleState),
      targetStates.includes(models.DbNode.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDbSystem till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDbSystemResponse | null (null in case of 404 response)
   */
  public async forDbSystem(
    request: serviceRequests.GetDbSystemRequest,
    ...targetStates: models.DbSystem.LifecycleState[]
  ): Promise<serviceResponses.GetDbSystemResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDbSystem(request),
      response => targetStates.exists(response.dbSystem.lifecycleState),
      targetStates.includes(models.DbSystem.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forExadataInfrastructure till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExadataInfrastructureResponse | null (null in case of 404 response)
   */
  public async forExadataInfrastructure(
    request: serviceRequests.GetExadataInfrastructureRequest,
    ...targetStates: models.ExadataInfrastructure.LifecycleState[]
  ): Promise<serviceResponses.GetExadataInfrastructureResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExadataInfrastructure(request),
      response => targetStates.exists(response.exadataInfrastructure.lifecycleState),
      targetStates.includes(models.ExadataInfrastructure.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExadataIormConfig till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExadataIormConfigResponse
   */
  public async forExadataIormConfig(
    request: serviceRequests.GetExadataIormConfigRequest,
    ...targetStates: models.ExadataIormConfig.LifecycleState[]
  ): Promise<serviceResponses.GetExadataIormConfigResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getExadataIormConfig(request),
      response => targetStates.exists(response.exadataIormConfig.lifecycleState)
    );
  }

  /**
   * Waits forMaintenanceRun till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMaintenanceRunResponse | null (null in case of 404 response)
   */
  public async forMaintenanceRun(
    request: serviceRequests.GetMaintenanceRunRequest,
    ...targetStates: models.MaintenanceRun.LifecycleState[]
  ): Promise<serviceResponses.GetMaintenanceRunResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMaintenanceRun(request),
      response => targetStates.exists(response.maintenanceRun.lifecycleState),
      targetStates.includes(models.MaintenanceRun.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVmCluster till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVmClusterResponse | null (null in case of 404 response)
   */
  public async forVmCluster(
    request: serviceRequests.GetVmClusterRequest,
    ...targetStates: models.VmCluster.LifecycleState[]
  ): Promise<serviceResponses.GetVmClusterResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVmCluster(request),
      response => targetStates.exists(response.vmCluster.lifecycleState),
      targetStates.includes(models.VmCluster.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forVmClusterNetwork till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVmClusterNetworkResponse | null (null in case of 404 response)
   */
  public async forVmClusterNetwork(
    request: serviceRequests.GetVmClusterNetworkRequest,
    ...targetStates: models.VmClusterNetwork.LifecycleState[]
  ): Promise<serviceResponses.GetVmClusterNetworkResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVmClusterNetwork(request),
      response => targetStates.exists(response.vmClusterNetwork.lifecycleState),
      targetStates.includes(models.VmClusterNetwork.LifecycleState.Terminated)
    );
  }
}
