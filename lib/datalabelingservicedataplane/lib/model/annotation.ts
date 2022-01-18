/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * An annotation represents a user- or machine-generated annotation for a given record.  The details of the annotation are captured in the RecordAnnotationDetails.
 */
export interface Annotation {
  /**
   * The OCID of the annotation.
   */
  "id": string;
  /**
   * The date and time the annotation was created, in the timestamp format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was updated, in the timestamp format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The OCID of the principal which created the annotation.
   */
  "createdBy": string;
  /**
   * The OCID of the principal which updated the annotation.
   */
  "updatedBy": string;
  /**
   * The OCID of the record annotated.
   */
  "recordId": string;
  /**
   * The entity types are validated against the dataset to ensure consistency.
   */
  "entities": Array<model.Entity>;
  /**
   * The OCID of the compartment for the annotation. This is tied to the dataset. It is not changeable on the record itself.
   */
  "compartmentId": string;
  /**
   * The lifecycle state of an annotation.
   * ACTIVE - The annotation is active to be used for labeling.
   * INACTIVE - The annotation has been marked as inactive and should not be used for labeling.
   * DELETED - Tha annotation been deleted and no longer available for labeling.
   *
   */
  "lifecycleState": Annotation.LifecycleState;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Annotation {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Annotation): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Annotation): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
