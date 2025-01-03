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
 * Describes an update request for a work item field.
 * @export
 * @interface UpdateWorkItemField
 */
export interface UpdateWorkItemField {
    /**
     * Indicates whether the user wants to restore the field.
     * @type {boolean}
     * @memberof UpdateWorkItemField
     */
    isDeleted?: boolean;
}

/**
 * Check if a given object implements the UpdateWorkItemField interface.
 */
export function instanceOfUpdateWorkItemField(value: object): value is UpdateWorkItemField {
    return true;
}

export function UpdateWorkItemFieldFromJSON(json: any): UpdateWorkItemField {
    return UpdateWorkItemFieldFromJSONTyped(json, false);
}

export function UpdateWorkItemFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateWorkItemField {
    if (json == null) {
        return json;
    }
    return {
        
        'isDeleted': json['isDeleted'] == null ? undefined : json['isDeleted'],
    };
}

export function UpdateWorkItemFieldToJSON(json: any): UpdateWorkItemField {
    return UpdateWorkItemFieldToJSONTyped(json, false);
}

export function UpdateWorkItemFieldToJSONTyped(value?: UpdateWorkItemField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isDeleted': value['isDeleted'],
    };
}

