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
 * Describes a request to create a temporary query
 * @export
 * @interface TemporaryQueryRequestModel
 */
export interface TemporaryQueryRequestModel {
    /**
     * The WIQL text of the temporary query
     * @type {string}
     * @memberof TemporaryQueryRequestModel
     */
    wiql?: string;
    /**
     * 
     * @type {ReferenceLinks}
     * @memberof TemporaryQueryRequestModel
     */
    links?: ReferenceLinks;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof TemporaryQueryRequestModel
     */
    url?: string;
}

/**
 * Check if a given object implements the TemporaryQueryRequestModel interface.
 */
export function instanceOfTemporaryQueryRequestModel(value: object): value is TemporaryQueryRequestModel {
    return true;
}

export function TemporaryQueryRequestModelFromJSON(json: any): TemporaryQueryRequestModel {
    return TemporaryQueryRequestModelFromJSONTyped(json, false);
}

export function TemporaryQueryRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemporaryQueryRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'wiql': json['wiql'] == null ? undefined : json['wiql'],
        'links': json['_links'] == null ? undefined : ReferenceLinksFromJSON(json['_links']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function TemporaryQueryRequestModelToJSON(json: any): TemporaryQueryRequestModel {
    return TemporaryQueryRequestModelToJSONTyped(json, false);
}

export function TemporaryQueryRequestModelToJSONTyped(value?: TemporaryQueryRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'wiql': value['wiql'],
        '_links': ReferenceLinksToJSON(value['links']),
        'url': value['url'],
    };
}

