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
 * Reference to a work item type.
 * @export
 * @interface WorkItemTypeReference
 */
export interface WorkItemTypeReference {
    /**
     * Name of the work item type.
     * @type {string}
     * @memberof WorkItemTypeReference
     */
    name?: string;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof WorkItemTypeReference
     */
    url?: string;
}

/**
 * Check if a given object implements the WorkItemTypeReference interface.
 */
export function instanceOfWorkItemTypeReference(value: object): value is WorkItemTypeReference {
    return true;
}

export function WorkItemTypeReferenceFromJSON(json: any): WorkItemTypeReference {
    return WorkItemTypeReferenceFromJSONTyped(json, false);
}

export function WorkItemTypeReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemTypeReference {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemTypeReferenceToJSON(json: any): WorkItemTypeReference {
    return WorkItemTypeReferenceToJSONTyped(json, false);
}

export function WorkItemTypeReferenceToJSONTyped(value?: WorkItemTypeReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'url': value['url'],
    };
}
