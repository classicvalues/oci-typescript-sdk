/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export enum TimeZone {
  GreenwichMeanTime = "GREENWICH_MEAN_TIME",
  EuropeanCentralTime = "EUROPEAN_CENTRAL_TIME",
  EasternEuropeanTime = "EASTERN_EUROPEAN_TIME",
  EasternAfricanTime = "EASTERN_AFRICAN_TIME",
  MiddleEastTime = "MIDDLE_EAST_TIME",
  NearEastTime = "NEAR_EAST_TIME",
  PakistanLahoreTime = "PAKISTAN_LAHORE_TIME",
  IndiaStandardTime = "INDIA_STANDARD_TIME",
  BangladeshStandardTime = "BANGLADESH_STANDARD_TIME",
  VietnamStandardTime = "VIETNAM_STANDARD_TIME",
  ChinaTaiwanTime = "CHINA_TAIWAN_TIME",
  JapanStandardTime = "JAPAN_STANDARD_TIME",
  AustraliaCentralTime = "AUSTRALIA_CENTRAL_TIME",
  AustraliaEasternTime = "AUSTRALIA_EASTERN_TIME",
  SolomonStandardTime = "SOLOMON_STANDARD_TIME",
  NewZealandStandardTime = "NEW_ZEALAND_STANDARD_TIME",
  MidwayIslandsTime = "MIDWAY_ISLANDS_TIME",
  HawaiiStandardTime = "HAWAII_STANDARD_TIME",
  AlaskaStandardTime = "ALASKA_STANDARD_TIME",
  PacificStandardTime = "PACIFIC_STANDARD_TIME",
  MountainStandardTime = "MOUNTAIN_STANDARD_TIME",
  CentralStandardTime = "CENTRAL_STANDARD_TIME",
  EasternStandardTime = "EASTERN_STANDARD_TIME",
  PuertoRicoAndUsVirginIslandsTime = "PUERTO_RICO_AND_US_VIRGIN_ISLANDS_TIME",
  CanadaNewfoundlandTime = "CANADA_NEWFOUNDLAND_TIME",
  ArgentinaStandardTime = "ARGENTINA_STANDARD_TIME",
  MidAtlanticTime = "MID_ATLANTIC_TIME",
  CentralAfricanTime = "CENTRAL_AFRICAN_TIME"
}

export namespace TimeZone {
  export function getJsonObj(obj: TimeZone): TimeZone {
    return obj;
  }
  export function getDeserializedJsonObj(obj: TimeZone): TimeZone {
    return obj;
  }
}
