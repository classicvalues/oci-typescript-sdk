/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The Database Service supports several types of DB systems, ranging in size, price, and performance. For details about each type of system, see:
* <p>
- [Exadata DB Systems](https://docs.cloud.oracle.com/Content/Database/Concepts/exaoverview.htm)
* - [Bare Metal and Virtual Machine DB Systems](https://docs.cloud.oracle.com/Content/Database/Concepts/overview.htm)
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about access control and compartments, see
* [Overview of the Identity Service](https://docs.cloud.oracle.com/Content/Identity/Concepts/overview.htm).
* <p>
For information about availability domains, see
* [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm).
* <p>
To get a list of availability domains, use the `ListAvailabilityDomains` operation
* in the Identity Service API.
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface DbSystemSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the DB system. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The name of the availability domain that the DB system is located in.
   */
  "availabilityDomain": string;
  /**
   * List of the Fault Domains in which this DB system is provisioned.
   */
  "faultDomains"?: Array<string>;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the DB system is associated with.
* <p>
**Subnet Restrictions:**
* - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
* - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems.
   * <p>
   **Subnet Restriction:** See the subnet restrictions information for **subnetId**.
   *
   */
  "backupSubnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The shape of the DB system. The shape determines resources to allocate to the DB system.
   * - For virtual machine shapes, the number of CPU cores and memory
   * - For bare metal and Exadata shapes, the number of CPU cores, storage, and memory
   *
   */
  "shape": string;
  "dbSystemOptions"?: model.DbSystemOptions;
  /**
   * The public key portion of one or more key pairs used for SSH access to the DB system.
   */
  "sshPublicKeys": Array<string>;
  /**
   * The time zone of the DB system. For details, see [DB System Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * The hostname for the DB system.
   */
  "hostname": string;
  /**
   * The domain name for the DB system.
   */
  "domain": string;
  /**
   * The Oracle Database version of the DB system.
   */
  "version"?: string;
  /**
   * The number of CPU cores enabled on the DB system.
   */
  "cpuCoreCount": number;
  /**
   * The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
   *
   */
  "clusterName"?: string;
  /**
   * The percentage assigned to DATA storage (user data and database files).
   * The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 40 and 80. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems.
   *
   */
  "dataStoragePercentage"?: number;
  /**
   * The Oracle Database edition that applies to all the databases on the DB system.
   *
   */
  "databaseEdition": DbSystemSummary.DatabaseEdition;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.
   */
  "lastPatchHistoryEntryId"?: string;
  /**
   * The port number configured for the listener on the DB system.
   */
  "listenerPort"?: number;
  /**
   * The current state of the DB system.
   */
  "lifecycleState": DbSystemSummary.LifecycleState;
  /**
   * The date and time the DB system was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * The type of redundancy configured for the DB system.
   * NORMAL is 2-way redundancy.
   * HIGH is 3-way redundancy.
   *
   */
  "diskRedundancy"?: DbSystemSummary.DiskRedundancy;
  /**
   * True, if Sparse Diskgroup is configured for Exadata dbsystem, False, if Sparse diskgroup was not configured.
   *
   */
  "sparseDiskgroup"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the DB system.
   * SCAN IP addresses are typically used for load balancing and are not assigned to any interface.
   * Oracle Clusterware directs the requests to the appropriate nodes in the cluster.
   * <p>
   **Note:** For a single-node DB system, this list is empty.
   *
   */
  "scanIpIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the DB system.
   * The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the DB system to
   * enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.
   * <p>
   **Note:** For a single-node DB system, this list is empty.
   *
   */
  "vipIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the DB system.
   *
   */
  "scanDnsRecordId"?: string;
  /**
   * The data storage size, in gigabytes, that is currently available to the DB system. Applies only for virtual machine DB systems.
   *
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The RECO/REDO storage size, in gigabytes, that is currently allocated to the DB system. Applies only for virtual machine DB systems.
   *
   */
  "recoStorageSizeInGB"?: number;
  /**
   * The number of nodes in the DB system. For RAC DB systems, the value is greater than 1.
   *
   */
  "nodeCount"?: number;
  /**
   * The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: DbSystemSummary.LicenseModel;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "sourceDbSystemId"?: string;
  /**
   * The point in time for a cloned database system when the data disks were cloned from the source database system, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "pointInTimeDataDiskCloneTimestamp"?: Date;
}

export namespace DbSystemSummary {
  export enum DatabaseEdition {
    StandardEdition = "STANDARD_EDITION",
    EnterpriseEdition = "ENTERPRISE_EDITION",
    EnterpriseEditionHighPerformance = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    EnterpriseEditionExtremePerformance = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    Migrated = "MIGRATED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DiskRedundancy {
    High = "HIGH",
    Normal = "NORMAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbSystemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbSystemOptions": obj.dbSystemOptions
          ? model.DbSystemOptions.getJsonObj(obj.dbSystemOptions)
          : undefined,

        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
}
