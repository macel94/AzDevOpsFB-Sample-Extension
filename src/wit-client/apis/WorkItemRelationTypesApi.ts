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


import * as runtime from '../runtime';
import type {
  WorkItemRelationType,
} from '../models/index';
import {
    WorkItemRelationTypeFromJSON,
    WorkItemRelationTypeToJSON,
} from '../models/index';

export interface WorkItemRelationTypesGetRequest {
    organization: string;
    relation: string;
    apiVersion: string;
}

export interface WorkItemRelationTypesListRequest {
    organization: string;
    apiVersion: string;
}

/**
 * 
 */
export class WorkItemRelationTypesApi extends runtime.BaseAPI {

    /**
     * Gets the work item relation type definition.
     */
    async workItemRelationTypesGetRaw(requestParameters: WorkItemRelationTypesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkItemRelationType>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling workItemRelationTypesGet().'
            );
        }

        if (requestParameters['relation'] == null) {
            throw new runtime.RequiredError(
                'relation',
                'Required parameter "relation" was null or undefined when calling workItemRelationTypesGet().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling workItemRelationTypesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work"]);
        }

        const response = await this.request({
            path: `/{organization}/_apis/wit/workitemrelationtypes/{relation}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"relation"}}`, encodeURIComponent(String(requestParameters['relation']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkItemRelationTypeFromJSON(jsonValue));
    }

    /**
     * Gets the work item relation type definition.
     */
    async workItemRelationTypesGet(requestParameters: WorkItemRelationTypesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkItemRelationType> {
        const response = await this.workItemRelationTypesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the work item relation types.
     */
    async workItemRelationTypesListRaw(requestParameters: WorkItemRelationTypesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WorkItemRelationType>>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling workItemRelationTypesList().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling workItemRelationTypesList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work"]);
        }

        const response = await this.request({
            path: `/{organization}/_apis/wit/workitemrelationtypes`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WorkItemRelationTypeFromJSON));
    }

    /**
     * Gets the work item relation types.
     */
    async workItemRelationTypesList(requestParameters: WorkItemRelationTypesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WorkItemRelationType>> {
        const response = await this.workItemRelationTypesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
