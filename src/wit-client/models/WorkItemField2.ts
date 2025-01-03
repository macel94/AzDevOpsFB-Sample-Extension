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
import type { WorkItemFieldOperation } from './WorkItemFieldOperation';
import {
    WorkItemFieldOperationFromJSON,
    WorkItemFieldOperationFromJSONTyped,
    WorkItemFieldOperationToJSON,
    WorkItemFieldOperationToJSONTyped,
} from './WorkItemFieldOperation';

/**
 * Describes a field on a work item and it's properties specific to that work item type.
 * @export
 * @interface WorkItemField2
 */
export interface WorkItemField2 {
    /**
     * Indicates whether this field is marked as locked for editing.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isLocked?: boolean;
    /**
     * Indicates whether the field is sortable in server queries.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    canSortBy?: boolean;
    /**
     * The description of the field.
     * @type {string}
     * @memberof WorkItemField2
     */
    description?: string;
    /**
     * Indicates whether this field is deleted.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isDeleted?: boolean;
    /**
     * Indicates whether this field is an identity field.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isIdentity?: boolean;
    /**
     * Indicates whether this instance is picklist.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isPicklist?: boolean;
    /**
     * Indicates whether this instance is a suggested picklist .
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isPicklistSuggested?: boolean;
    /**
     * Indicates whether the field can be queried in the server.
     * @type {boolean}
     * @memberof WorkItemField2
     */
    isQueryable?: boolean;
    /**
     * The name of the field.
     * @type {string}
     * @memberof WorkItemField2
     */
    name?: string;
    /**
     * If this field is picklist, the identifier of the picklist associated, otherwise null
     * @type {string}
     * @memberof WorkItemField2
     */
    picklistId?: string;
    /**
     * Indicates whether the field is [read only].
     * @type {boolean}
     * @memberof WorkItemField2
     */
    readOnly?: boolean;
    /**
     * The reference name of the field.
     * @type {string}
     * @memberof WorkItemField2
     */
    referenceName?: string;
    /**
     * The supported operations on this field.
     * @type {Array<WorkItemFieldOperation>}
     * @memberof WorkItemField2
     */
    supportedOperations?: Array<WorkItemFieldOperation>;
    /**
     * The type of the field.
     * @type {string}
     * @memberof WorkItemField2
     */
    type?: WorkItemField2TypeEnum;
    /**
     * The usage of the field.
     * @type {string}
     * @memberof WorkItemField2
     */
    usage?: WorkItemField2UsageEnum;
    /**
     * 
     * @type {ReferenceLinks}
     * @memberof WorkItemField2
     */
    links?: ReferenceLinks;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof WorkItemField2
     */
    url?: string;
}


/**
 * @export
 */
export const WorkItemField2TypeEnum = {
    String: 'string',
    Integer: 'integer',
    DateTime: 'dateTime',
    PlainText: 'plainText',
    Html: 'html',
    TreePath: 'treePath',
    History: 'history',
    Double: 'double',
    Guid: 'guid',
    Boolean: 'boolean',
    Identity: 'identity',
    PicklistString: 'picklistString',
    PicklistInteger: 'picklistInteger',
    PicklistDouble: 'picklistDouble'
} as const;
export type WorkItemField2TypeEnum = typeof WorkItemField2TypeEnum[keyof typeof WorkItemField2TypeEnum];

/**
 * @export
 */
export const WorkItemField2UsageEnum = {
    None: 'none',
    WorkItem: 'workItem',
    WorkItemLink: 'workItemLink',
    Tree: 'tree',
    WorkItemTypeExtension: 'workItemTypeExtension'
} as const;
export type WorkItemField2UsageEnum = typeof WorkItemField2UsageEnum[keyof typeof WorkItemField2UsageEnum];


/**
 * Check if a given object implements the WorkItemField2 interface.
 */
export function instanceOfWorkItemField2(value: object): value is WorkItemField2 {
    return true;
}

export function WorkItemField2FromJSON(json: any): WorkItemField2 {
    return WorkItemField2FromJSONTyped(json, false);
}

export function WorkItemField2FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemField2 {
    if (json == null) {
        return json;
    }
    return {
        
        'isLocked': json['isLocked'] == null ? undefined : json['isLocked'],
        'canSortBy': json['canSortBy'] == null ? undefined : json['canSortBy'],
        'description': json['description'] == null ? undefined : json['description'],
        'isDeleted': json['isDeleted'] == null ? undefined : json['isDeleted'],
        'isIdentity': json['isIdentity'] == null ? undefined : json['isIdentity'],
        'isPicklist': json['isPicklist'] == null ? undefined : json['isPicklist'],
        'isPicklistSuggested': json['isPicklistSuggested'] == null ? undefined : json['isPicklistSuggested'],
        'isQueryable': json['isQueryable'] == null ? undefined : json['isQueryable'],
        'name': json['name'] == null ? undefined : json['name'],
        'picklistId': json['picklistId'] == null ? undefined : json['picklistId'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'supportedOperations': json['supportedOperations'] == null ? undefined : ((json['supportedOperations'] as Array<any>).map(WorkItemFieldOperationFromJSON)),
        'type': json['type'] == null ? undefined : json['type'],
        'usage': json['usage'] == null ? undefined : json['usage'],
        'links': json['_links'] == null ? undefined : ReferenceLinksFromJSON(json['_links']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemField2ToJSON(json: any): WorkItemField2 {
    return WorkItemField2ToJSONTyped(json, false);
}

export function WorkItemField2ToJSONTyped(value?: WorkItemField2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isLocked': value['isLocked'],
        'canSortBy': value['canSortBy'],
        'description': value['description'],
        'isDeleted': value['isDeleted'],
        'isIdentity': value['isIdentity'],
        'isPicklist': value['isPicklist'],
        'isPicklistSuggested': value['isPicklistSuggested'],
        'isQueryable': value['isQueryable'],
        'name': value['name'],
        'picklistId': value['picklistId'],
        'readOnly': value['readOnly'],
        'referenceName': value['referenceName'],
        'supportedOperations': value['supportedOperations'] == null ? undefined : ((value['supportedOperations'] as Array<any>).map(WorkItemFieldOperationToJSON)),
        'type': value['type'],
        'usage': value['usage'],
        '_links': ReferenceLinksToJSON(value['links']),
        'url': value['url'],
    };
}

