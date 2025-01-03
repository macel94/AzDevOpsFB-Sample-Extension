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
 * Result of an update work item type XML update operation.
 * @export
 * @interface ProvisioningResult
 */
export interface ProvisioningResult {
    /**
     * Details about of the provisioning import events.
     * @type {Array<string>}
     * @memberof ProvisioningResult
     */
    provisioningImportEvents?: Array<string>;
}

/**
 * Check if a given object implements the ProvisioningResult interface.
 */
export function instanceOfProvisioningResult(value: object): value is ProvisioningResult {
    return true;
}

export function ProvisioningResultFromJSON(json: any): ProvisioningResult {
    return ProvisioningResultFromJSONTyped(json, false);
}

export function ProvisioningResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProvisioningResult {
    if (json == null) {
        return json;
    }
    return {
        
        'provisioningImportEvents': json['provisioningImportEvents'] == null ? undefined : json['provisioningImportEvents'],
    };
}

export function ProvisioningResultToJSON(json: any): ProvisioningResult {
    return ProvisioningResultToJSONTyped(json, false);
}

export function ProvisioningResultToJSONTyped(value?: ProvisioningResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'provisioningImportEvents': value['provisioningImportEvents'],
    };
}

