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
 * @interface ReportingWorkItemRevisionsBatch
 */
export interface ReportingWorkItemRevisionsBatch {
    /**
     * ContinuationToken acts as a waterMark. Used while querying large results.
     * @type {string}
     * @memberof ReportingWorkItemRevisionsBatch
     */
    continuationToken?: string;
    /**
     * Returns 'true' if it's last batch, 'false' otherwise.
     * @type {boolean}
     * @memberof ReportingWorkItemRevisionsBatch
     */
    isLastBatch?: boolean;
    /**
     * The next link for the work item.
     * @type {string}
     * @memberof ReportingWorkItemRevisionsBatch
     */
    nextLink?: string;
    /**
     * Values such as rel, sourceId, TargetId, ChangedDate, isActive.
     * @type {Array<string>}
     * @memberof ReportingWorkItemRevisionsBatch
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the ReportingWorkItemRevisionsBatch interface.
 */
export function instanceOfReportingWorkItemRevisionsBatch(value: object): value is ReportingWorkItemRevisionsBatch {
    return true;
}

export function ReportingWorkItemRevisionsBatchFromJSON(json: any): ReportingWorkItemRevisionsBatch {
    return ReportingWorkItemRevisionsBatchFromJSONTyped(json, false);
}

export function ReportingWorkItemRevisionsBatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportingWorkItemRevisionsBatch {
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

export function ReportingWorkItemRevisionsBatchToJSON(json: any): ReportingWorkItemRevisionsBatch {
    return ReportingWorkItemRevisionsBatchToJSONTyped(json, false);
}

export function ReportingWorkItemRevisionsBatchToJSONTyped(value?: ReportingWorkItemRevisionsBatch | null, ignoreDiscriminator: boolean = false): any {
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

