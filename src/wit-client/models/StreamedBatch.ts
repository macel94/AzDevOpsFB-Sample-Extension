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
 * The class describes reporting work item revision batch.
 * @export
 * @interface StreamedBatch
 */
export interface StreamedBatch {
    /**
     * ContinuationToken acts as a waterMark. Used while querying large results.
     * @type {string}
     * @memberof StreamedBatch
     */
    continuationToken?: string;
    /**
     * Returns 'true' if it's last batch, 'false' otherwise.
     * @type {boolean}
     * @memberof StreamedBatch
     */
    isLastBatch?: boolean;
    /**
     * The next link for the work item.
     * @type {string}
     * @memberof StreamedBatch
     */
    nextLink?: string;
    /**
     * Values such as rel, sourceId, TargetId, ChangedDate, isActive.
     * @type {Array<string>}
     * @memberof StreamedBatch
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the StreamedBatch interface.
 */
export function instanceOfStreamedBatch(value: object): value is StreamedBatch {
    return true;
}

export function StreamedBatchFromJSON(json: any): StreamedBatch {
    return StreamedBatchFromJSONTyped(json, false);
}

export function StreamedBatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamedBatch {
    if (json == null) {
        return json;
    }
    return {
        
        'continuationToken': json['continuationToken'] == null ? undefined : json['continuationToken'],
        'isLastBatch': json['isLastBatch'] == null ? undefined : json['isLastBatch'],
        'nextLink': json['nextLink'] == null ? undefined : json['nextLink'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function StreamedBatchToJSON(json: any): StreamedBatch {
    return StreamedBatchToJSONTyped(json, false);
}

export function StreamedBatchToJSONTyped(value?: StreamedBatch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'continuationToken': value['continuationToken'],
        'isLastBatch': value['isLastBatch'],
        'nextLink': value['nextLink'],
        'values': value['values'],
    };
}
