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
import type { ReferenceLinks } from './ReferenceLinks';
import {
    ReferenceLinksFromJSON,
    ReferenceLinksFromJSONTyped,
    ReferenceLinksToJSON,
    ReferenceLinksToJSONTyped,
} from './ReferenceLinks';

/**
 * Describes a shallow reference to a work item template.
 * @export
 * @interface WorkItemTemplateReference
 */
export interface WorkItemTemplateReference {
    /**
     * The description of the work item template.
     * @type {string}
     * @memberof WorkItemTemplateReference
     */
    description?: string;
    /**
     * The identifier of the work item template.
     * @type {string}
     * @memberof WorkItemTemplateReference
     */
    id?: string;
    /**
     * The name of the work item template.
     * @type {string}
     * @memberof WorkItemTemplateReference
     */
    name?: string;
    /**
     * The name of the work item type.
     * @type {string}
     * @memberof WorkItemTemplateReference
     */
    workItemTypeName?: string;
    /**
     * 
     * @type {ReferenceLinks}
     * @memberof WorkItemTemplateReference
     */
    links?: ReferenceLinks;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof WorkItemTemplateReference
     */
    url?: string;
}

/**
 * Check if a given object implements the WorkItemTemplateReference interface.
 */
export function instanceOfWorkItemTemplateReference(value: object): value is WorkItemTemplateReference {
    return true;
}

export function WorkItemTemplateReferenceFromJSON(json: any): WorkItemTemplateReference {
    return WorkItemTemplateReferenceFromJSONTyped(json, false);
}

export function WorkItemTemplateReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemTemplateReference {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'workItemTypeName': json['workItemTypeName'] == null ? undefined : json['workItemTypeName'],
        'links': json['_links'] == null ? undefined : ReferenceLinksFromJSON(json['_links']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemTemplateReferenceToJSON(json: any): WorkItemTemplateReference {
    return WorkItemTemplateReferenceToJSONTyped(json, false);
}

export function WorkItemTemplateReferenceToJSONTyped(value?: WorkItemTemplateReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'id': value['id'],
        'name': value['name'],
        'workItemTypeName': value['workItemTypeName'],
        '_links': ReferenceLinksToJSON(value['links']),
        'url': value['url'],
    };
}

