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
import type { WorkItemDelete } from './WorkItemDelete';
import {
    WorkItemDeleteFromJSON,
    WorkItemDeleteFromJSONTyped,
    WorkItemDeleteToJSON,
    WorkItemDeleteToJSONTyped,
} from './WorkItemDelete';

/**
 * Describes response to delete a set of work items.
 * @export
 * @interface WorkItemDeleteBatch
 */
export interface WorkItemDeleteBatch {
    /**
     * List of results for each work item
     * @type {Array<WorkItemDelete>}
     * @memberof WorkItemDeleteBatch
     */
    results?: Array<WorkItemDelete>;
}

/**
 * Check if a given object implements the WorkItemDeleteBatch interface.
 */
export function instanceOfWorkItemDeleteBatch(value: object): value is WorkItemDeleteBatch {
    return true;
}

export function WorkItemDeleteBatchFromJSON(json: any): WorkItemDeleteBatch {
    return WorkItemDeleteBatchFromJSONTyped(json, false);
}

export function WorkItemDeleteBatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemDeleteBatch {
    if (json == null) {
        return json;
    }
    return {
        
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(WorkItemDeleteFromJSON)),
    };
}

export function WorkItemDeleteBatchToJSON(json: any): WorkItemDeleteBatch {
    return WorkItemDeleteBatchToJSONTyped(json, false);
}

export function WorkItemDeleteBatchToJSONTyped(value?: WorkItemDeleteBatch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(WorkItemDeleteToJSON)),
    };
}
