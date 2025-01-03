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
 * @interface AttachmentReference
 */
export interface AttachmentReference {
    /**
     * 
     * @type {string}
     * @memberof AttachmentReference
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentReference
     */
    url?: string;
}

/**
 * Check if a given object implements the AttachmentReference interface.
 */
export function instanceOfAttachmentReference(value: object): value is AttachmentReference {
    return true;
}

export function AttachmentReferenceFromJSON(json: any): AttachmentReference {
    return AttachmentReferenceFromJSONTyped(json, false);
}

export function AttachmentReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentReference {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function AttachmentReferenceToJSON(json: any): AttachmentReference {
    return AttachmentReferenceToJSONTyped(json, false);
}

export function AttachmentReferenceToJSONTyped(value?: AttachmentReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'url': value['url'],
    };
}

