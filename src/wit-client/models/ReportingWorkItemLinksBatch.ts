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
 * @interface ReportingWorkItemLinksBatch
 */
export interface ReportingWorkItemLinksBatch {
    /**
     * ContinuationToken acts as a waterMark. Used while querying large results.
     * @type {string}
     * @memberof ReportingWorkItemLinksBatch
     */
    continuationToken?: string;
    /**
     * Returns 'true' if it's last batch, 'false' otherwise.
     * @type {boolean}
     * @memberof ReportingWorkItemLinksBatch
     */
    isLastBatch?: boolean;
    /**
     * The next link for the work item.
     * @type {string}
     * @memberof ReportingWorkItemLinksBatch
     */
    nextLink?: string;
    /**
     * Values such as rel, sourceId, TargetId, ChangedDate, isActive.
     * @type {Array<string>}
     * @memberof ReportingWorkItemLinksBatch
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the ReportingWorkItemLinksBatch interface.
 */
export function instanceOfReportingWorkItemLinksBatch(value: object): value is ReportingWorkItemLinksBatch {
    return true;
}

export function ReportingWorkItemLinksBatchFromJSON(json: any): ReportingWorkItemLinksBatch {
    return ReportingWorkItemLinksBatchFromJSONTyped(json, false);
}

export function ReportingWorkItemLinksBatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportingWorkItemLinksBatch {
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

export function ReportingWorkItemLinksBatchToJSON(json: any): ReportingWorkItemLinksBatch {
    return ReportingWorkItemLinksBatchToJSONTyped(json, false);
}

export function ReportingWorkItemLinksBatchToJSONTyped(value?: ReportingWorkItemLinksBatch | null, ignoreDiscriminator: boolean = false): any {
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

