/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
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
 * The properties that define a metric.
 * For information about metrics, see [Metrics Overview](https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#MetricsOverview).
 *
 */
export interface Metric {
  /**
    * The name of the metric.
* <p>
Example: `CpuUtilization`
* 
    */
  "name"?: string;
  /**
    * The source service or application emitting the metric.
* <p>
Example: `oci_computeagent`
* 
    */
  "namespace"?: string;
  /**
    * Resource group provided with the posted metric. A resource group is a custom string that you can match when retrieving custom metrics. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing
   * the resources monitored by the metric.
   *
   */
  "compartmentId"?: string;
  /**
    * Qualifiers provided in a metric definition. Available dimensions vary by metric namespace.
* Each dimension takes the form of a key-value pair.
* <p>
Example: `\"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"`
* 
    */
  "dimensions"?: { [key: string]: string };
}

export namespace Metric {
  export function getJsonObj(obj: Metric): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Metric): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
