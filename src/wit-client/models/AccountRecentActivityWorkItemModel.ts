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
 * @interface AccountRecentActivityWorkItemModel
 */
export interface AccountRecentActivityWorkItemModel {
    /**
     * Assigned To
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    assignedTo?: string;
    /**
     * Date of the last Activity by the user
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModel
     */
    activityDate?: Date;
    /**
     * Type of the activity
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    activityType?: AccountRecentActivityWorkItemModelActivityTypeEnum;
    /**
     * Last changed date of the work item
     * @type {Date}
     * @memberof AccountRecentActivityWorkItemModel
     */
    changedDate?: Date;
    /**
     * Work Item Id
     * @type {number}
     * @memberof AccountRecentActivityWorkItemModel
     */
    id?: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    identityId?: string;
    /**
     * State of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    state?: string;
    /**
     * Team project the work item belongs to
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    teamProject?: string;
    /**
     * Title of the work item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    title?: string;
    /**
     * Type of Work Item
     * @type {string}
     * @memberof AccountRecentActivityWorkItemModel
     */
    workItemType?: string;
}


/**
 * @export
 */
export const AccountRecentActivityWorkItemModelActivityTypeEnum = {
    Visited: 'visited',
    Edited: 'edited',
    Deleted: 'deleted',
    Restored: 'restored'
} as const;
export type AccountRecentActivityWorkItemModelActivityTypeEnum = typeof AccountRecentActivityWorkItemModelActivityTypeEnum[keyof typeof AccountRecentActivityWorkItemModelActivityTypeEnum];


/**
 * Check if a given object implements the AccountRecentActivityWorkItemModel interface.
 */
export function instanceOfAccountRecentActivityWorkItemModel(value: object): value is AccountRecentActivityWorkItemModel {
    return true;
}

export function AccountRecentActivityWorkItemModelFromJSON(json: any): AccountRecentActivityWorkItemModel {
    return AccountRecentActivityWorkItemModelFromJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRecentActivityWorkItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'assignedTo': json['assignedTo'] == null ? undefined : json['assignedTo'],
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

export function AccountRecentActivityWorkItemModelToJSON(json: any): AccountRecentActivityWorkItemModel {
    return AccountRecentActivityWorkItemModelToJSONTyped(json, false);
}

export function AccountRecentActivityWorkItemModelToJSONTyped(value?: AccountRecentActivityWorkItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'assignedTo': value['assignedTo'],
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

