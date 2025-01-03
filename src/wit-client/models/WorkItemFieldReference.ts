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
 * Reference to a field in a work item
 * @export
 * @interface WorkItemFieldReference
 */
export interface WorkItemFieldReference {
    /**
     * The friendly name of the field.
     * @type {string}
     * @memberof WorkItemFieldReference
     */
    name?: string;
    /**
     * The reference name of the field.
     * @type {string}
     * @memberof WorkItemFieldReference
     */
    referenceName?: string;
    /**
     * The REST URL of the resource.
     * @type {string}
     * @memberof WorkItemFieldReference
     */
    url?: string;
}

/**
 * Check if a given object implements the WorkItemFieldReference interface.
 */
export function instanceOfWorkItemFieldReference(value: object): value is WorkItemFieldReference {
    return true;
}

export function WorkItemFieldReferenceFromJSON(json: any): WorkItemFieldReference {
    return WorkItemFieldReferenceFromJSONTyped(json, false);
}

export function WorkItemFieldReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemFieldReference {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemFieldReferenceToJSON(json: any): WorkItemFieldReference {
    return WorkItemFieldReferenceToJSONTyped(json, false);
}

export function WorkItemFieldReferenceToJSONTyped(value?: WorkItemFieldReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'referenceName': value['referenceName'],
        'url': value['url'],
    };
}

