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
import type { IdentityRef } from './IdentityRef';
import {
    IdentityRefFromJSON,
    IdentityRefFromJSONTyped,
    IdentityRefToJSON,
    IdentityRefToJSONTyped,
} from './IdentityRef';

/**
 * Describes Github connection.
 * @export
 * @interface GitHubConnectionModel
 */
export interface GitHubConnectionModel {
    /**
     * Github connection authorization type (f. e. PAT, OAuth)
     * @type {string}
     * @memberof GitHubConnectionModel
     */
    authorizationType?: string;
    /**
     * 
     * @type {IdentityRef}
     * @memberof GitHubConnectionModel
     */
    createdBy?: IdentityRef;
    /**
     * Github connection id
     * @type {string}
     * @memberof GitHubConnectionModel
     */
    id?: string;
    /**
     * Whether current Github connection is valid or not
     * @type {boolean}
     * @memberof GitHubConnectionModel
     */
    isConnectionValid?: boolean;
    /**
     * Github connection name (should contain organization/user name)
     * @type {string}
     * @memberof GitHubConnectionModel
     */
    name?: string;
}

/**
 * Check if a given object implements the GitHubConnectionModel interface.
 */
export function instanceOfGitHubConnectionModel(value: object): value is GitHubConnectionModel {
    return true;
}

export function GitHubConnectionModelFromJSON(json: any): GitHubConnectionModel {
    return GitHubConnectionModelFromJSONTyped(json, false);
}

export function GitHubConnectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitHubConnectionModel {
    if (json == null) {
        return json;
    }
    return {
        
        'authorizationType': json['authorizationType'] == null ? undefined : json['authorizationType'],
        'createdBy': json['createdBy'] == null ? undefined : IdentityRefFromJSON(json['createdBy']),
        'id': json['id'] == null ? undefined : json['id'],
        'isConnectionValid': json['isConnectionValid'] == null ? undefined : json['isConnectionValid'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function GitHubConnectionModelToJSON(json: any): GitHubConnectionModel {
    return GitHubConnectionModelToJSONTyped(json, false);
}

export function GitHubConnectionModelToJSONTyped(value?: GitHubConnectionModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authorizationType': value['authorizationType'],
        'createdBy': IdentityRefToJSON(value['createdBy']),
        'id': value['id'],
        'isConnectionValid': value['isConnectionValid'],
        'name': value['name'],
    };
}

