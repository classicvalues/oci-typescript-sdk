/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

 /* @param args Arguments to provide to the example. The following arguments are expected:
 * <ul>
 *  <li>The first argument is the OCID of the compartment.</li>
 * </ul>
 * Refer https://docs.cloud.oracle.com/en-us/iaas/api/#/en/monitoring/20180401/MetricData/PostMetricData for more details.
 */

import mt = require("oci-monitoring");
import common = require("oci-common");
import { MetricDataDetails } from "oci-monitoring/lib/model";

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const args = process.argv.slice(1);
console.log(args);
if (args.length !== 2) {
  console.error(
    "Unexpected number of arguments received. Usage : monitoring-alarm.ts <MetricCompartment>"
  );
  process.exit(-1);
}

const compartmentId: string = args[1];

const monitoringClient: mt.MonitoringClient = new mt.MonitoringClient({
  authenticationDetailsProvider: provider
});
monitoringClient.region = common.Region.US_PHOENIX_1;
monitoringClient.endpoint = "https://telemetry-ingestion.us-phoenix-1.oraclecloud.com";

(async () => {
  try {

    var datenow = new Date();
    var dateutc = new Date(datenow.toUTCString());
    /* The timestamp datapoint format used is defined by RFC3339. 
    https://docs.cloud.oracle.com/en-us/iaas/api/#/en/monitoring/20180401/datatypes/Datapoint
    */

    const MetricDataDetails: Array<mt.models.MetricDataDetails> = [{
        namespace: "mushopnamespace",
        resourceGroup: "mushop-rg",
        compartmentId: compartmentId,
        name: "mushop-401-http-error",
        dimensions: {
            "appName": "Mushop",
            "podName": "mushop-storefront"
        },
        metadata: {
            "unit": "count",
            "displayName": "MuShop Authorization errors"
        },
        datapoints: [{
            "timestamp": dateutc,
            "value": 43,
            "count": 43
        }
      ]
    }]

    const PostMetricDataDetails: mt.models.PostMetricDataDetails = {
      metricData : MetricDataDetails
    }

    const PostMetricDataRequest: mt.requests.PostMetricDataRequest = {
      postMetricDataDetails: PostMetricDataDetails
    };

    const response =  await monitoringClient.postMetricData(PostMetricDataRequest);
    //console.log("Retrieved :" + response.postMetricDataResponseDetails.failedMetricsCount);

    console.log("Successfully posted custom metric with name: %s to namespace: %s ",MetricDataDetails[0].name,MetricDataDetails[0].namespace )

  } catch (error) {
    console.log(" Not able to run post metric monitoring example. Error: " + error);
  }
})();