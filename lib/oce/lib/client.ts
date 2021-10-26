/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { OceInstanceWaiter } from "./oceinstance-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OceInstanceApiKeys {}
/**
 * This service client does not use circuit breakers by default if the user has not defined a circuit breaker configuration.
 */
export class OceInstanceClient {
  protected static serviceEndpointTemplate = "https://cp.oce.{region}.ocp.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": OceInstanceWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = false;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20190912";
    if (this.logger) this.logger.info(`OceInstanceClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      OceInstanceClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      OceInstanceClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new OceInstanceWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): OceInstanceWaiter {
    this._waiters = new OceInstanceWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): OceInstanceWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves a OceInstance into a different compartment
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ChangeOceInstanceCompartmentRequest
   * @return ChangeOceInstanceCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ChangeOceInstanceCompartment.ts.html |here} to see how to use ChangeOceInstanceCompartment API.
   */
  public async changeOceInstanceCompartment(
    changeOceInstanceCompartmentRequest: requests.ChangeOceInstanceCompartmentRequest
  ): Promise<responses.ChangeOceInstanceCompartmentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation OceInstanceClient#changeOceInstanceCompartment.");
    const pathParams = {
      "{oceInstanceId}": changeOceInstanceCompartmentRequest.oceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeOceInstanceCompartmentRequest.ifMatch,
      "opc-request-id": changeOceInstanceCompartmentRequest.opcRequestId,
      "opc-retry-token": changeOceInstanceCompartmentRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeOceInstanceCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances/{oceInstanceId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeOceInstanceCompartmentRequest.changeOceInstanceCompartmentDetails,
        "ChangeOceInstanceCompartmentDetails",
        model.ChangeOceInstanceCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeOceInstanceCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new OceInstance.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateOceInstanceRequest
   * @return CreateOceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/CreateOceInstance.ts.html |here} to see how to use CreateOceInstance API.
   */
  public async createOceInstance(
    createOceInstanceRequest: requests.CreateOceInstanceRequest
  ): Promise<responses.CreateOceInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#createOceInstance.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createOceInstanceRequest.opcRetryToken,
      "opc-request-id": createOceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createOceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createOceInstanceRequest.createOceInstanceDetails,
        "CreateOceInstanceDetails",
        model.CreateOceInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateOceInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes a OceInstance resource by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteOceInstanceRequest
   * @return DeleteOceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/DeleteOceInstance.ts.html |here} to see how to use DeleteOceInstance API.
   */
  public async deleteOceInstance(
    deleteOceInstanceRequest: requests.DeleteOceInstanceRequest
  ): Promise<responses.DeleteOceInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#deleteOceInstance.");
    const pathParams = {
      "{oceInstanceId}": deleteOceInstanceRequest.oceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteOceInstanceRequest.ifMatch,
      "opc-request-id": deleteOceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteOceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances/{oceInstanceId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteOceInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a OceInstance by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetOceInstanceRequest
   * @return GetOceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/GetOceInstance.ts.html |here} to see how to use GetOceInstance API.
   */
  public async getOceInstance(
    getOceInstanceRequest: requests.GetOceInstanceRequest
  ): Promise<responses.GetOceInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#getOceInstance.");
    const pathParams = {
      "{oceInstanceId}": getOceInstanceRequest.oceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getOceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getOceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances/{oceInstanceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetOceInstanceResponse>{},
        body: await response.json(),
        bodyKey: "oceInstance",
        bodyModel: model.OceInstance,
        type: "model.OceInstance",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the status of the work request with the given ID.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#getWorkRequest.");
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getWorkRequestRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: model.WorkRequest,
        type: "model.WorkRequest",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of OceInstances.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListOceInstancesRequest
   * @return ListOceInstancesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ListOceInstances.ts.html |here} to see how to use ListOceInstances API.
   */
  public async listOceInstances(
    listOceInstancesRequest: requests.ListOceInstancesRequest
  ): Promise<responses.ListOceInstancesResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#listOceInstances.");
    const pathParams = {};

    const queryParams = {
      "tenancyId": listOceInstancesRequest.tenancyId,
      "compartmentId": listOceInstancesRequest.compartmentId,
      "displayName": listOceInstancesRequest.displayName,
      "limit": listOceInstancesRequest.limit,
      "page": listOceInstancesRequest.page,
      "sortOrder": listOceInstancesRequest.sortOrder,
      "sortBy": listOceInstancesRequest.sortBy,
      "lifecycleState": listOceInstancesRequest.lifecycleState
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listOceInstancesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listOceInstancesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListOceInstancesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.OceInstanceSummary,
        type: "Array<model.OceInstanceSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listOceInstancesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.OceInstanceSummary objects
   * contained in responses from the listOceInstances operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllOceInstances(
    request: requests.ListOceInstancesRequest
  ): AsyncIterableIterator<model.OceInstanceSummary> {
    return paginateRecords(request, req => this.listOceInstances(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listOceInstancesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listOceInstances operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllOceInstancesResponses(
    request: requests.ListOceInstancesRequest
  ): AsyncIterableIterator<responses.ListOceInstancesResponse> {
    return paginateResponses(request, req => this.listOceInstances(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.OceInstanceSummary objects
   * contained in responses from the listOceInstances operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listOceInstancesRecordIterator(
    request: requests.ListOceInstancesRequest
  ): AsyncIterableIterator<model.OceInstanceSummary> {
    return paginateRecords(request, req => this.listOceInstances(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listOceInstances operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listOceInstancesResponseIterator(
    request: requests.ListOceInstancesRequest
  ): AsyncIterableIterator<responses.ListOceInstancesResponse> {
    return paginateResponses(request, req => this.listOceInstances(req));
  }

  /**
   * Return a (paginated) list of errors for a given work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation OceInstanceClient#listWorkRequestErrors.");
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestErrorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.WorkRequestError,
        type: "Array<model.WorkRequestError>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestErrorsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrors(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<model.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestErrorsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestErrorsResponses(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequestError objects
   * contained in responses from the listWorkRequestErrors operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestErrorsRecordIterator(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<model.WorkRequestError> {
    return paginateRecords(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestErrors operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestErrorsResponseIterator(
    request: requests.ListWorkRequestErrorsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestErrorsResponse> {
    return paginateResponses(request, req => this.listWorkRequestErrors(req));
  }

  /**
   * Return a (paginated) list of logs for a given work request.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#listWorkRequestLogs.");
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestLogsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.WorkRequestLogEntry,
        type: "Array<model.WorkRequestLogEntry>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestLogsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogs(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<model.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestLogsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestLogsResponses(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequestLogEntry objects
   * contained in responses from the listWorkRequestLogs operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestLogsRecordIterator(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<model.WorkRequestLogEntry> {
    return paginateRecords(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequestLogs operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestLogsResponseIterator(
    request: requests.ListWorkRequestLogsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestLogsResponse> {
    return paginateResponses(request, req => this.listWorkRequestLogs(req));
  }

  /**
   * Lists the work requests in a compartment.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#listWorkRequests.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "resourceId": listWorkRequestsRequest.resourceId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listWorkRequestsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.WorkRequest,
        type: "Array<model.WorkRequest>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.WorkRequest objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequests(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<model.WorkRequest> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listWorkRequestsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllWorkRequestsResponses(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.WorkRequest objects
   * contained in responses from the listWorkRequests operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestsRecordIterator(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<model.WorkRequest> {
    return paginateRecords(request, req => this.listWorkRequests(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listWorkRequests operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listWorkRequestsResponseIterator(
    request: requests.ListWorkRequestsRequest
  ): AsyncIterableIterator<responses.ListWorkRequestsResponse> {
    return paginateResponses(request, req => this.listWorkRequests(req));
  }

  /**
   * Updates the OceInstance
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateOceInstanceRequest
   * @return UpdateOceInstanceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/UpdateOceInstance.ts.html |here} to see how to use UpdateOceInstance API.
   */
  public async updateOceInstance(
    updateOceInstanceRequest: requests.UpdateOceInstanceRequest
  ): Promise<responses.UpdateOceInstanceResponse> {
    if (this.logger) this.logger.debug("Calling operation OceInstanceClient#updateOceInstance.");
    const pathParams = {
      "{oceInstanceId}": updateOceInstanceRequest.oceInstanceId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateOceInstanceRequest.ifMatch,
      "opc-request-id": updateOceInstanceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateOceInstanceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/oceInstances/{oceInstanceId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateOceInstanceRequest.updateOceInstanceDetails,
        "UpdateOceInstanceDetails",
        model.UpdateOceInstanceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateOceInstanceResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
