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
  WorkItemClassificationNode,
} from '../models/index';
import {
    WorkItemClassificationNodeFromJSON,
    WorkItemClassificationNodeToJSON,
} from '../models/index';

export interface ClassificationNodesCreateOrUpdateRequest {
    organization: string;
    project: string;
    structureGroup: ClassificationNodesCreateOrUpdateStructureGroupEnum;
    path: string;
    apiVersion: string;
    body: WorkItemClassificationNode;
}

export interface ClassificationNodesDeleteRequest {
    organization: string;
    project: string;
    structureGroup: ClassificationNodesDeleteStructureGroupEnum;
    path: string;
    apiVersion: string;
    $reclassifyId?: number;
}

export interface ClassificationNodesGetRequest {
    organization: string;
    project: string;
    structureGroup: ClassificationNodesGetStructureGroupEnum;
    path: string;
    apiVersion: string;
    $depth?: number;
}

export interface ClassificationNodesGetRootNodesRequest {
    organization: string;
    project: string;
    apiVersion: string;
    $depth?: number;
}

export interface ClassificationNodesUpdateRequest {
    organization: string;
    project: string;
    structureGroup: ClassificationNodesUpdateStructureGroupEnum;
    path: string;
    apiVersion: string;
    body: WorkItemClassificationNode;
}

/**
 * 
 */
export class ClassificationNodesApi extends runtime.BaseAPI {

    /**
     * Create new or update an existing classification node.
     */
    async classificationNodesCreateOrUpdateRaw(requestParameters: ClassificationNodesCreateOrUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkItemClassificationNode>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        if (requestParameters['structureGroup'] == null) {
            throw new runtime.RequiredError(
                'structureGroup',
                'Required parameter "structureGroup" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling classificationNodesCreateOrUpdate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work_write"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"structureGroup"}}`, encodeURIComponent(String(requestParameters['structureGroup']))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WorkItemClassificationNodeToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkItemClassificationNodeFromJSON(jsonValue));
    }

    /**
     * Create new or update an existing classification node.
     */
    async classificationNodesCreateOrUpdate(requestParameters: ClassificationNodesCreateOrUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkItemClassificationNode> {
        const response = await this.classificationNodesCreateOrUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an existing classification node.
     */
    async classificationNodesDeleteRaw(requestParameters: ClassificationNodesDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling classificationNodesDelete().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling classificationNodesDelete().'
            );
        }

        if (requestParameters['structureGroup'] == null) {
            throw new runtime.RequiredError(
                'structureGroup',
                'Required parameter "structureGroup" was null or undefined when calling classificationNodesDelete().'
            );
        }

        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling classificationNodesDelete().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling classificationNodesDelete().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['$reclassifyId'] != null) {
            queryParameters['$reclassifyId'] = requestParameters['$reclassifyId'];
        }

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work_write"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"structureGroup"}}`, encodeURIComponent(String(requestParameters['structureGroup']))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing classification node.
     */
    async classificationNodesDelete(requestParameters: ClassificationNodesDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.classificationNodesDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Gets the classification node for a given node path.
     */
    async classificationNodesGetRaw(requestParameters: ClassificationNodesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkItemClassificationNode>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling classificationNodesGet().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling classificationNodesGet().'
            );
        }

        if (requestParameters['structureGroup'] == null) {
            throw new runtime.RequiredError(
                'structureGroup',
                'Required parameter "structureGroup" was null or undefined when calling classificationNodesGet().'
            );
        }

        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling classificationNodesGet().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling classificationNodesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['$depth'] != null) {
            queryParameters['$depth'] = requestParameters['$depth'];
        }

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"structureGroup"}}`, encodeURIComponent(String(requestParameters['structureGroup']))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkItemClassificationNodeFromJSON(jsonValue));
    }

    /**
     * Gets the classification node for a given node path.
     */
    async classificationNodesGet(requestParameters: ClassificationNodesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkItemClassificationNode> {
        const response = await this.classificationNodesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets root classification nodes under the project.
     */
    async classificationNodesGetRootNodesRaw(requestParameters: ClassificationNodesGetRootNodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WorkItemClassificationNode>>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling classificationNodesGetRootNodes().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling classificationNodesGetRootNodes().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling classificationNodesGetRootNodes().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['$depth'] != null) {
            queryParameters['$depth'] = requestParameters['$depth'];
        }

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/classificationnodes`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WorkItemClassificationNodeFromJSON));
    }

    /**
     * Gets root classification nodes under the project.
     */
    async classificationNodesGetRootNodes(requestParameters: ClassificationNodesGetRootNodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WorkItemClassificationNode>> {
        const response = await this.classificationNodesGetRootNodesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing classification node.
     */
    async classificationNodesUpdateRaw(requestParameters: ClassificationNodesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkItemClassificationNode>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        if (requestParameters['structureGroup'] == null) {
            throw new runtime.RequiredError(
                'structureGroup',
                'Required parameter "structureGroup" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling classificationNodesUpdate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work_write"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"structureGroup"}}`, encodeURIComponent(String(requestParameters['structureGroup']))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WorkItemClassificationNodeToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkItemClassificationNodeFromJSON(jsonValue));
    }

    /**
     * Update an existing classification node.
     */
    async classificationNodesUpdate(requestParameters: ClassificationNodesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkItemClassificationNode> {
        const response = await this.classificationNodesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ClassificationNodesCreateOrUpdateStructureGroupEnum = {
    Areas: 'areas',
    Iterations: 'iterations'
} as const;
export type ClassificationNodesCreateOrUpdateStructureGroupEnum = typeof ClassificationNodesCreateOrUpdateStructureGroupEnum[keyof typeof ClassificationNodesCreateOrUpdateStructureGroupEnum];
/**
 * @export
 */
export const ClassificationNodesDeleteStructureGroupEnum = {
    Areas: 'areas',
    Iterations: 'iterations'
} as const;
export type ClassificationNodesDeleteStructureGroupEnum = typeof ClassificationNodesDeleteStructureGroupEnum[keyof typeof ClassificationNodesDeleteStructureGroupEnum];
/**
 * @export
 */
export const ClassificationNodesGetStructureGroupEnum = {
    Areas: 'areas',
    Iterations: 'iterations'
} as const;
export type ClassificationNodesGetStructureGroupEnum = typeof ClassificationNodesGetStructureGroupEnum[keyof typeof ClassificationNodesGetStructureGroupEnum];
/**
 * @export
 */
export const ClassificationNodesUpdateStructureGroupEnum = {
    Areas: 'areas',
    Iterations: 'iterations'
} as const;
export type ClassificationNodesUpdateStructureGroupEnum = typeof ClassificationNodesUpdateStructureGroupEnum[keyof typeof ClassificationNodesUpdateStructureGroupEnum];
