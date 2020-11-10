/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AttachedView from "./attached-view";
export import AttachedView = AttachedView.AttachedView;
import * as AttachedViewDetails from "./attached-view-details";
export import AttachedViewDetails = AttachedViewDetails.AttachedViewDetails;
import * as ChangeResolverCompartmentDetails from "./change-resolver-compartment-details";
export import ChangeResolverCompartmentDetails = ChangeResolverCompartmentDetails.ChangeResolverCompartmentDetails;
import * as ChangeSteeringPolicyCompartmentDetails from "./change-steering-policy-compartment-details";
export import ChangeSteeringPolicyCompartmentDetails = ChangeSteeringPolicyCompartmentDetails.ChangeSteeringPolicyCompartmentDetails;
import * as ChangeTsigKeyCompartmentDetails from "./change-tsig-key-compartment-details";
export import ChangeTsigKeyCompartmentDetails = ChangeTsigKeyCompartmentDetails.ChangeTsigKeyCompartmentDetails;
import * as ChangeViewCompartmentDetails from "./change-view-compartment-details";
export import ChangeViewCompartmentDetails = ChangeViewCompartmentDetails.ChangeViewCompartmentDetails;
import * as ChangeZoneCompartmentDetails from "./change-zone-compartment-details";
export import ChangeZoneCompartmentDetails = ChangeZoneCompartmentDetails.ChangeZoneCompartmentDetails;
import * as CreateResolverEndpointDetails from "./create-resolver-endpoint-details";
export import CreateResolverEndpointDetails = CreateResolverEndpointDetails.CreateResolverEndpointDetails;
import * as CreateSteeringPolicyAttachmentDetails from "./create-steering-policy-attachment-details";
export import CreateSteeringPolicyAttachmentDetails = CreateSteeringPolicyAttachmentDetails.CreateSteeringPolicyAttachmentDetails;
import * as CreateSteeringPolicyDetails from "./create-steering-policy-details";
export import CreateSteeringPolicyDetails = CreateSteeringPolicyDetails.CreateSteeringPolicyDetails;
import * as CreateTsigKeyDetails from "./create-tsig-key-details";
export import CreateTsigKeyDetails = CreateTsigKeyDetails.CreateTsigKeyDetails;
import * as CreateViewDetails from "./create-view-details";
export import CreateViewDetails = CreateViewDetails.CreateViewDetails;
import * as CreateZoneBaseDetails from "./create-zone-base-details";
export import CreateZoneBaseDetails = CreateZoneBaseDetails.CreateZoneBaseDetails;
import * as DynectMigrationDetails from "./dynect-migration-details";
export import DynectMigrationDetails = DynectMigrationDetails.DynectMigrationDetails;
import * as ExternalMaster from "./external-master";
export import ExternalMaster = ExternalMaster.ExternalMaster;
import * as MigrationReplacement from "./migration-replacement";
export import MigrationReplacement = MigrationReplacement.MigrationReplacement;
import * as Nameserver from "./nameserver";
export import Nameserver = Nameserver.Nameserver;
import * as PatchDomainRecordsDetails from "./patch-domain-records-details";
export import PatchDomainRecordsDetails = PatchDomainRecordsDetails.PatchDomainRecordsDetails;
import * as PatchRRSetDetails from "./patch-rr-set-details";
export import PatchRRSetDetails = PatchRRSetDetails.PatchRRSetDetails;
import * as PatchZoneRecordsDetails from "./patch-zone-records-details";
export import PatchZoneRecordsDetails = PatchZoneRecordsDetails.PatchZoneRecordsDetails;
import * as RRSet from "./r-rset";
export import RRSet = RRSet.RRSet;
import * as Record from "./record";
export import Record = Record.Record;
import * as RecordCollection from "./record-collection";
export import RecordCollection = RecordCollection.RecordCollection;
import * as RecordDetails from "./record-details";
export import RecordDetails = RecordDetails.RecordDetails;
import * as RecordOperation from "./record-operation";
export import RecordOperation = RecordOperation.RecordOperation;
import * as Resolver from "./resolver";
export import Resolver = Resolver.Resolver;
import * as ResolverEndpoint from "./resolver-endpoint";
export import ResolverEndpoint = ResolverEndpoint.ResolverEndpoint;
import * as ResolverEndpointSummary from "./resolver-endpoint-summary";
export import ResolverEndpointSummary = ResolverEndpointSummary.ResolverEndpointSummary;
import * as ResolverRule from "./resolver-rule";
export import ResolverRule = ResolverRule.ResolverRule;
import * as ResolverRuleDetails from "./resolver-rule-details";
export import ResolverRuleDetails = ResolverRuleDetails.ResolverRuleDetails;
import * as ResolverSummary from "./resolver-summary";
export import ResolverSummary = ResolverSummary.ResolverSummary;
import * as Scope from "./scope";
export import Scope = Scope.Scope;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as SteeringPolicy from "./steering-policy";
export import SteeringPolicy = SteeringPolicy.SteeringPolicy;
import * as SteeringPolicyAnswer from "./steering-policy-answer";
export import SteeringPolicyAnswer = SteeringPolicyAnswer.SteeringPolicyAnswer;
import * as SteeringPolicyAttachment from "./steering-policy-attachment";
export import SteeringPolicyAttachment = SteeringPolicyAttachment.SteeringPolicyAttachment;
import * as SteeringPolicyAttachmentSummary from "./steering-policy-attachment-summary";
export import SteeringPolicyAttachmentSummary = SteeringPolicyAttachmentSummary.SteeringPolicyAttachmentSummary;
import * as SteeringPolicyFilterAnswerData from "./steering-policy-filter-answer-data";
export import SteeringPolicyFilterAnswerData = SteeringPolicyFilterAnswerData.SteeringPolicyFilterAnswerData;
import * as SteeringPolicyFilterRuleCase from "./steering-policy-filter-rule-case";
export import SteeringPolicyFilterRuleCase = SteeringPolicyFilterRuleCase.SteeringPolicyFilterRuleCase;
import * as SteeringPolicyHealthRuleCase from "./steering-policy-health-rule-case";
export import SteeringPolicyHealthRuleCase = SteeringPolicyHealthRuleCase.SteeringPolicyHealthRuleCase;
import * as SteeringPolicyLimitRuleCase from "./steering-policy-limit-rule-case";
export import SteeringPolicyLimitRuleCase = SteeringPolicyLimitRuleCase.SteeringPolicyLimitRuleCase;
import * as SteeringPolicyPriorityAnswerData from "./steering-policy-priority-answer-data";
export import SteeringPolicyPriorityAnswerData = SteeringPolicyPriorityAnswerData.SteeringPolicyPriorityAnswerData;
import * as SteeringPolicyPriorityRuleCase from "./steering-policy-priority-rule-case";
export import SteeringPolicyPriorityRuleCase = SteeringPolicyPriorityRuleCase.SteeringPolicyPriorityRuleCase;
import * as SteeringPolicyRule from "./steering-policy-rule";
export import SteeringPolicyRule = SteeringPolicyRule.SteeringPolicyRule;
import * as SteeringPolicySummary from "./steering-policy-summary";
export import SteeringPolicySummary = SteeringPolicySummary.SteeringPolicySummary;
import * as SteeringPolicyWeightedAnswerData from "./steering-policy-weighted-answer-data";
export import SteeringPolicyWeightedAnswerData = SteeringPolicyWeightedAnswerData.SteeringPolicyWeightedAnswerData;
import * as SteeringPolicyWeightedRuleCase from "./steering-policy-weighted-rule-case";
export import SteeringPolicyWeightedRuleCase = SteeringPolicyWeightedRuleCase.SteeringPolicyWeightedRuleCase;
import * as TSIG from "./t-si-g";
export import TSIG = TSIG.TSIG;
import * as TsigKey from "./tsig-key";
export import TsigKey = TsigKey.TsigKey;
import * as TsigKeySummary from "./tsig-key-summary";
export import TsigKeySummary = TsigKeySummary.TsigKeySummary;
import * as UpdateDomainRecordsDetails from "./update-domain-records-details";
export import UpdateDomainRecordsDetails = UpdateDomainRecordsDetails.UpdateDomainRecordsDetails;
import * as UpdateRRSetDetails from "./update-rr-set-details";
export import UpdateRRSetDetails = UpdateRRSetDetails.UpdateRRSetDetails;
import * as UpdateResolverDetails from "./update-resolver-details";
export import UpdateResolverDetails = UpdateResolverDetails.UpdateResolverDetails;
import * as UpdateResolverEndpointDetails from "./update-resolver-endpoint-details";
export import UpdateResolverEndpointDetails = UpdateResolverEndpointDetails.UpdateResolverEndpointDetails;
import * as UpdateSteeringPolicyAttachmentDetails from "./update-steering-policy-attachment-details";
export import UpdateSteeringPolicyAttachmentDetails = UpdateSteeringPolicyAttachmentDetails.UpdateSteeringPolicyAttachmentDetails;
import * as UpdateSteeringPolicyDetails from "./update-steering-policy-details";
export import UpdateSteeringPolicyDetails = UpdateSteeringPolicyDetails.UpdateSteeringPolicyDetails;
import * as UpdateTsigKeyDetails from "./update-tsig-key-details";
export import UpdateTsigKeyDetails = UpdateTsigKeyDetails.UpdateTsigKeyDetails;
import * as UpdateViewDetails from "./update-view-details";
export import UpdateViewDetails = UpdateViewDetails.UpdateViewDetails;
import * as UpdateZoneDetails from "./update-zone-details";
export import UpdateZoneDetails = UpdateZoneDetails.UpdateZoneDetails;
import * as UpdateZoneRecordsDetails from "./update-zone-records-details";
export import UpdateZoneRecordsDetails = UpdateZoneRecordsDetails.UpdateZoneRecordsDetails;
import * as View from "./view";
export import View = View.View;
import * as ViewSummary from "./view-summary";
export import ViewSummary = ViewSummary.ViewSummary;
import * as Zone from "./zone";
export import Zone = Zone.Zone;
import * as ZoneSummary from "./zone-summary";
export import ZoneSummary = ZoneSummary.ZoneSummary;

import * as CreateMigratedDynectZoneDetails from "./create-migrated-dynect-zone-details";
export import CreateMigratedDynectZoneDetails = CreateMigratedDynectZoneDetails.CreateMigratedDynectZoneDetails;
import * as CreateResolverVnicEndpointDetails from "./create-resolver-vnic-endpoint-details";
export import CreateResolverVnicEndpointDetails = CreateResolverVnicEndpointDetails.CreateResolverVnicEndpointDetails;
import * as CreateZoneDetails from "./create-zone-details";
export import CreateZoneDetails = CreateZoneDetails.CreateZoneDetails;
import * as ResolverForwardRule from "./resolver-forward-rule";
export import ResolverForwardRule = ResolverForwardRule.ResolverForwardRule;
import * as ResolverForwardRuleDetails from "./resolver-forward-rule-details";
export import ResolverForwardRuleDetails = ResolverForwardRuleDetails.ResolverForwardRuleDetails;
import * as ResolverVnicEndpoint from "./resolver-vnic-endpoint";
export import ResolverVnicEndpoint = ResolverVnicEndpoint.ResolverVnicEndpoint;
import * as ResolverVnicEndpointSummary from "./resolver-vnic-endpoint-summary";
export import ResolverVnicEndpointSummary = ResolverVnicEndpointSummary.ResolverVnicEndpointSummary;
import * as SteeringPolicyFilterRule from "./steering-policy-filter-rule";
export import SteeringPolicyFilterRule = SteeringPolicyFilterRule.SteeringPolicyFilterRule;
import * as SteeringPolicyHealthRule from "./steering-policy-health-rule";
export import SteeringPolicyHealthRule = SteeringPolicyHealthRule.SteeringPolicyHealthRule;
import * as SteeringPolicyLimitRule from "./steering-policy-limit-rule";
export import SteeringPolicyLimitRule = SteeringPolicyLimitRule.SteeringPolicyLimitRule;
import * as SteeringPolicyPriorityRule from "./steering-policy-priority-rule";
export import SteeringPolicyPriorityRule = SteeringPolicyPriorityRule.SteeringPolicyPriorityRule;
import * as SteeringPolicyWeightedRule from "./steering-policy-weighted-rule";
export import SteeringPolicyWeightedRule = SteeringPolicyWeightedRule.SteeringPolicyWeightedRule;
import * as UpdateResolverVnicEndpointDetails from "./update-resolver-vnic-endpoint-details";
export import UpdateResolverVnicEndpointDetails = UpdateResolverVnicEndpointDetails.UpdateResolverVnicEndpointDetails;
