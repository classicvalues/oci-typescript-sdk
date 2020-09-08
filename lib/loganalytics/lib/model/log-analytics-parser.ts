/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LoganParserDetails
 */
export interface LogAnalyticsParser {
  /**
   * content
   */
  "content"?: string;
  /**
   * description
   */
  "description"?: string;
  /**
   * display name
   */
  "displayName"?: string;
  /**
   * edit version
   */
  "editVersion"?: number;
  /**
   * encoding
   */
  "encoding"?: string;
  /**
   * example content
   */
  "exampleContent"?: string;
  /**
   * fields Maps
   */
  "fieldMaps"?: Array<model.LogAnalyticsParserField>;
  /**
   * footer regular expression
   */
  "footerContent"?: string;
  /**
   * header content
   */
  "headerContent"?: string;
  /**
   * Name
   */
  "name"?: string;
  /**
   * is default flag
   */
  "isDefault"?: boolean;
  /**
   * is single line content
   */
  "isSingleLineContent"?: boolean;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * language
   */
  "language"?: string;
  /**
   * last updated date
   */
  "timeUpdated"?: Date;
  /**
   * log type test request version
   */
  "logTypeTestRequestVersion"?: number;
  /**
   * mapped parser list
   */
  "mappedParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * parser ignore line characters
   */
  "parserIgnorelineCharacters"?: string;
  /**
   * is hidden flag
   */
  "isHidden"?: boolean;
  /**
   * sequence
   */
  "parserSequence"?: number;
  /**
   * time zone
   */
  "parserTimezone"?: string;
  "parserFilter"?: model.LogAnalyticsParserFilter;
  /**
   * write once
   */
  "isParserWrittenOnce"?: boolean;
  /**
   * plugin instance list
   */
  "parserFunctions"?: Array<model.LogAnalyticsParserFunction>;
  /**
   * sources using this parser
   */
  "sourcesCount"?: number;
  /**
   * sources using list
   */
  "sources"?: Array<model.LogAnalyticsSource>;
  /**
   * tokenize original text
   */
  "shouldTokenizeOriginalText"?: boolean;
  /**
   * type
   */
  "type"?: LogAnalyticsParser.Type;
  /**
   * user deleted flag
   */
  "isUserDeleted"?: boolean;
}

export namespace LogAnalyticsParser {
  export enum Type {
    Xml = "XML",
    Json = "JSON",
    Regex = "REGEX",
    Odl = "ODL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsParser): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.LogAnalyticsParserField.getJsonObj(item);
            })
          : undefined,

        "mappedParsers": obj.mappedParsers
          ? obj.mappedParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,

        "parserFilter": obj.parserFilter
          ? model.LogAnalyticsParserFilter.getJsonObj(obj.parserFilter)
          : undefined,

        "parserFunctions": obj.parserFunctions
          ? obj.parserFunctions.map(item => {
              return model.LogAnalyticsParserFunction.getJsonObj(item);
            })
          : undefined,

        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.LogAnalyticsSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
