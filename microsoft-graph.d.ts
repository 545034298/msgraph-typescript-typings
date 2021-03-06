// Type definitions for the Microsoft Graph API
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings
// Definitions by: Microsoft Graph Team <https://github.com/microsoftgraph>

//
// Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
//


export as namespace microsoftgraph;

export type AutomaticRepliesStatus = "disabled" | "alwaysEnabled" | "scheduled"
export type ExternalAudienceScope = "none" | "contactsOnly" | "all"
export type AttendeeType = "required" | "optional" | "resource"
export type FreeBusyStatus = "free" | "tentative" | "busy" | "oof" | "workingElsewhere" | "unknown"
export type ActivityDomain = "unknown" | "work" | "personal" | "unrestricted"
export type BodyType = "text" | "html"
export type Importance = "low" | "normal" | "high"
export type InferenceClassificationType = "focused" | "other"
export type CalendarColor = "lightBlue" | "lightGreen" | "lightOrange" | "lightGray" | "lightYellow" | "lightTeal" | "lightPink" | "lightBrown" | "lightRed" | "maxColor" | "auto"
export type ResponseType = "none" | "organizer" | "tentativelyAccepted" | "accepted" | "declined" | "notResponded"
export type Sensitivity = "normal" | "personal" | "private" | "confidential"
export type RecurrencePatternType = "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly"
export type DayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday"
export type WeekIndex = "first" | "second" | "third" | "fourth" | "last"
export type RecurrenceRangeType = "endDate" | "noEnd" | "numbered"
export type EventType = "singleInstance" | "occurrence" | "exception" | "seriesMaster"
export type MeetingMessageType = "none" | "meetingRequest" | "meetingCancelled" | "meetingAccepted" | "meetingTenativelyAccepted" | "meetingDeclined"
export type PhoneType = "home" | "business" | "mobile" | "other" | "assistant" | "homeFax" | "businessFax" | "otherFax" | "pager" | "radio"
export type WebsiteType = "other" | "home" | "work" | "blog" | "profile"
export type PlannerPreviewType = "automatic" | "noPreview" | "checklist" | "description" | "reference"
export type OperationStatus = "NotStarted" | "Running" | "Completed" | "Failed"
export type OnenotePatchInsertPosition = "After" | "Before"
export type OnenotePatchActionType = "Replace" | "Append" | "Delete" | "Insert" | "Prepend"
export type OnenoteSourceService = "Unknown" | "OneDrive" | "OneDriveForBusiness" | "OnPremOneDriveForBusiness"
export type OnenoteUserRole = "Owner" | "Contributor" | "Reader" | "None"

export interface Entity {

	    /** Read-only. */
	    id?: string

}

export interface DirectoryObject extends Entity {

}

export interface Device extends DirectoryObject {

	    /** true if the account is enabled; otherwise, false. Required. */
	    accountEnabled?: boolean

	    /** The any operator is required for filter expressions on multi-valued properties. Not nullable. Required. */
	    alternativeSecurityIds?: AlternativeSecurityId[]

	    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    approximateLastSignInDateTime?: string

	    /** Unique client specified GUID to represent the device. Required. */
	    deviceId?: string

	    deviceMetadata?: string

	    deviceVersion?: number

	    /** The display name for the device. Required. */
	    displayName?: string

	    /** true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. */
	    isCompliant?: boolean

	    /** true if the device is managed by a Mobile Device Management (MDM) app such as Intune; otherwise, false. */
	    isManaged?: boolean

	    /** The last time at which the object was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    onPremisesLastSyncDateTime?: string

	    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). */
	    onPremisesSyncEnabled?: boolean

	    /** The type of operating system on the device. Required. */
	    operatingSystem?: string

	    /** The version of the operating system on the device. Required. */
	    operatingSystemVersion?: string

	    /** Not nullable. */
	    physicalIds?: string[]

	    trustType?: string

	    /** Users that are registered owners of the device. Read-only. Nullable. */
	    registeredOwners?: DirectoryObject[]

	    /** Users that are registered users of the device. Read-only. Nullable. */
	    registeredUsers?: DirectoryObject[]

	    /** The collection of open extensions defined for the device. Read-only. Nullable. */
	    extensions?: Extension[]

}

export interface Extension extends Entity {

}

export interface DirectoryRole extends DirectoryObject {

	    /** The description for the directory role. Read-only. */
	    description?: string

	    /** The display name for the directory role. Read-only. */
	    displayName?: string

	    /** The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. */
	    roleTemplateId?: string

	    /** Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. */
	    members?: DirectoryObject[]

}

export interface DirectoryRoleTemplate extends DirectoryObject {

	    /** The description to set for the directory role. Read-only. */
	    description?: string

	    /** The display name to set for the directory role. Read-only. */
	    displayName?: string

}

export interface Domain extends Entity {

	    /** Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication.Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. Not nullable */
	    authenticationType?: string

	    /** This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled. */
	    availabilityStatus?: string

	    /** The value of the property is false if the DNS record management of the domain has been delegated to Office 365. Otherwise, the value is true. Not nullable */
	    isAdminManaged?: boolean

	    /** True if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable */
	    isDefault?: boolean

	    /** True if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable */
	    isInitial?: boolean

	    /** True if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable */
	    isRoot?: boolean

	    /** True if the domain has completed domain ownership verification. Not nullable */
	    isVerified?: boolean

	    /** The capabilities assigned to the domain.Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, YammerNot nullable */
	    supportedServices?: string[]

	    /** Status of asynchronous operations scheduled for the domain. */
	    state?: DomainState

	    /** DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services.Read-only, Nullable */
	    serviceConfigurationRecords?: DomainDnsRecord[]

	    /** DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD.Read-only, Nullable */
	    verificationDnsRecords?: DomainDnsRecord[]

	    /** Read-only, Nullable */
	    domainNameReferences?: DirectoryObject[]

}

export interface DomainDnsRecord extends Entity {

	    /** If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain. */
	    isOptional?: boolean

	    /** Value used when configuring the name of the DNS record at the DNS host. */
	    label?: string

	    /** Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey */
	    recordType?: string

	    /** Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune */
	    supportedService?: string

	    /** Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable */
	    ttl?: number

}

export interface DomainDnsCnameRecord extends DomainDnsRecord {

	    /** The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host. */
	    canonicalName?: string

}

export interface DomainDnsMxRecord extends DomainDnsRecord {

	    /** Value used when configuring the answer/destination/value of the MX record at the DNS host. */
	    mailExchange?: string

	    /** Value used when configuring the Preference/Priority property of the MX record at the DNS host. */
	    preference?: number

}

export interface DomainDnsSrvRecord extends DomainDnsRecord {

	    /** Value to use when configuring the Target property of the SRV record at the DNS host. */
	    nameTarget?: string

	    /** Value to use when configuring the port property of the SRV record at the DNS host. */
	    port?: number

	    /** Value to use when configuring the priority property of the SRV record at the DNS host. */
	    priority?: number

	    /** Value to use when configuring the protocol property of the SRV record at the DNS host. */
	    protocol?: string

	    /** Value to use when configuring the service property of the SRV record at the DNS host. */
	    service?: string

	    /** Value to use when configuring the weight property of the SRV record at the DNS host. */
	    weight?: number

}

export interface DomainDnsTxtRecord extends DomainDnsRecord {

	    /** Value used when configuring the text property at the DNS host. */
	    text?: string

}

export interface DomainDnsUnavailableRecord extends DomainDnsRecord {

	    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
	    description?: string

}

export interface LicenseDetails extends Entity {

	    /** Information about the service plans assigned with the license. Read-only, Not nullable */
	    servicePlans?: ServicePlanInfo[]

	    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only */
	    skuId?: string

	    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: "AAD_Premium". Read-only */
	    skuPartNumber?: string

}

export interface Group extends DirectoryObject {

	    classification?: string

	    /** An optional description for the group. */
	    description?: string

	    /** The display name for the group. This property is required when a group is created and it cannot be cleared during updates. Supports $filter and $orderby. */
	    displayName?: string

	    /** Specifies the type of group to create. Possible values are Unified to create an Office 365 group, or DynamicMembership for dynamic groups.  For all other group types, like security-enabled groups and email-enabled security groups, do not set this property. Supports $filter. */
	    groupTypes?: string[]

	    /** The SMTP address for the group, for example, "serviceadmins@contoso.onmicrosoft.com". Read-only. Supports $filter. */
	    mail?: string

	    /** Specifies whether the group is mail-enabled. If the securityEnabled property is also true, the group is a mail-enabled security group; otherwise, the group is a Microsoft Exchange distribution group. */
	    mailEnabled?: boolean

	    /** The mail alias for the group. This property must be specified when a group is created. Supports $filter. */
	    mailNickname?: string

	    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only. Supports $filter. */
	    onPremisesLastSyncDateTime?: string

	    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Read-only. */
	    onPremisesSecurityIdentifier?: string

	    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter. */
	    onPremisesSyncEnabled?: boolean

	    /** The any operator is required for filter expressions on multi-valued properties. Read-only. Not nullable. Supports $filter. */
	    proxyAddresses?: string[]

	    /** Specifies whether the group is a security group. If the mailEnabled property is also true, the group is a mail-enabled security group; otherwise it is a security group. Must be false for Office 365 groups. Supports $filter. */
	    securityEnabled?: boolean

	    /** Specifies the visibility of an Office 365 group. Possible values are: Private, Public, or empty (which is interpreted as Public). */
	    visibility?: string

	    /** Default is false. Indicates if people external to the organization can send messages to the group. */
	    allowExternalSenders?: boolean

	    /** Default is false. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. */
	    autoSubscribeNewMembers?: boolean

	    /** Default value is true. Indicates whether the current user is subscribed to receive email conversations. */
	    isSubscribedByMail?: boolean

	    /** Count of posts that the current  user has not seen since his last visit. */
	    unseenCount?: number

	    /** Users and groups that are members of this group. HTTP Methods: GET (supported for all groups), POST (supported for Office 365 groups, security groups and mail-enabled security groups), DELETE (supported for Office 365 groups and security groups) Nullable. */
	    members?: DirectoryObject[]

	    /** Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. */
	    memberOf?: DirectoryObject[]

	    /** The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only. */
	    createdOnBehalfOf?: DirectoryObject

	    /** The owners of the group. The owners are a set of non-admin users who are allowed to modify this object. Limited to 10 owners. HTTP Methods: GET (supported for all groups), POST (supported for Office 365 groups, security groups and mail-enabled security groups), DELETE (supported for Office 365 groups and security groups). Nullable. */
	    owners?: DirectoryObject[]

	    /** Read-only. Nullable. */
	    settings?: GroupSetting[]

	    /** The collection of open extensions defined for the group. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** The group's conversation threads. Nullable. */
	    threads?: ConversationThread[]

	    /** The group's calendar. Read-only. */
	    calendar?: Calendar

	    /** The calendar view for the calendar. Read-only. */
	    calendarView?: Event[]

	    /** The group's calendar events. */
	    events?: Event[]

	    /** The group's conversations. */
	    conversations?: Conversation[]

	    /** The group's profile photo */
	    photo?: ProfilePhoto

	    /** The profile photos owned by the group. Read-only. Nullable. */
	    photos?: ProfilePhoto[]

	    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post. */
	    acceptedSenders?: DirectoryObject[]

	    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable */
	    rejectedSenders?: DirectoryObject[]

	    /** The group's drive. Read-only. */
	    drive?: Drive

	    drives?: Drive[]

	    /** The list of SharePoint sites in this group. Access the default site with /sites/root. */
	    sites?: Site[]

	    /** Entry-point to Planner resource that might exist for a Unified Group. */
	    planner?: PlannerGroup

	    /** Read-only. */
	    onenote?: Onenote

}

export interface GroupSetting extends Entity {

	    /** Display name of this group of settings, which comes from the associated template. */
	    displayName?: string

	    /** Unique identifier for the template used to create this group of settings. Read-only. */
	    templateId?: string

	    /** Collection of name value pairs. Must contain and set all the settings defined in the template. */
	    values?: SettingValue[]

}

export interface ConversationThread extends Entity {

	    /** The To: recipients for the thread. */
	    toRecipients?: Recipient[]

	    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. */
	    topic?: string

	    /** Indicates whether any of the posts within this thread has at least one attachment. */
	    hasAttachments?: boolean

	    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    lastDeliveredDateTime?: string

	    /** All the users that sent a message to this thread. */
	    uniqueSenders?: string[]

	    /** The Cc: recipients for the thread. */
	    ccRecipients?: Recipient[]

	    /** A short summary from the body of the latest post in this converstaion. */
	    preview?: string

	    /** Indicates if the thread is locked. */
	    isLocked?: boolean

	    /** Read-only. Nullable. */
	    posts?: Post[]

}

export interface Calendar extends Entity {

	    /** The calendar name. */
	    name?: string

	    /** Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: LightBlue=0, LightGreen=1, LightOrange=2, LightGray=3, LightYellow=4, LightTeal=5, LightPink=6, LightBrown=7, LightRed=8, MaxColor=9, Auto=-1 */
	    color?: CalendarColor

	    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
	    changeKey?: string

	    /** True if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. */
	    canShare?: boolean

	    /** True if the user can read calendar items that have been marked private, false otherwise. */
	    canViewPrivateItems?: boolean

	    /** True if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access. */
	    canEdit?: boolean

	    /** If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user. */
	    owner?: EmailAddress

	    /** The events in the calendar. Navigation property. Read-only. */
	    events?: Event[]

	    /** The calendar view for the calendar. Navigation property. Read-only. */
	    calendarView?: Event[]

	    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface OutlookItem extends Entity {

	    createdDateTime?: string

	    lastModifiedDateTime?: string

	    changeKey?: string

	    categories?: string[]

}

export interface Event extends OutlookItem {

	    /** The start time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy custom time zone was set in desktop Outlook. */
	    originalStartTimeZone?: string

	    /** The end time zone that was set when the event was created. A value of tzone://Microsoft/Customindicates that a legacy custom time zone was set in desktop Outlook. */
	    originalEndTimeZone?: string

	    /** Indicates the type of response sent in response to an event message. */
	    responseStatus?: ResponseStatus

	    /** A unique identifier that is shared by all instances of an event across different calendars. */
	    iCalUId?: string

	    /** The number of minutes before the event start time that the reminder alert occurs. */
	    reminderMinutesBeforeStart?: number

	    /** Set to true if an alert is set to remind the user of the event. */
	    isReminderOn?: boolean

	    /** Set to true if the event has attachments. */
	    hasAttachments?: boolean

	    /** The text of the event's subject line. */
	    subject?: string

	    /** The body of the message associated with the event. It can be in HTML or text format. */
	    body?: ItemBody

	    /** The preview of the message associated with the event. It is in text format. */
	    bodyPreview?: string

	    /** The importance of the event: Low = 0, Normal = 1, High = 2. Possible values are: Low, Normal, High. */
	    importance?: Importance

	    /** Possible values are: Normal, Personal, Private, Confidential. */
	    sensitivity?: Sensitivity

	    /** The date, time, and time zone that the event starts. */
	    start?: DateTimeTimeZone

	    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    originalStart?: string

	    /** The date, time, and time zone that the event ends. */
	    end?: DateTimeTimeZone

	    /** The location of the event. */
	    location?: Location

	    /** Set to true if the event lasts all day. */
	    isAllDay?: boolean

	    /** Set to true if the event has been canceled. */
	    isCancelled?: boolean

	    /** Set to true if the message sender is also the organizer. */
	    isOrganizer?: boolean

	    /** The recurrence pattern for the event. */
	    recurrence?: PatternedRecurrence

	    /** Set to true if the sender would like a response when the event is accepted or declined. */
	    responseRequested?: boolean

	    /** The categories assigned to the item. */
	    seriesMasterId?: string

	    /** The status to show: Free = 0, Tentative = 1, Busy = 2, Oof = 3, WorkingElsewhere = 4, Unknown = -1. Possible values are: Free, Tentative, Busy, Oof, WorkingElsewhere, Unknown. */
	    showAs?: FreeBusyStatus

	    /** The event type: SingleInstance = 0, Occurrence = 1, Exception = 2, SeriesMaster = 3. Possible values are: SingleInstance, Occurrence, Exception, SeriesMaster. */
	    type?: EventType

	    /** The collection of attendees for the event. */
	    attendees?: Attendee[]

	    /** The organizer of the event. */
	    organizer?: Recipient

	    /** The URL to open the event in Outlook Web App.The event will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame. */
	    webLink?: string

	    /** A URL for an online meeting. */
	    onlineMeetingUrl?: string

	    /** The calendar that contains the event. Navigation property. Read-only. */
	    calendar?: Calendar

	    /** The instances of the event. Navigation property. Read-only. Nullable. */
	    instances?: Event[]

	    /** The collection of open extensions defined for the event. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** The collection of fileAttachment and itemAttachment attachments for the event. Navigation property. Read-only. Nullable. */
	    attachments?: Attachment[]

	    /** The collection of single-value extended properties defined for the event. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface Conversation extends Entity {

	    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. */
	    topic?: string

	    /** Indicates whether any of the posts within this Conversation has at least one attachment. */
	    hasAttachments?: boolean

	    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    lastDeliveredDateTime?: string

	    /** All the users that sent a message to this Conversation. */
	    uniqueSenders?: string[]

	    /** A short summary from the body of the latest post in this converstaion. */
	    preview?: string

	    /** A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable. */
	    threads?: ConversationThread[]

}

export interface ProfilePhoto extends Entity {

	    /** The height of the photo. Read-only. */
	    height?: number

	    /** The width of the photo. Read-only. */
	    width?: number

}

export interface BaseItem extends Entity {

	    /** Identity of the user, device, or application which created the item. Read-only. */
	    createdBy?: IdentitySet

	    /** Date and time of item creation. Read-only. */
	    createdDateTime?: string

	    description?: string

	    /** ETag for the item. Read-only. */
	    eTag?: string

	    /** Identity of the user, device, and application which last modified the item. Read-only. */
	    lastModifiedBy?: IdentitySet

	    /** Date and time the item was last modified. Read-only. */
	    lastModifiedDateTime?: string

	    /** The name of the item. Read-write. */
	    name?: string

	    /** Parent information, if the item has a parent. Read-write. */
	    parentReference?: ItemReference

	    /** URL that displays the resource in the browser. Read-only. */
	    webUrl?: string

	    createdByUser?: User

	    lastModifiedByUser?: User

}

export interface Drive extends BaseItem {

	    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
	    driveType?: string

	    /** Optional. The user account that owns the drive. Read-only. */
	    owner?: IdentitySet

	    /** Optional. Information about the drive's storage space quota. Read-only. */
	    quota?: Quota

	    sharePointIds?: SharepointIds

	    system?: SystemFacet

	    /** All items contained in the drive. Read-only. Nullable. */
	    items?: DriveItem[]

	    list?: List

	    /** The root folder of the drive. Read-only. */
	    root?: DriveItem

	    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
	    special?: DriveItem[]

}

export interface Site extends BaseItem {

	    /** The full title for the site. Read-only. */
	    displayName?: string

	    /** If present, indicates that this is the root site in the site collection. Read-only. */
	    root?: Root

	    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
	    sharepointIds?: SharepointIds

	    /** Provides details about the site's site collection. Available only on the root site. Read-only. */
	    siteCollection?: SiteCollection

	    columns?: ColumnDefinition[]

	    contentTypes?: ContentType[]

	    /** The default drive (document library) for this site. */
	    drive?: Drive

	    /** The collection of drives (document libraries) under this site. */
	    drives?: Drive[]

	    /** Used to address any item contained in this site. This collection cannot be enumerated. */
	    items?: BaseItem[]

	    lists?: List[]

	    /** The collection of the sub-sites under this site. */
	    sites?: Site[]

	    /** Calls the OneNote service for notebook related operations. */
	    onenote?: Onenote

}

export interface PlannerGroup extends Entity {

	    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
	    plans?: PlannerPlan[]

}

export interface Onenote extends Entity {

	    notebooks?: Notebook[]

	    sections?: OnenoteSection[]

	    sectionGroups?: SectionGroup[]

	    pages?: OnenotePage[]

	    resources?: OnenoteResource[]

	    operations?: OnenoteOperation[]

}

export interface Contract extends DirectoryObject {

	    contractType?: string

	    customerId?: string

	    defaultDomainName?: string

	    displayName?: string

}

export interface SubscribedSku extends Entity {

	    /** For example, "Enabled". */
	    capabilityStatus?: string

	    /** The number of licenses that have been assigned. */
	    consumedUnits?: number

	    /** Information about the number and status of prepaid licenses. */
	    prepaidUnits?: LicenseUnitsDetail

	    /** Information about the service plans that are available with the SKU. Not nullable */
	    servicePlans?: ServicePlanInfo[]

	    /** The unique identifier (GUID) for the service SKU. */
	    skuId?: string

	    /** The SKU part number; for example: "AAD_PREMIUM" or "RMSBASIC". */
	    skuPartNumber?: string

	    /** For example, "User" or "Company". */
	    appliesTo?: string

}

export interface Organization extends DirectoryObject {

	    /** The collection of service plans associated with the tenant. Not nullable. */
	    assignedPlans?: AssignedPlan[]

	    businessPhones?: string[]

	    city?: string

	    country?: string

	    countryLetterCode?: string

	    /** The display name for the tenant. */
	    displayName?: string

	    /** Not nullable. */
	    marketingNotificationEmails?: string[]

	    onPremisesLastSyncDateTime?: string

	    onPremisesSyncEnabled?: boolean

	    postalCode?: string

	    preferredLanguage?: string

	    /** Not nullable. */
	    provisionedPlans?: ProvisionedPlan[]

	    securityComplianceNotificationMails?: string[]

	    securityComplianceNotificationPhones?: string[]

	    state?: string

	    street?: string

	    /** Not nullable. */
	    technicalNotificationMails?: string[]

	    /** The collection of domains associated with this tenant. Not nullable. */
	    verifiedDomains?: VerifiedDomain[]

	    /** The collection of open extensions defined for the organization. Read-only. Nullable. */
	    extensions?: Extension[]

}

export interface User extends DirectoryObject {

	    /** true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter. */
	    accountEnabled?: boolean

	    /** The licenses that are assigned to the user. Not nullable. */
	    assignedLicenses?: AssignedLicense[]

	    /** The plans that are assigned to the user. Read-only. Not nullable. */
	    assignedPlans?: AssignedPlan[]

	    /** The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property. */
	    businessPhones?: string[]

	    /** The city in which the user is located. Supports $filter. */
	    city?: string

	    /** The company name which the user is associated. */
	    companyName?: string

	    /** The country/region in which the user is located; for example, “US” or “UK”. Supports $filter. */
	    country?: string

	    /** The name for the department in which the user works. Supports $filter. */
	    department?: string

	    /** The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby. */
	    displayName?: string

	    /** The given name (first name) of the user. Supports $filter. */
	    givenName?: string

	    imAddresses?: string[]

	    /** The user’s job title. Supports $filter. */
	    jobTitle?: string

	    /** The SMTP address for the user, for example, "jeff@contoso.onmicrosoft.com". Read-Only. Supports $filter. */
	    mail?: string

	    /** The mail alias for the user. This property must be specified when a user is created. Supports $filter. */
	    mailNickname?: string

	    /** The primary cellular telephone number for the user. */
	    mobilePhone?: string

	    /** This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user’s userPrincipalName (UPN) property. Important: The $ and  characters cannot be used when specifying this property. Supports $filter. */
	    onPremisesImmutableId?: string

	    /** Indicates the last time at which the object was synced with the on-premises directory; for example: "2013-02-16T03:04:54Z". The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only. */
	    onPremisesLastSyncDateTime?: string

	    /** Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only. */
	    onPremisesSecurityIdentifier?: string

	    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only */
	    onPremisesSyncEnabled?: boolean

	    /** Specifies password policies for the user. This value is an enumeration with one possible value being “DisableStrongPassword”, which allows weaker passwords than the default policy to be specified. “DisablePasswordExpiration” can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword". */
	    passwordPolicies?: string

	    /** Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. */
	    passwordProfile?: PasswordProfile

	    /** The office location in the user's place of business. */
	    officeLocation?: string

	    /** The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. */
	    postalCode?: string

	    /** The preferred language for the user. Should follow ISO 639-1 Code; for example "en-US". */
	    preferredLanguage?: string

	    /** The plans that are provisioned for the user. Read-only. Not nullable. */
	    provisionedPlans?: ProvisionedPlan[]

	    /** For example: ["SMTP: bob@contoso.com", "smtp: bob@sales.contoso.com"] The any operator is required for filter expressions on multi-valued properties. Read-only, Not nullable. Supports $filter. */
	    proxyAddresses?: string[]

	    /** The state or province in the user's address. Supports $filter. */
	    state?: string

	    /** The street address of the user's place of business. */
	    streetAddress?: string

	    /** The user's surname (family name or last name). Supports $filter. */
	    surname?: string

	    /** A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: "US", "JP", and "GB". Not nullable. Supports $filter. */
	    usageLocation?: string

	    /** The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant’s collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization. Supports $filter and $orderby. */
	    userPrincipalName?: string

	    /** A string value that can be used to classify user types in your directory, such as “Member” and “Guest”. Supports $filter. */
	    userType?: string

	    /** Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone. */
	    mailboxSettings?: MailboxSettings

	    /** A freeform text entry field for the user to describe themselves. */
	    aboutMe?: string

	    /** The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    birthday?: string

	    /** The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    hireDate?: string

	    /** A list for the user to describe their interests. */
	    interests?: string[]

	    /** The URL for the user's personal site. */
	    mySite?: string

	    /** A list for the user to enumerate their past projects. */
	    pastProjects?: string[]

	    /** The preferred name for the user. */
	    preferredName?: string

	    /** A list for the user to enumerate their responsibilities. */
	    responsibilities?: string[]

	    /** A list for the user to enumerate the schools they have attended. */
	    schools?: string[]

	    /** A list for the user to enumerate their skills. */
	    skills?: string[]

	    /** Devices that are owned by the user. Read-only. Nullable. */
	    ownedDevices?: DirectoryObject[]

	    /** Devices that are registered for the user. Read-only. Nullable. */
	    registeredDevices?: DirectoryObject[]

	    /** The user or contact that is this user’s manager. Read-only. (HTTP Methods: GET, PUT, DELETE.) */
	    manager?: DirectoryObject

	    /** The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. */
	    directReports?: DirectoryObject[]

	    /** The groups and directory roles that the user is a member of. Read-only. Nullable. */
	    memberOf?: DirectoryObject[]

	    /** Directory objects that were created by the user. Read-only. Nullable. */
	    createdObjects?: DirectoryObject[]

	    /** Directory objects that are owned by the user. Read-only. Nullable. */
	    ownedObjects?: DirectoryObject[]

	    licenseDetails?: LicenseDetails[]

	    /** The collection of open extensions defined for the user. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** The messages in a mailbox or folder. Read-only. Nullable. */
	    messages?: Message[]

	    /** The user's mail folders. Read-only. Nullable. */
	    mailFolders?: MailFolder[]

	    /** The user's primary calendar. Read-only. */
	    calendar?: Calendar

	    /** The user's calendars. Read-only. Nullable. */
	    calendars?: Calendar[]

	    /** The user's calendar groups. Read-only. Nullable. */
	    calendarGroups?: CalendarGroup[]

	    /** The calendar view for the calendar. Read-only. Nullable. */
	    calendarView?: Event[]

	    /** The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable. */
	    events?: Event[]

	    people?: Person[]

	    /** The user's contacts. Read-only. Nullable. */
	    contacts?: Contact[]

	    /** The user's contacts folders. Read-only. Nullable. */
	    contactFolders?: ContactFolder[]

	    /** Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance. */
	    inferenceClassification?: InferenceClassification

	    /** The user's profile photo. Read-only. */
	    photo?: ProfilePhoto

	    photos?: ProfilePhoto[]

	    /** The user's OneDrive. Read-only. */
	    drive?: Drive

	    /** A collection of drives available for this user. Read-only. */
	    drives?: Drive[]

	    planner?: PlannerUser

	    /** Read-only. */
	    onenote?: Onenote

}

export interface Message extends OutlookItem {

	    /** The date and time the message was received. */
	    receivedDateTime?: string

	    /** The date and time the message was sent. */
	    sentDateTime?: string

	    /** Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src="cid:image001.jpg@01D26CD8.6C05F070">. */
	    hasAttachments?: boolean

	    /** The message ID in the format specified by RFC2822. */
	    internetMessageId?: string

	    /** The subject of the message. */
	    subject?: string

	    /** The body of the message. It can be in HTML or text format. */
	    body?: ItemBody

	    /** The first 255 characters of the message body. It is in text format. */
	    bodyPreview?: string

	    /** The importance of the message: Low, Normal, High. */
	    importance?: Importance

	    /** The unique identifier for the message's parent mailFolder. */
	    parentFolderId?: string

	    /** The account that is actually used to generate the message. */
	    sender?: Recipient

	    /** The mailbox owner and sender of the message. */
	    from?: Recipient

	    /** The To: recipients for the message. */
	    toRecipients?: Recipient[]

	    /** The Cc: recipients for the message. */
	    ccRecipients?: Recipient[]

	    /** The Bcc: recipients for the message. */
	    bccRecipients?: Recipient[]

	    /** The email addresses to use when replying. */
	    replyTo?: Recipient[]

	    /** The ID of the conversation the email belongs to. */
	    conversationId?: string

	    /** The part of the body of the message that is unique to the current message. uniqueBody is not returned by default but can be retrieved for a given message by use of the ?$select=uniqueBody query. It can be in HTML or text format. */
	    uniqueBody?: ItemBody

	    /** Indicates whether a read receipt is requested for the message. */
	    isDeliveryReceiptRequested?: boolean

	    /** Indicates whether a read receipt is requested for the message. */
	    isReadReceiptRequested?: boolean

	    /** Indicates whether the message has been read. */
	    isRead?: boolean

	    /** Indicates whether the message is a draft. A message is a draft if it hasn't been sent yet. */
	    isDraft?: boolean

	    /** The URL to open the message in Outlook Web App.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook Web App review pane.The message will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame. */
	    webLink?: string

	    /** The classification of the message for the user, based on inferred relevance or importance, or on an explicit override. Possible values are: focused or other. */
	    inferenceClassification?: InferenceClassificationType

	    /** The fileAttachment and itemAttachment attachments for the message. */
	    attachments?: Attachment[]

	    /** The collection of open extensions defined for the message. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** The collection of single-value extended properties defined for the message. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the message. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface MailFolder extends Entity {

	    /** The mailFolder's display name. */
	    displayName?: string

	    /** The unique identifier for the mailFolder's parent mailFolder. */
	    parentFolderId?: string

	    /** The number of immediate child mailFolders in the current mailFolder. */
	    childFolderCount?: number

	    /** The number of items in the mailFolder marked as unread. */
	    unreadItemCount?: number

	    /** The number of items in the mailFolder. */
	    totalItemCount?: number

	    /** The collection of messages in the mailFolder. */
	    messages?: Message[]

	    /** The collection of child folders in the mailFolder. */
	    childFolders?: MailFolder[]

	    /** The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface CalendarGroup extends Entity {

	    /** The group name. */
	    name?: string

	    /** The class identifier. Read-only. */
	    classId?: string

	    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
	    changeKey?: string

	    /** The calendars in the calendar group. Navigation property. Read-only. Nullable. */
	    calendars?: Calendar[]

}

export interface Person extends Entity {

	    /** The person's display name. */
	    displayName?: string

	    /** The person's given name. */
	    givenName?: string

	    /** The person's surname. */
	    surname?: string

	    /** The person's birthday. */
	    birthday?: string

	    /** Free-form notes that the the user has taken about this person. */
	    personNotes?: string

	    /** true if the user has flagged this person as a favorite. */
	    isFavorite?: boolean

	    /** The person's email addresses. */
	    scoredEmailAddresses?: ScoredEmailAddress[]

	    /** The person's phone numbers. */
	    phones?: Phone[]

	    /** The person's addresses. */
	    postalAddresses?: Location[]

	    /** The person's websites. */
	    websites?: Website[]

	    /** The person's job title. */
	    jobTitle?: string

	    /** The name of the person's company. */
	    companyName?: string

	    /** The phonetic Japanese name of the person's company. */
	    yomiCompany?: string

	    /** The person's department. */
	    department?: string

	    /** The location of the person's office. */
	    officeLocation?: string

	    /** The person's profession. */
	    profession?: string

	    /** The type of person. */
	    personType?: PersonType

	    /** The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain. */
	    userPrincipalName?: string

	    imAddress?: string

}

export interface Contact extends OutlookItem {

	    /** The ID of the contact's parent folder. */
	    parentFolderId?: string

	    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    birthday?: string

	    /** The name the contact is filed under. */
	    fileAs?: string

	    /** The contact's display name. */
	    displayName?: string

	    /** The contact's given name. */
	    givenName?: string

	    /** The contact's initials. */
	    initials?: string

	    /** The contact's middle name. */
	    middleName?: string

	    /** The contact's nickname. */
	    nickName?: string

	    /** The contact's surname. */
	    surname?: string

	    /** The contact's title. */
	    title?: string

	    /** The phonetic Japanese given name (first name) of the contact. */
	    yomiGivenName?: string

	    /** The phonetic Japanese surname (last name)  of the contact. */
	    yomiSurname?: string

	    /** The phonetic Japanese company name of the contact. */
	    yomiCompanyName?: string

	    /** The contact's generation. */
	    generation?: string

	    /** The contact's email addresses. */
	    emailAddresses?: EmailAddress[]

	    /** The contact's instant messaging (IM) addresses. */
	    imAddresses?: string[]

	    /** The contact’s job title. */
	    jobTitle?: string

	    /** The name of the contact's company. */
	    companyName?: string

	    /** The contact's department. */
	    department?: string

	    /** The location of the contact's office. */
	    officeLocation?: string

	    /** The contact's profession. */
	    profession?: string

	    /** The business home page of the contact. */
	    businessHomePage?: string

	    /** The name of the contact's assistant. */
	    assistantName?: string

	    /** The name of the contact's manager. */
	    manager?: string

	    /** The contact's home phone numbers. */
	    homePhones?: string[]

	    /** The contact's mobile phone number. */
	    mobilePhone?: string

	    /** The contact's business phone numbers. */
	    businessPhones?: string[]

	    /** The contact's home address. */
	    homeAddress?: PhysicalAddress

	    /** The contact's business address. */
	    businessAddress?: PhysicalAddress

	    /** Other addresses for the contact. */
	    otherAddress?: PhysicalAddress

	    /** The name of the contact's spouse. */
	    spouseName?: string

	    /** The user's notes about the contact. */
	    personalNotes?: string

	    /** The names of the contact's children. */
	    children?: string[]

	    /** The collection of open extensions defined for the contact. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

	    /** Optional contact picture. You can get or set a photo for a contact. */
	    photo?: ProfilePhoto

}

export interface ContactFolder extends Entity {

	    /** The ID of the folder's parent folder. */
	    parentFolderId?: string

	    /** The folder's display name. */
	    displayName?: string

	    /** The contacts in the folder. Navigation property. Read-only. Nullable. */
	    contacts?: Contact[]

	    /** The collection of child folders in the folder. Navigation property. Read-only. Nullable. */
	    childFolders?: ContactFolder[]

	    /** The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface InferenceClassification extends Entity {

	    /** A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable. */
	    overrides?: InferenceClassificationOverride[]

}

export interface PlannerUser extends Entity {

	    /** Read-only. Nullable. Returns the plannerPlans shared with the user. */
	    tasks?: PlannerTask[]

	    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
	    plans?: PlannerPlan[]

}

export interface GroupSettingTemplate extends DirectoryObject {

	    /** Display name of the template. */
	    displayName?: string

	    /** Description of the template. */
	    description?: string

	    /** Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template. */
	    values?: SettingTemplateValue[]

}

export interface SchemaExtension extends Entity {

	    /** Description for the schema extension. */
	    description?: string

	    /** Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from contact, device, event, group, message, organization, post, or user. */
	    targetTypes?: string[]

	    /** The collection of property names and types that make up the schema extension definition. */
	    properties?: ExtensionSchemaProperty[]

	    /** The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors. */
	    status?: string

	    /** The appId of the application that created the schema extension. Read-only. */
	    owner?: string

}

export interface Attachment extends Entity {

	    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    lastModifiedDateTime?: string

	    /** The attachment's file name. */
	    name?: string

	    /** The MIME type. */
	    contentType?: string

	    /** The length of the attachment in bytes. */
	    size?: number

	    /** true if the attachment is an inline attachment; otherwise, false. */
	    isInline?: boolean

}

export interface SingleValueLegacyExtendedProperty extends Entity {

	    value?: string

}

export interface MultiValueLegacyExtendedProperty extends Entity {

	    value?: string[]

}

export interface FileAttachment extends Attachment {

	    /** The ID of the attachment in the Exchange store. */
	    contentId?: string

	    /** The Uniform Resource Identifier (URI) that corresponds to the location of the content of the attachment. */
	    contentLocation?: string

	    /** The binary contents of the file. */
	    contentBytes?: number

}

export interface ItemAttachment extends Attachment {

	    /** The attached message or event. Navigation property. */
	    item?: OutlookItem

}

export interface EventMessage extends Message {

	    meetingMessageType?: MeetingMessageType

	    event?: Event

}

export interface ReferenceAttachment extends Attachment {

}

export interface OpenTypeExtension extends Extension {

	    extensionName?: string

}

export interface Post extends OutlookItem {

	    /** The contents of the post. This is a default property. This property can be null. */
	    body?: ItemBody

	    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    receivedDateTime?: string

	    /** Indicates whether the post has at least one attachment. This is a default property. */
	    hasAttachments?: boolean

	    /** Used in delegate access scenarios. Indicates who posted the message on behalf of another user. This is a default property. */
	    from?: Recipient

	    /** Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property. */
	    sender?: Recipient

	    /** Unique ID of the conversation thread. Read-only. */
	    conversationThreadId?: string

	    /** Conversation participants that were added to the thread as part of this post. */
	    newParticipants?: Recipient[]

	    /** Unique ID of the conversation. Read-only. */
	    conversationId?: string

	    /** The collection of open extensions defined for the post. Read-only. Nullable. */
	    extensions?: Extension[]

	    /** Read-only. */
	    inReplyTo?: Post

	    /** Read-only. Nullable. */
	    attachments?: Attachment[]

	    /** The collection of single-value extended properties defined for the post. Read-only. Nullable. */
	    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[]

	    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable. */
	    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[]

}

export interface InferenceClassificationOverride extends Entity {

	    /** Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other. */
	    classifyAs?: InferenceClassificationType

	    /** The email address information of the sender for whom the override is created. */
	    senderEmailAddress?: EmailAddress

}

export interface ColumnDefinition extends Entity {

	    boolean?: BooleanColumn

	    calculated?: CalculatedColumn

	    choice?: ChoiceColumn

	    columnGroup?: string

	    currency?: CurrencyColumn

	    dateTime?: DateTimeColumn

	    defaultValue?: DefaultColumnValue

	    description?: string

	    displayName?: string

	    enforceUniqueValues?: boolean

	    hidden?: boolean

	    indexed?: boolean

	    lookup?: LookupColumn

	    name?: string

	    number?: NumberColumn

	    personOrGroup?: PersonOrGroupColumn

	    readOnly?: boolean

	    required?: boolean

	    text?: TextColumn

}

export interface ColumnLink extends Entity {

	    name?: string

}

export interface ContentType extends Entity {

	    description?: string

	    group?: string

	    hidden?: boolean

	    inheritedFrom?: ItemReference

	    name?: string

	    order?: ContentTypeOrder

	    parentId?: string

	    readOnly?: boolean

	    sealed?: boolean

	    columnLinks?: ColumnLink[]

}

export interface DriveItem extends BaseItem {

	    /** Audio metadata, if the item is an audio file. Read-only. */
	    audio?: Audio

	    content?: any

	    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
	    cTag?: string

	    /** Information about the deleted state of the item. Read-only. */
	    deleted?: Deleted

	    /** File metadata, if the item is a file. Read-only. */
	    file?: File

	    /** File system information on client. Read-write. */
	    fileSystemInfo?: FileSystemInfo

	    /** Folder metadata, if the item is a folder. Read-only. */
	    folder?: Folder

	    /** Image metadata, if the item is an image. Read-only. */
	    image?: Image

	    /** Location metadata, if the item has location data. Read-only. */
	    location?: GeoCoordinates

	    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
	    package?: Package

	    /** Photo metadata, if the item is a photo. Read-only. */
	    photo?: Photo

	    /** Remote item data, if the item is shared from a drive other than the one being accessed. Read-only. */
	    remoteItem?: RemoteItem

	    /** If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive. */
	    root?: Root

	    /** Search metadata, if the item is from a search result. Read-only. */
	    searchResult?: SearchResult

	    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
	    shared?: Shared

	    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
	    sharepointIds?: SharepointIds

	    /** Size of the item in bytes. Read-only. */
	    size?: number

	    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
	    specialFolder?: SpecialFolder

	    /** Video metadata, if the item is a video. Read-only. */
	    video?: Video

	    /** WebDAV compatible URL for the item. */
	    webDavUrl?: string

	    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
	    children?: DriveItem[]

	    listItem?: ListItem

	    /** The set of permissions for the item. Read-only. Nullable. */
	    permissions?: Permission[]

	    /** Collection containing ThumbnailSet objects associated with the item. For more info, see getting thumbnails. Read-only. Nullable. */
	    thumbnails?: ThumbnailSet[]

	    workbook?: Workbook

}

export interface List extends BaseItem {

	    displayName?: string

	    list?: ListInfo

	    sharepointIds?: SharepointIds

	    system?: SystemFacet

	    columns?: ColumnDefinition[]

	    contentTypes?: ContentType[]

	    drive?: Drive

	    items?: ListItem[]

}

export interface ListItem extends BaseItem {

	    contentType?: ContentTypeInfo

	    sharepointIds?: SharepointIds

	    driveItem?: DriveItem

	    fields?: FieldValueSet

}

export interface Permission extends Entity {

	    /** For user type permissions, the details of the users & applications for this permission. Read-only. */
	    grantedTo?: IdentitySet

	    /** Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only. */
	    inheritedFrom?: ItemReference

	    /** Details of any associated sharing invitation for this permission. Read-only. */
	    invitation?: SharingInvitation

	    /** Provides the link details of the current permission, if it is a link type permissions. Read-only. */
	    link?: SharingLink

	    roles?: string[]

	    /** A unique token that can be used to access this shared item via the **shares** API. Read-only. */
	    shareId?: string

}

export interface ThumbnailSet extends Entity {

	    /** A 1920x1920 scaled thumbnail. */
	    large?: Thumbnail

	    /** A 176x176 scaled thumbnail. */
	    medium?: Thumbnail

	    /** A 48x48 cropped thumbnail. */
	    small?: Thumbnail

	    /** A custom thumbnail image or the original image used to generate other thumbnails. */
	    source?: Thumbnail

}

export interface Workbook extends Entity {

	    application?: WorkbookApplication

	    names?: WorkbookNamedItem[]

	    tables?: WorkbookTable[]

	    worksheets?: WorkbookWorksheet[]

	    functions?: WorkbookFunctions

}

export interface FieldValueSet extends Entity {

}

export interface SharedDriveItem extends BaseItem {

	    /** Information about the owner of the shared item being referenced. */
	    owner?: IdentitySet

	    /** A driveItem for the resource that was shared.  This is identical to the root property. */
	    driveItem?: DriveItem

	    /** A collection of shared driveItem resources. This collection cannot be enumerated, but items can be accessed by their unique ID. */
	    items?: DriveItem[]

	    list?: List

	    listItem?: ListItem

	    /** The top level shared driveItem. If a single file is shared, this item is the file. If a folder is shared, this item will be the folder. You can use the item's facets to determine which case applies. */
	    root?: DriveItem

	    /** A site resource that contains the item that was shared. */
	    site?: Site

}

export interface WorkbookApplication extends Entity {

	    calculationMode?: string

}

export interface WorkbookNamedItem extends Entity {

	    comment?: string

	    name?: string

	    scope?: string

	    type?: string

	    value?: any

	    visible?: boolean

	    worksheet?: WorkbookWorksheet

}

export interface WorkbookTable extends Entity {

	    highlightFirstColumn?: boolean

	    highlightLastColumn?: boolean

	    name?: string

	    showBandedColumns?: boolean

	    showBandedRows?: boolean

	    showFilterButton?: boolean

	    showHeaders?: boolean

	    showTotals?: boolean

	    style?: string

	    columns?: WorkbookTableColumn[]

	    rows?: WorkbookTableRow[]

	    sort?: WorkbookTableSort

	    worksheet?: WorkbookWorksheet

}

export interface WorkbookWorksheet extends Entity {

	    name?: string

	    position?: number

	    visibility?: string

	    charts?: WorkbookChart[]

	    names?: WorkbookNamedItem[]

	    pivotTables?: WorkbookPivotTable[]

	    protection?: WorkbookWorksheetProtection

	    tables?: WorkbookTable[]

}

export interface WorkbookFunctions extends Entity {

}

export interface WorkbookChart extends Entity {

	    height?: number

	    left?: number

	    name?: string

	    top?: number

	    width?: number

	    axes?: WorkbookChartAxes

	    dataLabels?: WorkbookChartDataLabels

	    format?: WorkbookChartAreaFormat

	    legend?: WorkbookChartLegend

	    series?: WorkbookChartSeries[]

	    title?: WorkbookChartTitle

	    worksheet?: WorkbookWorksheet

}

export interface WorkbookChartAxes extends Entity {

	    categoryAxis?: WorkbookChartAxis

	    seriesAxis?: WorkbookChartAxis

	    valueAxis?: WorkbookChartAxis

}

export interface WorkbookChartDataLabels extends Entity {

	    position?: string

	    separator?: string

	    showBubbleSize?: boolean

	    showCategoryName?: boolean

	    showLegendKey?: boolean

	    showPercentage?: boolean

	    showSeriesName?: boolean

	    showValue?: boolean

	    format?: WorkbookChartDataLabelFormat

}

export interface WorkbookChartAreaFormat extends Entity {

	    fill?: WorkbookChartFill

	    font?: WorkbookChartFont

}

export interface WorkbookChartLegend extends Entity {

	    overlay?: boolean

	    position?: string

	    visible?: boolean

	    format?: WorkbookChartLegendFormat

}

export interface WorkbookChartSeries extends Entity {

	    name?: string

	    format?: WorkbookChartSeriesFormat

	    points?: WorkbookChartPoint[]

}

export interface WorkbookChartTitle extends Entity {

	    overlay?: boolean

	    text?: string

	    visible?: boolean

	    format?: WorkbookChartTitleFormat

}

export interface WorkbookChartFill extends Entity {

}

export interface WorkbookChartFont extends Entity {

	    bold?: boolean

	    color?: string

	    italic?: boolean

	    name?: string

	    size?: number

	    underline?: string

}

export interface WorkbookChartAxis extends Entity {

	    majorUnit?: any

	    maximum?: any

	    minimum?: any

	    minorUnit?: any

	    format?: WorkbookChartAxisFormat

	    majorGridlines?: WorkbookChartGridlines

	    minorGridlines?: WorkbookChartGridlines

	    title?: WorkbookChartAxisTitle

}

export interface WorkbookChartAxisFormat extends Entity {

	    font?: WorkbookChartFont

	    line?: WorkbookChartLineFormat

}

export interface WorkbookChartGridlines extends Entity {

	    visible?: boolean

	    format?: WorkbookChartGridlinesFormat

}

export interface WorkbookChartAxisTitle extends Entity {

	    text?: string

	    visible?: boolean

	    format?: WorkbookChartAxisTitleFormat

}

export interface WorkbookChartLineFormat extends Entity {

	    color?: string

}

export interface WorkbookChartAxisTitleFormat extends Entity {

	    font?: WorkbookChartFont

}

export interface WorkbookChartDataLabelFormat extends Entity {

	    fill?: WorkbookChartFill

	    font?: WorkbookChartFont

}

export interface WorkbookChartGridlinesFormat extends Entity {

	    line?: WorkbookChartLineFormat

}

export interface WorkbookChartLegendFormat extends Entity {

	    fill?: WorkbookChartFill

	    font?: WorkbookChartFont

}

export interface WorkbookChartPoint extends Entity {

	    value?: any

	    format?: WorkbookChartPointFormat

}

export interface WorkbookChartPointFormat extends Entity {

	    fill?: WorkbookChartFill

}

export interface WorkbookChartSeriesFormat extends Entity {

	    fill?: WorkbookChartFill

	    line?: WorkbookChartLineFormat

}

export interface WorkbookChartTitleFormat extends Entity {

	    fill?: WorkbookChartFill

	    font?: WorkbookChartFont

}

export interface WorkbookFilter extends Entity {

	    criteria?: WorkbookFilterCriteria

}

export interface WorkbookFormatProtection extends Entity {

	    formulaHidden?: boolean

	    locked?: boolean

}

export interface WorkbookFunctionResult extends Entity {

	    error?: string

	    value?: any

}

export interface WorkbookPivotTable extends Entity {

	    /** Name of the PivotTable. */
	    name?: string

	    /** The worksheet containing the current PivotTable. Read-only. */
	    worksheet?: WorkbookWorksheet

}

export interface WorkbookRange extends Entity {

	    address?: string

	    addressLocal?: string

	    cellCount?: number

	    columnCount?: number

	    columnHidden?: boolean

	    columnIndex?: number

	    formulas?: any

	    formulasLocal?: any

	    formulasR1C1?: any

	    hidden?: boolean

	    numberFormat?: any

	    rowCount?: number

	    rowHidden?: boolean

	    rowIndex?: number

	    text?: any

	    valueTypes?: any

	    values?: any

	    format?: WorkbookRangeFormat

	    sort?: WorkbookRangeSort

	    worksheet?: WorkbookWorksheet

}

export interface WorkbookRangeFormat extends Entity {

	    columnWidth?: number

	    horizontalAlignment?: string

	    rowHeight?: number

	    verticalAlignment?: string

	    wrapText?: boolean

	    borders?: WorkbookRangeBorder[]

	    fill?: WorkbookRangeFill

	    font?: WorkbookRangeFont

	    protection?: WorkbookFormatProtection

}

export interface WorkbookRangeSort extends Entity {

}

export interface WorkbookRangeBorder extends Entity {

	    color?: string

	    sideIndex?: string

	    style?: string

	    weight?: string

}

export interface WorkbookRangeFill extends Entity {

	    color?: string

}

export interface WorkbookRangeFont extends Entity {

	    bold?: boolean

	    color?: string

	    italic?: boolean

	    name?: string

	    size?: number

	    underline?: string

}

export interface WorkbookRangeView extends Entity {

	    cellAddresses?: any

	    /** Returns the number of visible columns. Read-only. */
	    columnCount?: number

	    /** Represents the formula in A1-style notation. */
	    formulas?: any

	    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German. */
	    formulasLocal?: any

	    /** Represents the formula in R1C1-style notation. */
	    formulasR1C1?: any

	    /** Index of the range. */
	    index?: number

	    /** Represents Excel's number format code for the given cell. Read-only. */
	    numberFormat?: any

	    /** Returns the number of visible rows. Read-only. */
	    rowCount?: number

	    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. */
	    text?: any

	    /** Represents the type of data of each cell. Read-only. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. */
	    valueTypes?: any

	    /** Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
	    values?: any

	    /** Represents a collection of range views associated with the range. Read-only. Read-only. */
	    rows?: WorkbookRangeView[]

}

export interface WorkbookTableColumn extends Entity {

	    index?: number

	    name?: string

	    values?: any

	    filter?: WorkbookFilter

}

export interface WorkbookTableRow extends Entity {

	    index?: number

	    values?: any

}

export interface WorkbookTableSort extends Entity {

	    fields?: WorkbookSortField[]

	    matchCase?: boolean

	    method?: string

}

export interface WorkbookWorksheetProtection extends Entity {

	    options?: WorkbookWorksheetProtectionOptions

	    protected?: boolean

}

export interface Subscription extends Entity {

	    /** Specifies the resource that will be monitored for changes. Do not include the base URL ("https://graph.microsoft.com/v1.0/"). */
	    resource?: string

	    /** Indicates the type of change in the subscribed resource that will raise a notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. */
	    changeType?: string

	    /** Specifies the value of the clientState property sent by the service in each notification. The maximum length is 128 characters. The client can check that the notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each notification. */
	    clientState?: string

	    /** The URL of the endpoint that will receive the notifications. This URL has to make use of the HTTPS protocol. */
	    notificationUrl?: string

	    /** Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to.  See the table below for maximum values. */
	    expirationDateTime?: string

}

export interface Invitation extends Entity {

	    invitedUserDisplayName?: string

	    invitedUserType?: string

	    invitedUserEmailAddress?: string

	    invitedUserMessageInfo?: InvitedUserMessageInfo

	    sendInvitationMessage?: boolean

	    inviteRedirectUrl?: string

	    inviteRedeemUrl?: string

	    status?: string

	    invitedUser?: User

}

export interface PlannerTask extends Entity {

	    /** Identity of the user that created the task. */
	    createdBy?: IdentitySet

	    /** Plan ID to which the task belongs. */
	    planId?: string

	    /** Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case sensitive. Format validation is done on the service. */
	    bucketId?: string

	    /** Title of the task. */
	    title?: string

	    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
	    orderHint?: string

	    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
	    assigneePriority?: string

	    /** Percentage of task completion. When set to 100, the task is considered completed. */
	    percentComplete?: number

	    /** Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    startDateTime?: string

	    /** Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    createdDateTime?: string

	    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    dueDateTime?: string

	    /** Read-only. Value is true if the details object of the task has a non-empty description and false otherwise. */
	    hasDescription?: boolean

	    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. */
	    previewType?: PlannerPreviewType

	    /** Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    completedDateTime?: string

	    /** Identity of the user that completed the task. */
	    completedBy?: IdentitySet

	    /** Number of external references that exist on the task. */
	    referenceCount?: number

	    /** Number of checklist items that are present on the task. */
	    checklistItemCount?: number

	    /** Number of checklist items with value set to 'false', representing incomplete items. */
	    activeChecklistItemCount?: number

	    /** The categories to which the task has been applied. See applied Categories for possible values. */
	    appliedCategories?: PlannerAppliedCategories

	    /** The set of assignees the task is assigned to. */
	    assignments?: PlannerAssignments

	    /** Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group. */
	    conversationThreadId?: string

	    /** Read-only. Nullable. Additional details about the task. */
	    details?: PlannerTaskDetails

	    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo. */
	    assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat

	    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress. */
	    progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat

	    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket. */
	    bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat

}

export interface PlannerPlan extends Entity {

	    /** Read-only. The user who created the plan. */
	    createdBy?: IdentitySet

	    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    createdDateTime?: string

	    /** ID of the Group that owns the plan. A valid group must exist before this field can be set. Once set, this can only be updated by the owner. */
	    owner?: string

	    /** Required. Title of the plan. */
	    title?: string

	    /** Read-only. Nullable. Collection of tasks in the plan. */
	    tasks?: PlannerTask[]

	    /** Read-only. Nullable. Collection of buckets in the plan. */
	    buckets?: PlannerBucket[]

	    /** Read-only. Nullable. Additional details about the plan. */
	    details?: PlannerPlanDetails

}

export interface Planner extends Entity {

	    /** Read-only. Nullable. Returns a collection of the specified tasks */
	    tasks?: PlannerTask[]

	    /** Read-only. Nullable. Returns a collection of the specified plans */
	    plans?: PlannerPlan[]

	    /** Read-only. Nullable. Returns a collection of the specified buckets */
	    buckets?: PlannerBucket[]

}

export interface PlannerBucket extends Entity {

	    /** Name of the bucket. */
	    name?: string

	    /** Plan ID to which the bucket belongs. */
	    planId?: string

	    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
	    orderHint?: string

	    /** Read-only. Nullable. The collection of tasks in the bucket. */
	    tasks?: PlannerTask[]

}

export interface PlannerTaskDetails extends Entity {

	    /** Description of the task */
	    description?: string

	    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task. */
	    previewType?: PlannerPreviewType

	    /** The collection of references on the task. */
	    references?: PlannerExternalReferences

	    /** The collection of checklist items on the task. */
	    checklist?: PlannerChecklistItems

}

export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {

	    /** Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here. */
	    unassignedOrderHint?: string

	    /** Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here. */
	    orderHintsByAssignee?: PlannerOrderHintsByAssignee

}

export interface PlannerProgressTaskBoardTaskFormat extends Entity {

	    /** Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here. */
	    orderHint?: string

}

export interface PlannerBucketTaskBoardTaskFormat extends Entity {

	    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
	    orderHint?: string

}

export interface PlannerPlanDetails extends Entity {

	    /** Set of user ids that this plan is shared with. If you are leveraging Office 365 Groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group. */
	    sharedWith?: PlannerUserIds

	    /** An object that specifies the descriptions of the six categories that can be associated with tasks in the plan */
	    categoryDescriptions?: PlannerCategoryDescriptions

}

export interface OnenoteEntityBaseModel extends Entity {

	    self?: string

}

export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel {

	    createdDateTime?: string

}

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {

	    displayName?: string

	    createdBy?: IdentitySet

	    lastModifiedBy?: IdentitySet

	    lastModifiedDateTime?: string

}

export interface Notebook extends OnenoteEntityHierarchyModel {

	    /** Indicates whether this is the user's default notebook. Read-only. */
	    isDefault?: boolean

	    /** Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only. */
	    userRole?: OnenoteUserRole

	    /** Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only. */
	    isShared?: boolean

	    /** The URL for the sections navigation property, which returns all the sections in the notebook. Read-only. */
	    sectionsUrl?: string

	    /** The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only. */
	    sectionGroupsUrl?: string

	    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote Online. */
	    links?: NotebookLinks

	    /** The sections in the notebook. Read-only. Nullable. */
	    sections?: OnenoteSection[]

	    /** The section groups in the notebook. Read-only. Nullable. */
	    sectionGroups?: SectionGroup[]

}

export interface OnenoteSection extends OnenoteEntityHierarchyModel {

	    /** Indicates whether this is the user's default section. Read-only. */
	    isDefault?: boolean

	    /** Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote Online. */
	    links?: SectionLinks

	    /** The pages endpoint where you can get details for all the pages in the section. Read-only. */
	    pagesUrl?: string

	    /** The notebook that contains the section.  Read-only. */
	    parentNotebook?: Notebook

	    /** The section group that contains the section.  Read-only. */
	    parentSectionGroup?: SectionGroup

	    /** The collection of pages in the section.  Read-only. Nullable. */
	    pages?: OnenotePage[]

}

export interface SectionGroup extends OnenoteEntityHierarchyModel {

	    sectionsUrl?: string

	    sectionGroupsUrl?: string

	    parentNotebook?: Notebook

	    parentSectionGroup?: SectionGroup

	    sections?: OnenoteSection[]

	    sectionGroups?: SectionGroup[]

}

export interface OnenotePage extends OnenoteEntitySchemaObjectModel {

	    /** The title of the page. */
	    title?: string

	    /** The unique identifier of the application that created the page. Read-only. */
	    createdByAppId?: string

	    /** Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote Online. Read-only. */
	    links?: PageLinks

	    /** The URL for the page's HTML content.  Read-only. */
	    contentUrl?: string

	    /** The page's HTML content. */
	    content?: any

	    /** The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only. */
	    lastModifiedDateTime?: string

	    /** The indentation level of the page. Read-only. */
	    level?: number

	    /** The order of the page within its parent section. Read-only. */
	    order?: number

	    userTags?: string[]

	    /** The section that contains the page. Read-only. */
	    parentSection?: OnenoteSection

	    /** The notebook that contains the page.  Read-only. */
	    parentNotebook?: Notebook

}

export interface OnenoteResource extends OnenoteEntityBaseModel {

	    content?: any

	    contentUrl?: string

}

export interface Operation extends Entity {

	    status?: OperationStatus

	    createdDateTime?: string

	    lastActionDateTime?: string

}

export interface OnenoteOperation extends Operation {

	    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
	    resourceLocation?: string

	    /** The resource id. */
	    resourceId?: string

	    /** The error returned by the operation. */
	    error?: OnenoteOperationError

	    /** The operation percent complete if the operation is still in running status */
	    percentComplete?: string

}
export interface AlternativeSecurityId {

	    type?: number

	    identityProvider?: string

	    key?: number

}
export interface DomainState {

	    /** Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed. */
	    status?: string

	    /** Type of asynchronous operation. The values can be ForceDelete or Verification */
	    operation?: string

	    /** Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes. */
	    lastActionDateTime?: string

}
export interface ServicePlanInfo {

	    /** The unique identifier of the service plan. */
	    servicePlanId?: string

	    /** The name of the service plan. */
	    servicePlanName?: string

	    /** The provisioning status of the service plan. Possible values:"Success" - Service is fully provisioned."Disabled" - Service has been disabled."PendingInput" - Service is not yet provisioned; awaiting service confirmation."PendingActivation" - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)"PendingProvisioning" - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet. */
	    provisioningStatus?: string

	    /** The object the service plan can be assigned to. Possible values:"User" - service plan can be assigned to individual users."Company" - service plan can be assigned to the entire tenant. */
	    appliesTo?: string

}
export interface LicenseUnitsDetail {

	    /** The number of units that are enabled. */
	    enabled?: number

	    /** The number of units that are suspended. */
	    suspended?: number

	    /** The number of units that are in warning status. */
	    warning?: number

}
export interface AssignedPlan {

	    /** The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    assignedDateTime?: string

	    /** For example, “Enabled”. */
	    capabilityStatus?: string

	    /** The name of the service; for example, “Exchange”. */
	    service?: string

	    /** A GUID that identifies the service plan. */
	    servicePlanId?: string

}
export interface ProvisionedPlan {

	    capabilityStatus?: string

	    provisioningStatus?: string

	    service?: string

}
export interface VerifiedDomain {

	    capabilities?: string

	    isDefault?: boolean

	    isInitial?: boolean

	    name?: string

	    type?: string

}
export interface AssignedLicense {

	    /** A collection of the unique identifiers for plans that have been disabled. */
	    disabledPlans?: string[]

	    /** The unique identifier for the SKU. */
	    skuId?: string

}
export interface PasswordProfile {

	    password?: string

	    forceChangePasswordNextSignIn?: boolean

}
export interface MailboxSettings {

	    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user. */
	    automaticRepliesSetting?: AutomaticRepliesSetting

	    archiveFolder?: string

	    /** The default time zone for the user's mailbox. */
	    timeZone?: string

	    /** The locale information for the user, including the preferred language and country/region. */
	    language?: LocaleInfo

}
export interface AutomaticRepliesSetting {

	    /** Configurations status for automatic replies. Possible values are: disabled, alwaysEnabled, scheduled. */
	    status?: AutomaticRepliesStatus

	    /** The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. Possible values are: none, contactsOnly, all. */
	    externalAudience?: ExternalAudienceScope

	    /** The date and time that automatic replies are set to begin, if Status is set to Scheduled. */
	    scheduledStartDateTime?: DateTimeTimeZone

	    /** The date and time that automatic replies are set to end, if Status is set to Scheduled. */
	    scheduledEndDateTime?: DateTimeTimeZone

	    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled. */
	    internalReplyMessage?: string

	    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled. */
	    externalReplyMessage?: string

}
export interface DateTimeTimeZone {

	    dateTime?: string

	    timeZone?: string

}
export interface LocaleInfo {

	    /** A locale representation for the user, which includes the user's preferred language and country/region. For example, "en-us". The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows 2-letter codes as defined in ISO 3166-1 alpha-2. */
	    locale?: string

	    /** A name representing the user's locale in natural language, for example, "English (United States)". */
	    displayName?: string

}
export interface SettingValue {

	    /** Name of the setting (as defined by the groupSettingTemplate). */
	    name?: string

	    /** Value of the setting. */
	    value?: string

}
export interface SettingTemplateValue {

	    /** Name of the setting. */
	    name?: string

	    /** Type of the setting. */
	    type?: string

	    /** Default value for the setting. */
	    defaultValue?: string

	    /** Description of the setting. */
	    description?: string

}
export interface ComplexExtensionValue {

}
export interface ExtensionSchemaProperty {

	    /** The name of the strongly-typed property defined as part of a schema extension. */
	    name?: string

	    /** The type of the property that is defined as part of a schema extension.  Allowed values are Binary, Boolean, DateTime, Integer or String.  See the table below for more details. */
	    type?: string

}
export interface Recipient {

	    /** The recipient's email address. */
	    emailAddress?: EmailAddress

}
export interface EmailAddress {

	    /** The display name of the person or entity. */
	    name?: string

	    /** The email address of the person or entity. */
	    address?: string

}
export interface AttendeeBase extends Recipient {

	    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
	    type?: AttendeeType

}
export interface MeetingTimeSuggestionsResult {

	    /** An array of meeting suggestions. */
	    meetingTimeSuggestions?: MeetingTimeSuggestion[]

	    /** A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions. */
	    emptySuggestionsReason?: string

}
export interface MeetingTimeSuggestion {

	    /** A time period suggested for the meeting. */
	    meetingTimeSlot?: TimeSlot

	    /** A percentage that represents the likelhood of all the attendees attending. */
	    confidence?: number

	    /** Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
	    organizerAvailability?: FreeBusyStatus

	    /** An array that shows the availability status of each attendee for this meeting suggestion. */
	    attendeeAvailability?: AttendeeAvailability[]

	    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion. */
	    locations?: Location[]

	    /** Reason for suggesting the meeting time. */
	    suggestionReason?: string

}
export interface TimeSlot {

	    /** The time the period ends. */
	    start?: DateTimeTimeZone

	    /** The time a period begins. */
	    end?: DateTimeTimeZone

}
export interface AttendeeAvailability {

	    /** The type of attendee - whether it's a person or a resource, and whether required or optional if it's a person. */
	    attendee?: AttendeeBase

	    /** The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
	    availability?: FreeBusyStatus

}
export interface Location {

	    /** The name associated with the location. */
	    displayName?: string

	    /** Optional email address of the location. */
	    locationEmailAddress?: string

	    /** The street address of the location. */
	    address?: PhysicalAddress

}
export interface PhysicalAddress {

	    /** The street. */
	    street?: string

	    /** The city. */
	    city?: string

	    /** The state. */
	    state?: string

	    /** The country or region. It's a free-format string value, for example, "United States". */
	    countryOrRegion?: string

	    /** The postal code. */
	    postalCode?: string

}
export interface LocationConstraint {

	    isRequired?: boolean

	    suggestLocation?: boolean

	    locations?: LocationConstraintItem[]

}
export interface LocationConstraintItem extends Location {

	    /** If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without checking if it's free. Default is true. */
	    resolveAvailability?: boolean

}
export interface TimeConstraint {

	    activityDomain?: ActivityDomain

	    timeslots?: TimeSlot[]

}
export interface Reminder {

	    /** The unique ID of the event. Read only. */
	    eventId?: string

	    /** The date, time, and time zone that the event starts. */
	    eventStartTime?: DateTimeTimeZone

	    /** The date, time and time zone that the event ends. */
	    eventEndTime?: DateTimeTimeZone

	    /** Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. */
	    changeKey?: string

	    /** The text of the event's subject line. */
	    eventSubject?: string

	    /** The location of the event. */
	    eventLocation?: Location

	    /** The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame. */
	    eventWebLink?: string

	    /** The date, time, and time zone that the reminder is set to occur. */
	    reminderFireTime?: DateTimeTimeZone

}
export interface ItemBody {

	    /** The type of the content. Possible values are Text and HTML. */
	    contentType?: BodyType

	    /** The content of the item. */
	    content?: string

}
export interface ResponseStatus {

	    /** The response type: None = 0, Organizer = 1, TentativelyAccepted = 2, Accepted = 3, Declined = 4, NotResponded = 5. Possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded. */
	    response?: ResponseType

	    /** The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    time?: string

}
export interface PatternedRecurrence {

	    pattern?: RecurrencePattern

	    range?: RecurrenceRange

}
export interface RecurrencePattern {

	    type?: RecurrencePatternType

	    interval?: number

	    month?: number

	    dayOfMonth?: number

	    daysOfWeek?: DayOfWeek[]

	    firstDayOfWeek?: DayOfWeek

	    index?: WeekIndex

}
export interface RecurrenceRange {

	    type?: RecurrenceRangeType

	    startDate?: string

	    endDate?: string

	    recurrenceTimeZone?: string

	    numberOfOccurrences?: number

}
export interface Attendee extends AttendeeBase {

	    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent. */
	    status?: ResponseStatus

}
export interface ScoredEmailAddress {

	    /** The email address. */
	    address?: string

	    /** The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships. */
	    relevanceScore?: number

}
export interface Phone {

	    /** The type of phone number. Possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio. */
	    type?: PhoneType

	    /** The phone number. */
	    number?: string

	    region?: string

	    language?: string

}
export interface Website {

	    /** Possible values are: other, home, work, blog, profile. */
	    type?: WebsiteType

	    /** The URL of the website. */
	    address?: string

	    /** The display name of the web site. */
	    displayName?: string

}
export interface PersonType {

	    class?: string

	    subclass?: string

}
export interface IdentitySet {

	    /** Optional. The application associated with this action. */
	    application?: Identity

	    /** Optional. The device associated with this action. */
	    device?: Identity

	    /** Optional. The user associated with this action. */
	    user?: Identity

}
export interface Identity {

	    /** The identity's display name. Note that this may not always be available or up to date. For example, if a user changes their display name, the API may show the new value in a future response, but the items associated with the user won't show up as having changed when using delta */
	    displayName?: string

	    /** Unique identifier for the identity. */
	    id?: string

}
export interface ItemReference {

	    /** Unique identifier of the drive instance that contains the item. Read-only. */
	    driveId?: string

	    driveType?: string

	    /** Unique identifier of the item in the drive. Read-only. */
	    id?: string

	    /** The name of the item being referenced. Read-only. */
	    name?: string

	    /** Path that can be used to navigate to the item. Read-only. */
	    path?: string

	    /** A unique identifier for a shared resource that can be accessed via the Shares API. */
	    shareId?: string

	    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
	    sharepointIds?: SharepointIds

}
export interface SharepointIds {

	    /** The unique identifier (guid) for the item's list in SharePoint. */
	    listId?: string

	    /** An integer identifier for the item within the containing list. */
	    listItemId?: string

	    /** The unique identifier (guid) for the item within OneDrive for Busienss or a SharePoint site. */
	    listItemUniqueId?: string

	    /** The unique identifier (guid) for the item's site collection (SPSite). */
	    siteId?: string

	    /** The SharePoint URL for the site that contains the item. */
	    siteUrl?: string

	    /** The unique identifier (guid) for the item's site (SPWeb). */
	    webId?: string

}
export interface BooleanColumn {

}
export interface CalculatedColumn {

	    format?: string

	    formula?: string

	    outputType?: string

}
export interface ChoiceColumn {

	    allowTextEntry?: boolean

	    choices?: string[]

	    displayAs?: string

}
export interface CurrencyColumn {

	    locale?: string

}
export interface DateTimeColumn {

	    displayAs?: string

	    format?: string

}
export interface DefaultColumnValue {

	    formula?: string

	    value?: string

}
export interface LookupColumn {

	    allowMultipleValues?: boolean

	    allowUnlimitedLength?: boolean

	    columnName?: string

	    listId?: string

	    primaryLookupColumnId?: string

}
export interface NumberColumn {

	    decimalPlaces?: string

	    displayAs?: string

	    maximum?: number

	    minimum?: number

}
export interface PersonOrGroupColumn {

	    allowMultipleSelection?: boolean

	    displayAs?: string

	    chooseFromType?: string

}
export interface TextColumn {

	    allowMultipleLines?: boolean

	    appendChangesToExistingText?: boolean

	    linesForEditing?: number

	    maxLength?: number

	    textType?: string

}
export interface ContentTypeOrder {

	    default?: boolean

	    position?: number

}
export interface Quota {

	    /** Total space consumed by files in the recycle bin, in bytes. Read-only. */
	    deleted?: number

	    /** Total space remaining before reaching the quota limit, in bytes. Read-only. */
	    remaining?: number

	    /** Enumeration value that indicates the state of the storage space. Read-only. */
	    state?: string

	    /** Total allowed storage space, in bytes. Read-only. */
	    total?: number

	    /** Total space used, in bytes. Read-only. */
	    used?: number

}
export interface SystemFacet {

}
export interface Audio {

	    /** The title of the album for this audio file. */
	    album?: string

	    /** The artist named on the album for the audio file. */
	    albumArtist?: string

	    /** The performing artist for the audio file. */
	    artist?: string

	    /** Bitrate expressed in kbps. */
	    bitrate?: number

	    /** The name of the composer of the audio file. */
	    composers?: string

	    /** Copyright information for the audio file. */
	    copyright?: string

	    /** The number of the disc this audio file came from. */
	    disc?: number

	    /** The total number of discs in this album. */
	    discCount?: number

	    /** Duration of the audio file, expressed in milliseconds */
	    duration?: number

	    /** The genre of this audio file. */
	    genre?: string

	    /** Indicates if the file is protected with digital rights management. */
	    hasDrm?: boolean

	    /** Indicates if the file is encoded with a variable bitrate. */
	    isVariableBitrate?: boolean

	    /** The title of the audio file. */
	    title?: string

	    /** The number of the track on the original disc for this audio file. */
	    track?: number

	    /** The total number of tracks on the original disc for this audio file. */
	    trackCount?: number

	    /** The year the audio file was recorded. */
	    year?: number

}
export interface Deleted {

	    /** Represents the state of the deleted item. */
	    state?: string

}
export interface File {

	    /** Hashes of the file's binary content, if available. Read-only. */
	    hashes?: Hashes

	    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only. */
	    mimeType?: string

	    processingMetadata?: boolean

}
export interface Hashes {

	    /** The CRC32 value of the file (if available). Read-only. */
	    crc32Hash?: string

	    /** A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only. */
	    quickXorHash?: string

	    /** SHA1 hash for the contents of the file (if available). Read-only. */
	    sha1Hash?: string

}
export interface FileSystemInfo {

	    /** The UTC date and time the file was created on a client. */
	    createdDateTime?: string

	    lastAccessedDateTime?: string

	    /** The UTC date and time the file was last modified on a client. */
	    lastModifiedDateTime?: string

}
export interface Folder {

	    /** Number of children contained immediately within this container. */
	    childCount?: number

	    view?: FolderView

}
export interface FolderView {

	    sortBy?: string

	    sortOrder?: string

	    viewType?: string

}
export interface Image {

	    /** Optional. Height of the image, in pixels. Read-only. */
	    height?: number

	    /** Optional. Width of the image, in pixels. Read-only. */
	    width?: number

}
export interface GeoCoordinates {

	    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only. */
	    altitude?: number

	    /** Optional. The latitude, in decimal, for the item. Read-only. */
	    latitude?: number

	    /** Optional. The longitude, in decimal, for the item. Read-only. */
	    longitude?: number

}
export interface Package {

	    type?: string

}
export interface Photo {

	    /** Camera manufacturer. Read-only. */
	    cameraMake?: string

	    /** Camera model. Read-only. */
	    cameraModel?: string

	    /** The denominator for the exposure time fraction from the camera. Read-only. */
	    exposureDenominator?: number

	    /** The numerator for the exposure time fraction from the camera. Read-only. */
	    exposureNumerator?: number

	    /** The F-stop value from the camera. Read-only. */
	    fNumber?: number

	    /** The focal length from the camera. Read-only. */
	    focalLength?: number

	    /** The ISO value from the camera. Read-only. */
	    iso?: number

	    /** Represents the date and time the photo was taken. Read-only. */
	    takenDateTime?: string

}
export interface RemoteItem {

	    /** Identity of the user, device, and application which created the item. Read-only. */
	    createdBy?: IdentitySet

	    /** Date and time of item creation. Read-only. */
	    createdDateTime?: string

	    /** Indicates that the remote item is a file. Read-only. */
	    file?: File

	    /** Information about the remote item from the local file system. Read-only. */
	    fileSystemInfo?: FileSystemInfo

	    /** Indicates that the remote item is a folder. Read-only. */
	    folder?: Folder

	    /** Unique identifier for the remote item in its drive. Read-only. */
	    id?: string

	    /** Identity of the user, device, and application which last modified the item. Read-only. */
	    lastModifiedBy?: IdentitySet

	    /** Date and time the item was last modified. Read-only. */
	    lastModifiedDateTime?: string

	    /** Optional. Filename of the remote item. Read-only. */
	    name?: string

	    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
	    package?: Package

	    /** Properties of the parent of the remote item. Read-only. */
	    parentReference?: ItemReference

	    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
	    shared?: Shared

	    /** Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only. */
	    sharepointIds?: SharepointIds

	    /** Size of the remote item. Read-only. */
	    size?: number

	    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
	    specialFolder?: SpecialFolder

	    /** DAV compatible URL for the item. */
	    webDavUrl?: string

	    /** URL that displays the resource in the browser. Read-only. */
	    webUrl?: string

}
export interface Shared {

	    /** The identity of the owner of the shared item. Read-only. */
	    owner?: IdentitySet

	    /** Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only. */
	    scope?: string

	    /** The identity of the user who shared the item. Read-only. */
	    sharedBy?: IdentitySet

	    /** The UTC date and time when the item was shared. Read-only. */
	    sharedDateTime?: string

}
export interface SpecialFolder {

	    /** The unique identifier for this item in the /drive/special collection */
	    name?: string

}
export interface Root {

}
export interface SearchResult {

	    /** A callback URL that can be used to record telemetry information. The application should issue a GET on this URL if the user interacts with this item to improve the quality of results. */
	    onClickTelemetryUrl?: string

}
export interface Video {

	    audioBitsPerSample?: number

	    audioChannels?: number

	    audioFormat?: string

	    audioSamplesPerSecond?: number

	    /** Bit rate of the video in bits per second. */
	    bitrate?: number

	    /** Duration of the file in milliseconds. */
	    duration?: number

	    fourCC?: string

	    frameRate?: number

	    /** Height of the video, in pixels. */
	    height?: number

	    /** Width of the video, in pixels. */
	    width?: number

}
export interface ListInfo {

	    contentTypesEnabled?: boolean

	    hidden?: boolean

	    template?: string

}
export interface ContentTypeInfo {

	    id?: string

}
export interface SharingInvitation {

	    /** The email address provided for the recipient of the sharing invitation. Read-only. */
	    email?: string

	    /** Provides information about who sent the invitation that created this permission, if that information is available. Read-only. */
	    invitedBy?: IdentitySet

	    redeemedBy?: string

	    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only. */
	    signInRequired?: boolean

}
export interface SharingLink {

	    /** The app the link is associated with. */
	    application?: Identity

	    /** The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant. */
	    scope?: string

	    /** The type of the link created. */
	    type?: string

	    /** A URL that opens the item in the browser on the OneDrive website. */
	    webUrl?: string

}
export interface SiteCollection {

	    /** The hostname for the site collection. Read-only. */
	    hostname?: string

}
export interface Thumbnail {

	    content?: any

	    /** The height of the thumbnail, in pixels. */
	    height?: number

	    /** The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested. */
	    sourceItemId?: string

	    /** The URL used to fetch the thumbnail content. */
	    url?: string

	    /** The width of the thumbnail, in pixels. */
	    width?: number

}
export interface DriveItemUploadableProperties {

	    description?: string

	    fileSystemInfo?: FileSystemInfo

	    name?: string

}
export interface DriveRecipient {

	    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups). */
	    alias?: string

	    /** The email address for the recipient, if the recipient has an associated email address. */
	    email?: string

	    /** The unique identifier for the recipient in the directory. */
	    objectId?: string

}
export interface UploadSession {

	    /** The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached. */
	    expirationDateTime?: string

	    /** A collection of byte ranges that the server is missing for the file. These ranges are zero indexed and of the format "start-end" (e.g. "0-26" to indicate the first 27 bytes of the file). */
	    nextExpectedRanges?: string[]

	    /** The URL endpoint that accepts PUT requests for byte ranges of the file. */
	    uploadUrl?: string

}
export interface WorkbookSessionInfo {

	    id?: string

	    persistChanges?: boolean

}
export interface WorkbookFilterCriteria {

	    color?: string

	    criterion1?: string

	    criterion2?: string

	    dynamicCriteria?: string

	    filterOn?: string

	    icon?: WorkbookIcon

	    operator?: string

	    values?: any

}
export interface WorkbookIcon {

	    index?: number

	    set?: string

}
export interface WorkbookSortField {

	    ascending?: boolean

	    color?: string

	    dataOption?: string

	    icon?: WorkbookIcon

	    key?: number

	    sortOn?: string

}
export interface WorkbookWorksheetProtectionOptions {

	    allowAutoFilter?: boolean

	    allowDeleteColumns?: boolean

	    allowDeleteRows?: boolean

	    allowFormatCells?: boolean

	    allowFormatColumns?: boolean

	    allowFormatRows?: boolean

	    allowInsertColumns?: boolean

	    allowInsertHyperlinks?: boolean

	    allowInsertRows?: boolean

	    allowPivotTables?: boolean

	    allowSort?: boolean

}
export interface WorkbookFilterDatetime {

	    date?: string

	    specificity?: string

}
export interface WorkbookRangeReference {

	    address?: string

}
export interface InvitedUserMessageInfo {

	    /** Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported. */
	    ccRecipients?: Recipient[]

	    /** The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US. */
	    messageLanguage?: string

	    /** Customized message body you want to send if you don't want the default message. */
	    customizedMessageBody?: string

}
export interface PlannerAppliedCategories {

}
export interface PlannerAssignments {

}
export interface PlannerExternalReference {

	    /** A name alias to describe the reference. */
	    alias?: string

	    /** Used to describe the type of the reference. Types include: PowerPoint, Word, Excel, Other. */
	    type?: string

	    /** Used to set the relative priority order in which the reference will be shown as a preview on the task. */
	    previewPriority?: string

	    /** Read-only. User ID by which this is last modified. */
	    lastModifiedBy?: IdentitySet

	    /** Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    lastModifiedDateTime?: string

}
export interface PlannerChecklistItem {

	    /** Value is true if the item is checked and false otherwise. */
	    isChecked?: boolean

	    /** Title of the checklist item */
	    title?: string

	    /** Used to set the relative order of items in the checklist. The format is defined as outlined here. */
	    orderHint?: string

	    /** Read-only. User ID by which this is last modified. */
	    lastModifiedBy?: IdentitySet

	    /** Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    lastModifiedDateTime?: string

}
export interface PlannerAssignment {

	    /** The identity of the user that performed the assignment of the task, i.e. the assignor. */
	    assignedBy?: IdentitySet

	    /** The time at which the task was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' */
	    assignedDateTime?: string

	    /** Hint used to order assignees in a task. The format is defined as outlined here. */
	    orderHint?: string

}
export interface PlannerExternalReferences {

}
export interface PlannerChecklistItems {

}
export interface PlannerOrderHintsByAssignee {

}
export interface PlannerUserIds {

}
export interface PlannerCategoryDescriptions {

	    /** The label associated with Category 1 */
	    category1?: string

	    /** The label associated with Category 2 */
	    category2?: string

	    /** The label associated with Category 3 */
	    category3?: string

	    /** The label associated with Category 4 */
	    category4?: string

	    /** The label associated with Category 5 */
	    category5?: string

	    /** The label associated with Category 6 */
	    category6?: string

}
export interface NotebookLinks {

	    /** Opens the notebook in the OneNote native client if it's installed. */
	    oneNoteClientUrl?: ExternalLink

	    /** Opens the notebook in OneNote Online. */
	    oneNoteWebUrl?: ExternalLink

}
export interface ExternalLink {

	    /** The url of the link. */
	    href?: string

}
export interface SectionLinks {

	    /** Opens the section in the OneNote native client if it's installed. */
	    oneNoteClientUrl?: ExternalLink

	    /** Opens the section in OneNote Online. */
	    oneNoteWebUrl?: ExternalLink

}
export interface PageLinks {

	    /** Opens the page in the OneNote native client if it's installed. */
	    oneNoteClientUrl?: ExternalLink

	    /** Opens the page in OneNote Online. */
	    oneNoteWebUrl?: ExternalLink

}
export interface OnenoteOperationError {

	    /** The error code. */
	    code?: string

	    /** The error message. */
	    message?: string

}
export interface Diagnostic {

	    message?: string

	    url?: string

}
export interface OnenotePatchContentCommand {

	    /** The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend. */
	    action?: OnenotePatchActionType

	    /** The element to update. Must be the #<data-id> or the generated <id> of the element, or the body or title keyword. */
	    target?: string

	    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a "Commands" part. */
	    content?: string

	    /** The location to add the supplied content, relative to the target element. Possible values are: after (default) or before. */
	    position?: OnenotePatchInsertPosition

}
export interface OnenotePagePreview {

	    previewText?: string

	    links?: OnenotePagePreviewLinks

}
export interface OnenotePagePreviewLinks {

	    previewImageUrl?: ExternalLink

}
export interface RecentNotebook {

	    displayName?: string

	    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only. */
	    lastAccessedTime?: string

	    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote Online. */
	    links?: RecentNotebookLinks

	    /** The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive. */
	    sourceService?: OnenoteSourceService

}
export interface RecentNotebookLinks {

	    /** Opens the notebook in the OneNote native client if it's installed. */
	    oneNoteClientUrl?: ExternalLink

	    /** Opens the notebook in OneNote Online. */
	    oneNoteWebUrl?: ExternalLink

}
