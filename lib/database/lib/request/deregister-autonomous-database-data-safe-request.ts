/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/DeregisterAutonomousDatabaseDataSafe.ts.html |here} to see how to use DeregisterAutonomousDatabaseDataSafeRequest.
 */
export interface DeregisterAutonomousDatabaseDataSafeRequest extends common.BaseRequest {
  /**
   * The database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousDatabaseId": string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * Details for deregistering an Autonomous Database with Data Safe.
   */
  "deregisterAutonomousDatabaseDataSafeDetails"?: model.DeregisterAutonomousDatabaseDataSafeDetails;
}
