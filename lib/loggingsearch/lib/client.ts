/**
 * Logging Search API
 * Search for logs in your compartements / log groups / log objects.
 * OpenAPI spec version: 20190909
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum LogSearchApiKeys {}

export class LogSearchClient {
  protected static serviceEndpointTemplate = "https://logging.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    this._httpClient = params.httpClient || new common.FetchHttpClient(requestSigner);

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
    this._endpoint = this._endpoint + "/20190909";
    if (this.logger) this.logger.info(`LogSearchClient endpoint set to ${this._endpoint}`);
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
      LogSearchClient.serviceEndpointTemplate,
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
      LogSearchClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Sets the client configuration for the client
   */
  public set clientConfiguration(clientConfiguration: common.ClientConfiguration) {
    this._clientConfiguration = clientConfiguration;
  }

  /**
   * Submit a query to search logs.
   *
   * @param SearchLogsRequest
   * @return SearchLogsResponse
   * @throws OciError when an error occurs
   */
  public async searchLogs(
    searchLogsRequest: requests.SearchLogsRequest
  ): Promise<responses.SearchLogsResponse> {
    if (this.logger) this.logger.debug("Calling operation LogSearchClient#searchLogs.");
    const pathParams = {};

    const queryParams = {
      "limit": searchLogsRequest.limit,
      "page": searchLogsRequest.page
    };

    let headerParams = {
      "opc-request-id": searchLogsRequest.opcRequestId
    };

    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/search",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        searchLogsRequest.searchLogsDetails,
        "SearchLogsDetails",
        models.SearchLogsDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      searchLogsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.SearchLogsResponse>{},
        body: await response.json(),
        bodyKey: "searchResponse",
        bodyModel: "model.SearchResponse",
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
}
