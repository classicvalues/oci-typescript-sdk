/**
 * Container Images API
 * API covering the [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as container images and repositories.

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
 * List container image results.
 */
export interface ContainerImageCollection {
  /**
   * Page of matching container images.
   */
  "items": Array<model.ContainerImageSummary>;
  /**
   * Estimated number of remaining results. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remainingItemsCount": number;
}

export namespace ContainerImageCollection {
  export function getJsonObj(obj: ContainerImageCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ContainerImageSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerImageCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ContainerImageSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
