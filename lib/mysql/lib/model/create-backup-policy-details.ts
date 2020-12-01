/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Backup policy as optionally used for DB System Creation.
 *
 */
export interface CreateBackupPolicyDetails {
  /**
   * Specifies if automatic backups are enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
    * The start of a 30-minute window of time in which daily, automated backups occur.
* <p>
This should be in the format of the \"Time\" portion of an RFC3339-formatted timestamp. Any second or sub-second time data will be truncated to zero.
* <p>
At some point in the window, the system may incur a brief service disruption as the backup is performed.
* 
    */
  "windowStartTime"?: string;
  /**
   * Number of days to retain an automatic backup.
   */
  "retentionInDays"?: number;
  /**
    * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
* <p>
Tags defined here will be copied verbatim as tags on the Backup resource created by this BackupPolicy.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
* <p>
Tags defined here will be copied verbatim as tags on the Backup resource created by this BackupPolicy.
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateBackupPolicyDetails {
  export function getJsonObj(obj: CreateBackupPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
