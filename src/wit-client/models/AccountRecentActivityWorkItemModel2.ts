/* tslint:disable */
/* eslint-disable */
/**
 * WorkItemTracking
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 7.2-preview
 * Contact: nugetvss@microsoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityRef } from './IdentityRef';
import {
    IdentityRefFromJSON,
    IdentityRefFromJSONTyped,
    IdentityRefToJSON,
    IdentityRefToJSONTyped,
} from './IdentityRef';

/**
 * Represents Work Item Recent Activity
 * @export
 * @interface AccountRecentActivityWorkItemModel2
 */
export interface AccountRecentActivityWorkItemModel2 {
    /**
     * 
     * @type {IdentityRef}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    assignedTo?: IdentityRef;
    /**
     * Date of the last Activity by the user
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    activityDate?: Date;
    /**
     * Type of the activity
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    activityType?: AccountRecentActivityWorkItemModel2ActivityTypeEnum;
    /**
     * Last changed date of the work item
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    changedDate?: Date;
    /**
     * Work Item Id
     * @type {number}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    id?: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    identityId?: string;
    /**
     * State of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    state?: string;
    /**
     * Team project the work item belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    teamProject?: string;
    /**
     * Title of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    title?: string;
    /**
     * Type of Work Item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel2
     */
    workItemType?: string;
}


/**
 * @export
 */
export const AccountRecentActivityWorkItemModel2ActivityTypeEnum = {
    Visited: 'visited',
    Edited: 'edited',
    Deleted: 'deleted',
    Restored: 'restored'
} as const;
export type AccountRecentActivityWorkItemModel2ActivityTypeEnum = typeof AccountRecentActivityWorkItemModel2ActivityTypeEnum[keyof typeof AccountRecentActivityWorkItemModel2ActivityTypeEnum];


/**
 * Check if a given object implements the AccountRecentActivityWorkItemModel2 interface.
 */
export function instanceOfAccountRecentActivityWorkItemModel2(value: object): value is AccountRecentActivityWorkItemModel2 {
    return true;
}

export function AccountRecentActivityWorkItemModel2FromJSON(json: any): AccountRecentActivityWorkItemModel2 {
    return AccountRecentActivityWorkItemModel2FromJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModel2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRecentActivityWorkItemModel2 {
    if (json == null) {
        return json;
    }
    return {
        
        'assignedTo': json['assignedTo'] == null ? undefined : IdentityRefFromJSON(json['assignedTo']),
        'activityDate': json['activityDate'] == null ? undefined : (new Date(json['activityDate'])),
        'activityType': json['activityType'] == null ? undefined : json['activityType'],
        'changedDate': json['changedDate'] == null ? undefined : (new Date(json['changedDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'identityId': json['identityId'] == null ? undefined : json['identityId'],
        'state': json['state'] == null ? undefined : json['state'],
        'teamProject': json['teamProject'] == null ? undefined : json['teamProject'],
        'title': json['title'] == null ? undefined : json['title'],
        'workItemType': json['workItemType'] == null ? undefined : json['workItemType'],
    };
}

export function AccountRecentActivityWorkItemModel2ToJSON(json: any): AccountRecentActivityWorkItemModel2 {
    return AccountRecentActivityWorkItemModel2ToJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModel2ToJSONTyped(value?: AccountRecentActivityWorkItemModel2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'assignedTo': IdentityRefToJSON(value['assignedTo']),
        'activityDate': value['activityDate'] == null ? undefined : ((value['activityDate']).toISOString()),
        'activityType': value['activityType'],
        'changedDate': value['changedDate'] == null ? undefined : ((value['changedDate']).toISOString()),
        'id': value['id'],
        'identityId': value['identityId'],
        'state': value['state'],
        'teamProject': value['teamProject'],
        'title': value['title'],
        'workItemType': value['workItemType'],
    };
}
