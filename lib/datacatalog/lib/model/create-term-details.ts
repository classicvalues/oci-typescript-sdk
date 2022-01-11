/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Properties used in term create operations.
 */
export interface CreateTermDetails {
  /**
   * A user-friendly display name. Is changeable. The combination of 'displayName' and 'parentTermKey'
   * must be unique. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Detailed description of the term.
   */
  "description"?: string;
  /**
   * Indicates whether a term may contain child terms.
   */
  "isAllowedToHaveChildTerms"?: boolean;
  /**
   * The parent key of the term. In the case of a root-level category only, the term would have no parent and this should be left unset.
   */
  "parentTermKey"?: string;
  /**
   * OCID of the user who is the owner of this business terminology.
   */
  "owner"?: string;
  /**
   * Status of the approval process workflow for this business term in the glossary.
   */
  "workflowStatus"?: model.TermWorkflowStatus;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
}

export namespace CreateTermDetails {
  export function getJsonObj(obj: CreateTermDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTermDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
