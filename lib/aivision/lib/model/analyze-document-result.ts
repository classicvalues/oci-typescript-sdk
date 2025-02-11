/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
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
 * Document analysis results.
 */
export interface AnalyzeDocumentResult {
  "documentMetadata": model.DocumentMetadata;
  /**
   * Array of Page.
   */
  "pages": Array<model.Page>;
  /**
   * An array of detected document types.
   */
  "detectedDocumentTypes"?: Array<model.DetectedDocumentType>;
  /**
   * An array of detected languages.
   */
  "detectedLanguages"?: Array<model.DetectedLanguage>;
  /**
   * Document classification model version.
   */
  "documentClassificationModelVersion"?: string;
  /**
   * Document language classification model version.
   */
  "languageClassificationModelVersion"?: string;
  /**
   * Document text detection model version.
   */
  "textDetectionModelVersion"?: string;
  /**
   * Document keyValue detection model version.
   */
  "keyValueDetectionModelVersion"?: string;
  /**
   * Document table detection model version.
   */
  "tableDetectionModelVersion"?: string;
  /**
   * Errors encountered during document analysis.
   */
  "errors"?: Array<model.ProcessingError>;
  /**
   * Generated searchable PDF file.
   */
  "searchablePdf"?: string;
}

export namespace AnalyzeDocumentResult {
  export function getJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyzeDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "documentMetadata": obj.documentMetadata
          ? model.DocumentMetadata.getDeserializedJsonObj(obj.documentMetadata)
          : undefined,
        "pages": obj.pages
          ? obj.pages.map(item => {
              return model.Page.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedDocumentTypes": obj.detectedDocumentTypes
          ? obj.detectedDocumentTypes.map(item => {
              return model.DetectedDocumentType.getDeserializedJsonObj(item);
            })
          : undefined,
        "detectedLanguages": obj.detectedLanguages
          ? obj.detectedLanguages.map(item => {
              return model.DetectedLanguage.getDeserializedJsonObj(item);
            })
          : undefined,

        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.ProcessingError.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
