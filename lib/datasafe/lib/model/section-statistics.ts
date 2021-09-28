/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Statistics showing the number of findings with a particular risk level for each category.
 */
export interface SectionStatistics {
  /**
   * The number of targets that contributed to the counts at this risk level. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetsCount"?: number;
  /**
   * The number of findings in the Auditing category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "auditingFindingsCount"?: number;
  /**
   * The number of findings in the Authorization Control category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "authorizationControlFindingsCount"?: number;
  /**
   * The number of findings in the Data Encryption category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataEncryptionFindingsCount"?: number;
  /**
   * The number of findings in the Database Configuration category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbConfigurationFindingsCount"?: number;
  /**
   * The number of findings in the Fine-Grained Access Control category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fineGrainedAccessControlFindingsCount"?: number;
  /**
   * The number of findings in the Privileges and Roles category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "privilegesAndRolesFindingsCount"?: number;
  /**
   * The number of findings in the User Accounts category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "userAccountsFindingsCount"?: number;
}

export namespace SectionStatistics {
  export function getJsonObj(obj: SectionStatistics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SectionStatistics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
