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
 * Describes the list of allowed values of the field.
 * @export
 * @interface WorkItemFieldAllowedValues
 */
export interface WorkItemFieldAllowedValues {
    /**
     * The list of field allowed values.
     * @type {Array<string>}
     * @memberof WorkItemFieldAllowedValues
     */
    allowedValues?: Array<string>;
    /**
     * Name of the field.
     * @type {string}
     * @memberof WorkItemFieldAllowedValues
     */
    fieldName?: string;
}

/**
 * Check if a given object implements the WorkItemFieldAllowedValues interface.
 */
export function instanceOfWorkItemFieldAllowedValues(value: object): value is WorkItemFieldAllowedValues {
    return true;
}

export function WorkItemFieldAllowedValuesFromJSON(json: any): WorkItemFieldAllowedValues {
    return WorkItemFieldAllowedValuesFromJSONTyped(json, false);
}

export function WorkItemFieldAllowedValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemFieldAllowedValues {
    if (json == null) {
        return json;
    }
    return {
        
        'allowedValues': json['allowedValues'] == null ? undefined : json['allowedValues'],
        'fieldName': json['fieldName'] == null ? undefined : json['fieldName'],
    };
}

export function WorkItemFieldAllowedValuesToJSON(json: any): WorkItemFieldAllowedValues {
    return WorkItemFieldAllowedValuesToJSONTyped(json, false);
}

export function WorkItemFieldAllowedValuesToJSONTyped(value?: WorkItemFieldAllowedValues | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowedValues': value['allowedValues'],
        'fieldName': value['fieldName'],
    };
}

