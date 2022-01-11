/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The tsk schedule summary information.
 */
export interface TaskScheduleSummary {
  /**
   * Generated key that can be used in API calls to identify taskSchedule. On scenarios where reference to the taskSchedule is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * This is a version number that is used by the service to upgrade objects if needed through releases of the service.
   */
  "modelVersion"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * This is used by the service for optimistic locking of the object, to prevent multiple users from simultaneously updating the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "scheduleRef"?: model.Schedule;
  "configProviderDelegate"?: model.ConfigProvider;
  /**
   * Whether the task schedule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The number of retries. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfRetries"?: number;
  /**
   * The retry delay, the unit for measurement is in the property retry delay unit. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retryDelay"?: number;
  /**
   * The unit for the retry delay.
   */
  "retryDelayUnit"?: TaskScheduleSummary.RetryDelayUnit;
  /**
   * The start time in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimeMillis"?: number;
  /**
   * The end time in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endTimeMillis"?: number;
  /**
   * Whether the same task can be executed concurrently.
   */
  "isConcurrentAllowed"?: boolean;
  /**
   * Whether the backfill is enabled.
   */
  "isBackfillEnabled"?: boolean;
  /**
   * The authorization mode for the task.
   */
  "authMode"?: TaskScheduleSummary.AuthMode;
  /**
   * The expected duration of the task execution. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "expectedDuration"?: number;
  /**
   * The expected duration unit of the task execution.
   */
  "expectedDurationUnit"?: TaskScheduleSummary.ExpectedDurationUnit;
  /**
   * The time for next run in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nextRunTimeMillis"?: number;
  "lastRunDetails"?: model.LastRunDetails;
  "metadata"?: model.ObjectMetadata;
}

export namespace TaskScheduleSummary {
  export enum RetryDelayUnit {
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AuthMode {
    Obo = "OBO",
    ResourcePrincipal = "RESOURCE_PRINCIPAL",
    UserCertificate = "USER_CERTIFICATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExpectedDurationUnit {
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskScheduleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "scheduleRef": obj.scheduleRef ? model.Schedule.getJsonObj(obj.scheduleRef) : undefined,
        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getJsonObj(obj.configProviderDelegate)
          : undefined,

        "lastRunDetails": obj.lastRunDetails
          ? model.LastRunDetails.getJsonObj(obj.lastRunDetails)
          : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TaskScheduleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "scheduleRef": obj.scheduleRef
          ? model.Schedule.getDeserializedJsonObj(obj.scheduleRef)
          : undefined,
        "configProviderDelegate": obj.configProviderDelegate
          ? model.ConfigProvider.getDeserializedJsonObj(obj.configProviderDelegate)
          : undefined,

        "lastRunDetails": obj.lastRunDetails
          ? model.LastRunDetails.getDeserializedJsonObj(obj.lastRunDetails)
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
