/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CreateDomainResponse from "./create-domain-response";
export import CreateDomainResponse = CreateDomainResponse.CreateDomainResponse;
import * as DeleteDomainResponse from "./delete-domain-response";
export import DeleteDomainResponse = DeleteDomainResponse.DeleteDomainResponse;
import * as GetDomainResponse from "./get-domain-response";
export import GetDomainResponse = GetDomainResponse.GetDomainResponse;
import * as ListDomainsResponse from "./list-domains-response";
export import ListDomainsResponse = ListDomainsResponse.ListDomainsResponse;
import * as UpdateDomainResponse from "./update-domain-response";
export import UpdateDomainResponse = UpdateDomainResponse.UpdateDomainResponse;
import * as CreateDomainGovernanceResponse from "./create-domain-governance-response";
export import CreateDomainGovernanceResponse = CreateDomainGovernanceResponse.CreateDomainGovernanceResponse;
import * as DeleteDomainGovernanceResponse from "./delete-domain-governance-response";
export import DeleteDomainGovernanceResponse = DeleteDomainGovernanceResponse.DeleteDomainGovernanceResponse;
import * as GetDomainGovernanceResponse from "./get-domain-governance-response";
export import GetDomainGovernanceResponse = GetDomainGovernanceResponse.GetDomainGovernanceResponse;
import * as ListDomainGovernancesResponse from "./list-domain-governances-response";
export import ListDomainGovernancesResponse = ListDomainGovernancesResponse.ListDomainGovernancesResponse;
import * as UpdateDomainGovernanceResponse from "./update-domain-governance-response";
export import UpdateDomainGovernanceResponse = UpdateDomainGovernanceResponse.UpdateDomainGovernanceResponse;
import * as DeleteLinkResponse from "./delete-link-response";
export import DeleteLinkResponse = DeleteLinkResponse.DeleteLinkResponse;
import * as GetLinkResponse from "./get-link-response";
export import GetLinkResponse = GetLinkResponse.GetLinkResponse;
import * as ListLinksResponse from "./list-links-response";
export import ListLinksResponse = ListLinksResponse.ListLinksResponse;
import * as ActivateOrderResponse from "./activate-order-response";
export import ActivateOrderResponse = ActivateOrderResponse.ActivateOrderResponse;
import * as GetOrderResponse from "./get-order-response";
export import GetOrderResponse = GetOrderResponse.GetOrderResponse;
import * as ApproveOrganizationTenancyForTransferResponse from "./approve-organization-tenancy-for-transfer-response";
export import ApproveOrganizationTenancyForTransferResponse = ApproveOrganizationTenancyForTransferResponse.ApproveOrganizationTenancyForTransferResponse;
import * as CreateChildTenancyResponse from "./create-child-tenancy-response";
export import CreateChildTenancyResponse = CreateChildTenancyResponse.CreateChildTenancyResponse;
import * as DeleteOrganizationTenancyResponse from "./delete-organization-tenancy-response";
export import DeleteOrganizationTenancyResponse = DeleteOrganizationTenancyResponse.DeleteOrganizationTenancyResponse;
import * as GetOrganizationResponse from "./get-organization-response";
export import GetOrganizationResponse = GetOrganizationResponse.GetOrganizationResponse;
import * as GetOrganizationTenancyResponse from "./get-organization-tenancy-response";
export import GetOrganizationTenancyResponse = GetOrganizationTenancyResponse.GetOrganizationTenancyResponse;
import * as ListOrganizationTenanciesResponse from "./list-organization-tenancies-response";
export import ListOrganizationTenanciesResponse = ListOrganizationTenanciesResponse.ListOrganizationTenanciesResponse;
import * as ListOrganizationsResponse from "./list-organizations-response";
export import ListOrganizationsResponse = ListOrganizationsResponse.ListOrganizationsResponse;
import * as UnapproveOrganizationTenancyForTransferResponse from "./unapprove-organization-tenancy-for-transfer-response";
export import UnapproveOrganizationTenancyForTransferResponse = UnapproveOrganizationTenancyForTransferResponse.UnapproveOrganizationTenancyForTransferResponse;
import * as UpdateOrganizationResponse from "./update-organization-response";
export import UpdateOrganizationResponse = UpdateOrganizationResponse.UpdateOrganizationResponse;
import * as AcceptRecipientInvitationResponse from "./accept-recipient-invitation-response";
export import AcceptRecipientInvitationResponse = AcceptRecipientInvitationResponse.AcceptRecipientInvitationResponse;
import * as GetRecipientInvitationResponse from "./get-recipient-invitation-response";
export import GetRecipientInvitationResponse = GetRecipientInvitationResponse.GetRecipientInvitationResponse;
import * as IgnoreRecipientInvitationResponse from "./ignore-recipient-invitation-response";
export import IgnoreRecipientInvitationResponse = IgnoreRecipientInvitationResponse.IgnoreRecipientInvitationResponse;
import * as ListRecipientInvitationsResponse from "./list-recipient-invitations-response";
export import ListRecipientInvitationsResponse = ListRecipientInvitationsResponse.ListRecipientInvitationsResponse;
import * as UpdateRecipientInvitationResponse from "./update-recipient-invitation-response";
export import UpdateRecipientInvitationResponse = UpdateRecipientInvitationResponse.UpdateRecipientInvitationResponse;
import * as CancelSenderInvitationResponse from "./cancel-sender-invitation-response";
export import CancelSenderInvitationResponse = CancelSenderInvitationResponse.CancelSenderInvitationResponse;
import * as CreateSenderInvitationResponse from "./create-sender-invitation-response";
export import CreateSenderInvitationResponse = CreateSenderInvitationResponse.CreateSenderInvitationResponse;
import * as GetSenderInvitationResponse from "./get-sender-invitation-response";
export import GetSenderInvitationResponse = GetSenderInvitationResponse.GetSenderInvitationResponse;
import * as ListSenderInvitationsResponse from "./list-sender-invitations-response";
export import ListSenderInvitationsResponse = ListSenderInvitationsResponse.ListSenderInvitationsResponse;
import * as UpdateSenderInvitationResponse from "./update-sender-invitation-response";
export import UpdateSenderInvitationResponse = UpdateSenderInvitationResponse.UpdateSenderInvitationResponse;
import * as CreateSubscriptionMappingResponse from "./create-subscription-mapping-response";
export import CreateSubscriptionMappingResponse = CreateSubscriptionMappingResponse.CreateSubscriptionMappingResponse;
import * as DeleteSubscriptionMappingResponse from "./delete-subscription-mapping-response";
export import DeleteSubscriptionMappingResponse = DeleteSubscriptionMappingResponse.DeleteSubscriptionMappingResponse;
import * as GetAssignedSubscriptionResponse from "./get-assigned-subscription-response";
export import GetAssignedSubscriptionResponse = GetAssignedSubscriptionResponse.GetAssignedSubscriptionResponse;
import * as GetSubscriptionResponse from "./get-subscription-response";
export import GetSubscriptionResponse = GetSubscriptionResponse.GetSubscriptionResponse;
import * as GetSubscriptionMappingResponse from "./get-subscription-mapping-response";
export import GetSubscriptionMappingResponse = GetSubscriptionMappingResponse.GetSubscriptionMappingResponse;
import * as ListAssignedSubscriptionsResponse from "./list-assigned-subscriptions-response";
export import ListAssignedSubscriptionsResponse = ListAssignedSubscriptionsResponse.ListAssignedSubscriptionsResponse;
import * as ListAvailableRegionsResponse from "./list-available-regions-response";
export import ListAvailableRegionsResponse = ListAvailableRegionsResponse.ListAvailableRegionsResponse;
import * as ListSubscriptionMappingsResponse from "./list-subscription-mappings-response";
export import ListSubscriptionMappingsResponse = ListSubscriptionMappingsResponse.ListSubscriptionMappingsResponse;
import * as ListSubscriptionsResponse from "./list-subscriptions-response";
export import ListSubscriptionsResponse = ListSubscriptionsResponse.ListSubscriptionsResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
