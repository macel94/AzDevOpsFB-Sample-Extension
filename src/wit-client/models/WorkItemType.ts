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
import type { WorkItemIcon } from './WorkItemIcon';
import {
    WorkItemIconFromJSON,
    WorkItemIconFromJSONTyped,
    WorkItemIconToJSON,
    WorkItemIconToJSONTyped,
} from './WorkItemIcon';
import type { ReferenceLinks } from './ReferenceLinks';
import {
    ReferenceLinksFromJSON,
    ReferenceLinksFromJSONTyped,
    ReferenceLinksToJSON,
    ReferenceLinksToJSONTyped,
} from './ReferenceLinks';
import type { WorkItemStateTransition } from './WorkItemStateTransition';
import {
    WorkItemStateTransitionFromJSON,
    WorkItemStateTransitionFromJSONTyped,
    WorkItemStateTransitionToJSON,
    WorkItemStateTransitionToJSONTyped,
} from './WorkItemStateTransition';
import type { WorkItemStateColor } from './WorkItemStateColor';
import {
    WorkItemStateColorFromJSON,
    WorkItemStateColorFromJSONTyped,
    WorkItemStateColorToJSON,
    WorkItemStateColorToJSONTyped,
} from './WorkItemStateColor';
import type { WorkItemTypeFieldInstance } from './WorkItemTypeFieldInstance';
import {
    WorkItemTypeFieldInstanceFromJSON,
    WorkItemTypeFieldInstanceFromJSONTyped,
    WorkItemTypeFieldInstanceToJSON,
    WorkItemTypeFieldInstanceToJSONTyped,
} from './WorkItemTypeFieldInstance';

/**
 * Describes a work item type.
 * @export
 * @interface WorkItemType
 */
export interface WorkItemType {
    /**
     * The color.
     * @type {string}
     * @memberof WorkItemType
     */
    color?: string;
    /**
     * The description of the work item type.
     * @type {string}
     * @memberof WorkItemType
     */
    description?: string;
    /**
     * The fields that exist on the work item type.
     * @type {Array<WorkItemTypeFieldInstance>}
     * @memberof WorkItemType
     */
    fieldInstances?: Array<WorkItemTypeFieldInstance>;
    /**
     * The fields that exist on the work item type.
     * @type {Array<WorkItemTypeFieldInstance>}
     * @memberof WorkItemType
     */
    fields?: Array<WorkItemTypeFieldInstance>;
    /**
     * 
     * @type {WorkItemIcon}
     * @memberof WorkItemType
     */
    icon?: WorkItemIcon;
    /**
     * True if work item type is disabled
     * @type {boolean}
     * @memberof WorkItemType
     */
    isDisabled?: boolean;
    /**
     * Gets the name of the work item type.
     * @type {string}
     * @memberof WorkItemType
     */
    name?: string;
    /**
     * The reference name of the work item type.
     * @type {string}
     * @memberof WorkItemType
     */
    referenceName?: string;
    /**
     * Gets state information for the work item type.
     * @type {Array<WorkItemStateColor>}
     * @memberof WorkItemType
     */
    states?: Array<WorkItemStateColor>;
    /**
     * Gets the various state transition mappings in the work item type.
     * @type {{ [key: string]: Array<WorkItemStateTransition>; }}
     * @memberof WorkItemType
     */
    transitions?: { [key: string]: Array<WorkItemStateTransition>; };
    /**
     * The XML form.
     * @type {string}
     * @memberof WorkItemType
     */
    xmlForm?: string;
    /**
     * 
     * @type {ReferenceLinks}
     * @memberof WorkItemType
     */
    links?: ReferenceLinks;
    /**
     * REST URL for the resource.
     * @type {string}
     * @memberof WorkItemType
     */
    url?: string;
}

/**
 * Check if a given object implements the WorkItemType interface.
 */
export function instanceOfWorkItemType(value: object): value is WorkItemType {
    return true;
}

export function WorkItemTypeFromJSON(json: any): WorkItemType {
    return WorkItemTypeFromJSONTyped(json, false);
}

export function WorkItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkItemType {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'] == null ? undefined : json['color'],
        'description': json['description'] == null ? undefined : json['description'],
        'fieldInstances': json['fieldInstances'] == null ? undefined : ((json['fieldInstances'] as Array<any>).map(WorkItemTypeFieldInstanceFromJSON)),
        'fields': json['fields'] == null ? undefined : ((json['fields'] as Array<any>).map(WorkItemTypeFieldInstanceFromJSON)),
        'icon': json['icon'] == null ? undefined : WorkItemIconFromJSON(json['icon']),
        'isDisabled': json['isDisabled'] == null ? undefined : json['isDisabled'],
        'name': json['name'] == null ? undefined : json['name'],
        'referenceName': json['referenceName'] == null ? undefined : json['referenceName'],
        'states': json['states'] == null ? undefined : ((json['states'] as Array<any>).map(WorkItemStateColorFromJSON)),
        'transitions': json['transitions'] == null ? undefined : json['transitions'],
        'xmlForm': json['xmlForm'] == null ? undefined : json['xmlForm'],
        'links': json['_links'] == null ? undefined : ReferenceLinksFromJSON(json['_links']),
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function WorkItemTypeToJSON(json: any): WorkItemType {
    return WorkItemTypeToJSONTyped(json, false);
}

export function WorkItemTypeToJSONTyped(value?: WorkItemType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'description': value['description'],
        'fieldInstances': value['fieldInstances'] == null ? undefined : ((value['fieldInstances'] as Array<any>).map(WorkItemTypeFieldInstanceToJSON)),
        'fields': value['fields'] == null ? undefined : ((value['fields'] as Array<any>).map(WorkItemTypeFieldInstanceToJSON)),
        'icon': WorkItemIconToJSON(value['icon']),
        'isDisabled': value['isDisabled'],
        'name': value['name'],
        'referenceName': value['referenceName'],
        'states': value['states'] == null ? undefined : ((value['states'] as Array<any>).map(WorkItemStateColorToJSON)),
        'transitions': value['transitions'],
        'xmlForm': value['xmlForm'],
        '_links': ReferenceLinksToJSON(value['links']),
        'url': value['url'],
    };
}

