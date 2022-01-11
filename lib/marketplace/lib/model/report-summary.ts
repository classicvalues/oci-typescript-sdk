/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model of a single report.
 */
export interface ReportSummary {
  /**
   * The type of report.
   */
  "reportType": string;
  /**
   * The date of the report.
   */
  "date": Date;
  /**
   * The columns in the report.
   */
  "columns": Array<string>;
  /**
   * The contents of the report in comma-separated values (CSV) file format.
   */
  "content": string;
}

export namespace ReportSummary {
  export function getJsonObj(obj: ReportSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReportSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
