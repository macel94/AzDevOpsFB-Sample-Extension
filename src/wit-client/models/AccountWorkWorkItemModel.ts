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
 * 
 * @export
 * @interface AccountWorkWorkItemModel
 */
export interface AccountWorkWorkItemModel {
    /**
     * 
     * @type {string}
     * @memberof AccountWorkWorkItemModel
     */
    assignedTo?: string;
    /**
     * 
     * @type {Date}
     * @memberof AccountWorkWorkItemModel
     */
    changedDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof AccountWorkWorkItemModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountWorkWorkItemModel
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountWorkWorkItemModel
     */
    teamProject?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountWorkWorkItemModel
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountWorkWorkItemModel
     */
    workItemType?: string;
}

/**
 * Check if a given object implements the AccountWorkWorkItemModel interface.
 */
export function instanceOfAccountWorkWorkItemModel(value: object): value is AccountWorkWorkItemModel {
    return true;
}

export function AccountWorkWorkItemModelFromJSON(json: any): AccountWorkWorkItemModel {
    return AccountWorkWorkItemModelFromJSONTyped(json, false);
}

export function AccountWorkWorkItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountWorkWorkItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'assignedTo': json['assignedTo'] == null ? undefined : json['assignedTo'],
        'changedDate': json['changedDate'] == null ? undefined : (new Date(json['changedDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : json['state'],
        'teamProject': json['teamProject'] == null ? undefined : json['teamProject'],
        'title': json['title'] == null ? undefined : json['title'],
        'workItemType': json['workItemType'] == null ? undefined : json['workItemType'],
    };
}

export function AccountWorkWorkItemModelToJSON(json: any): AccountWorkWorkItemModel {
    return AccountWorkWorkItemModelToJSONTyped(json, false);
}

export function AccountWorkWorkItemModelToJSONTyped(value?: AccountWorkWorkItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'assignedTo': value['assignedTo'],
        'changedDate': value['changedDate'] == null ? undefined : ((value['changedDate']).toISOString()),
        'id': value['id'],
        'state': value['state'],
        'teamProject': value['teamProject'],
        'title': value['title'],
        'workItemType': value['workItemType'],
    };
}

