/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * An object representing a reserved IP address to be attached or that is already attached to a network load balancer.
 *
 */
export interface ReservedIP {
  /**
    * OCID of the reserved public IP address created with the virtual cloud network.
* <p>
Reserved public IP addresses are IP addresses that are registered using the virtual cloud network API.
* <p>
Create a reserved public IP address. When you create the network load balancer, enter the OCID of the reserved public IP address in the
* reservedIp field to attach the IP address to the network load balancer. This task configures the network load balancer to listen to traffic on this IP address.
* <p>
Reserved public IP addresses are not deleted when the network load balancer is deleted. The IP addresses become unattached from the network load balancer.
* <p>
Example: \"ocid1.publicip.oc1.phx.unique_ID\"
* 
    */
  "id"?: string;
}

export namespace ReservedIP {
  export function getJsonObj(obj: ReservedIP): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReservedIP): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
