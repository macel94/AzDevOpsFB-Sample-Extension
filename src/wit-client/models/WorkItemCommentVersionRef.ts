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
 * Represents the reference to a specific version of a comment on a Work Item.
 * @export
 * @interface WorkItemCommentVersionRef
 */
export interface WorkItemCommentVersionRef {
    /**
     * The id assigned to the comment.
     * @type {number}
     * @memberof WorkItemCommentVersionRef
     */
    commentId?: number;
    /**
     * [Internal] The work item revision where this comment was originally added.
     * @type {number}
     * @memberof WorkItemCommentVersionRef
     */
    createdInRevision?: number;
    /**
     * [Internal] Specifies whether comment was deleted.
     * @type {boolean}
     * @memberof WorkItemCommentVersionRef
     */
    isDeleted?: boolean;
    /**
     * [Internal] The text of the comment.
     * @type {string}
     * @memberof WorkItemCommentVersionRef
     */
    text?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof WorkItemCommentVersionRef
     */
    version?: number;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof WorkItemCommentVersionRef
     */
    url?: string;
}

/**
 * Check if a given object implements the WorkItemCommentVersionRef interface.
 */
export function instanceOfWorkItemCommentVersionRef(value: object): value is WorkItemCommentVersionRef {
    return true;
}

export function WorkItemCommentVersionRefFromJSON(json: any): WorkItemCommentVersionRef {
    return WorkItemCommentVersionRefFromJSONTyped(json, false);
}

export function WorkItemCommentVersionRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemCommentVersionRef {
    if (json == null) {
        return json;
    }
    return {
        
        'commentId': json['commentId'] == null ? undefined : json['commentId'],
        'createdInRevision': json['createdInRevision'] == null ? undefined : json['createdInRevision'],
        'isDeleted': json['isDeleted'] == null ? undefined : json['isDeleted'],
        'text': json['text'] == null ? undefined : json['text'],
        'version': json['version'] == null ? undefined : json['version'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemCommentVersionRefToJSON(json: any): WorkItemCommentVersionRef {
    return WorkItemCommentVersionRefToJSONTyped(json, false);
}

export function WorkItemCommentVersionRefToJSONTyped(value?: WorkItemCommentVersionRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'commentId': value['commentId'],
        'createdInRevision': value['createdInRevision'],
        'isDeleted': value['isDeleted'],
        'text': value['text'],
        'version': value['version'],
        'url': value['url'],
    };
}

