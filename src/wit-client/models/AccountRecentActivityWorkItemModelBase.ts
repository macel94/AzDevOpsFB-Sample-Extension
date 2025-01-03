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
/**
 * Represents Work Item Recent Activity
 * @export
 * @interface AccountRecentActivityWorkItemModelBase
 */
export interface AccountRecentActivityWorkItemModelBase {
    /**
     * Date of the last Activity by the user
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    activityDate?: Date;
    /**
     * Type of the activity
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    activityType?: AccountRecentActivityWorkItemModelBaseActivityTypeEnum;
    /**
     * Last changed date of the work item
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    changedDate?: Date;
    /**
     * Work Item Id
     * @type {number}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    id?: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    identityId?: string;
    /**
     * State of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    state?: string;
    /**
     * Team project the work item belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    teamProject?: string;
    /**
     * Title of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    title?: string;
    /**
     * Type of Work Item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModelBase
     */
    workItemType?: string;
}


/**
 * @export
 */
export const AccountRecentActivityWorkItemModelBaseActivityTypeEnum = {
    Visited: 'visited',
    Edited: 'edited',
    Deleted: 'deleted',
    Restored: 'restored'
} as const;
export type AccountRecentActivityWorkItemModelBaseActivityTypeEnum = typeof AccountRecentActivityWorkItemModelBaseActivityTypeEnum[keyof typeof AccountRecentActivityWorkItemModelBaseActivityTypeEnum];


/**
 * Check if a given object implements the AccountRecentActivityWorkItemModelBase interface.
 */
export function instanceOfAccountRecentActivityWorkItemModelBase(value: object): value is AccountRecentActivityWorkItemModelBase {
    return true;
}

export function AccountRecentActivityWorkItemModelBaseFromJSON(json: any): AccountRecentActivityWorkItemModelBase {
    return AccountRecentActivityWorkItemModelBaseFromJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModelBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRecentActivityWorkItemModelBase {
    if (json == null) {
        return json;
    }
    return {
        
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

export function AccountRecentActivityWorkItemModelBaseToJSON(json: any): AccountRecentActivityWorkItemModelBase {
    return AccountRecentActivityWorkItemModelBaseToJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModelBaseToJSONTyped(value?: AccountRecentActivityWorkItemModelBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
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

