/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details for creating the export.
 */
export interface CreateExportDetails {
  /**
    * Export options for the new export. If left unspecified,
* defaults to:
* <p>
       [
*          {
*             \"source\" : \"0.0.0.0/0\",
*             \"requirePrivilegedSourcePort\" : false,
*             \"access\" : \"READ_WRITE\",
*             \"identitySquash\" : \"NONE\"
*           }
*        ]
* <p>
  **Note:** Mount targets do not have Internet-routable IP
*   addresses.  Therefore they will not be reachable from the
*   Internet, even if an associated `ClientOptions` item has
*   a source of `0.0.0.0/0`.
* <p>
  **If set to the empty array then the export will not be
*   visible to any clients.**
* <p>
  The export's `exportOptions` can be changed after creation
*   using the `UpdateExport` operation.
* 
    */
  "exportOptions"?: Array<model.ClientOptions>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of this export's export set.
   */
  "exportSetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of this export's file system.
   */
  "fileSystemId": string;
  /**
    * Path used to access the associated file system.
* <p>
Avoid entering confidential information.
* <p>
Example: `/mediafiles`
* 
    */
  "path": string;
}

export namespace CreateExportDetails {
  export function getJsonObj(obj: CreateExportDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "exportOptions": obj.exportOptions
          ? obj.exportOptions.map(item => {
              return model.ClientOptions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
