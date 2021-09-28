/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Note: Deprecated. Use the new resource model APIs instead.
 * Progress details of a Migration Job.
 *
 */
export interface MigrationJobProgressResource {
  /**
   * Current status of the job.
   *
   */
  "currentStatus": model.JobPhaseStatus;
  /**
   * Current phase of the job.
   *
   */
  "currentPhase": model.OdmsJobPhases;
  /**
   * List of phase status for the job.
   *
   */
  "phases": Array<model.PhaseStatus>;
}

export namespace MigrationJobProgressResource {
  export function getJsonObj(obj: MigrationJobProgressResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "phases": obj.phases
          ? obj.phases.map(item => {
              return model.PhaseStatus.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MigrationJobProgressResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "phases": obj.phases
          ? obj.phases.map(item => {
              return model.PhaseStatus.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
