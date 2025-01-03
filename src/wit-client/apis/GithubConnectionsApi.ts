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
  GitHubConnectionModel,
  GitHubConnectionRepoModel,
  GitHubConnectionReposBatchRequest,
} from '../models/index';
import {
    GitHubConnectionModelFromJSON,
    GitHubConnectionModelToJSON,
    GitHubConnectionRepoModelFromJSON,
    GitHubConnectionRepoModelToJSON,
    GitHubConnectionReposBatchRequestFromJSON,
    GitHubConnectionReposBatchRequestToJSON,
} from '../models/index';

export interface GithubConnectionsGetGithubConnectionRepositoriesRequest {
    organization: string;
    project: string;
    connectionId: string;
    apiVersion: string;
}

export interface GithubConnectionsGetGithubConnectionsRequest {
    organization: string;
    project: string;
    apiVersion: string;
}

export interface GithubConnectionsUpdateRequest {
    organization: string;
    project: string;
    connectionId: string;
    apiVersion: string;
    body: GitHubConnectionReposBatchRequest;
}

/**
 * 
 */
export class GithubConnectionsApi extends runtime.BaseAPI {

    /**
     * Gets a list of repos within specified github connection.
     */
    async githubConnectionsGetGithubConnectionRepositoriesRaw(requestParameters: GithubConnectionsGetGithubConnectionRepositoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GitHubConnectionRepoModel>>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling githubConnectionsGetGithubConnectionRepositories().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling githubConnectionsGetGithubConnectionRepositories().'
            );
        }

        if (requestParameters['connectionId'] == null) {
            throw new runtime.RequiredError(
                'connectionId',
                'Required parameter "connectionId" was null or undefined when calling githubConnectionsGetGithubConnectionRepositories().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling githubConnectionsGetGithubConnectionRepositories().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.githubconnections"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/githubconnections/{connectionId}/repos`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters['connectionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GitHubConnectionRepoModelFromJSON));
    }

    /**
     * Gets a list of repos within specified github connection.
     */
    async githubConnectionsGetGithubConnectionRepositories(requestParameters: GithubConnectionsGetGithubConnectionRepositoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GitHubConnectionRepoModel>> {
        const response = await this.githubConnectionsGetGithubConnectionRepositoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of github connections
     */
    async githubConnectionsGetGithubConnectionsRaw(requestParameters: GithubConnectionsGetGithubConnectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GitHubConnectionModel>>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling githubConnectionsGetGithubConnections().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling githubConnectionsGetGithubConnections().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling githubConnectionsGetGithubConnections().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['apiVersion'] != null) {
            queryParameters['api-version'] = requestParameters['apiVersion'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.githubconnections"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/githubconnections`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GitHubConnectionModelFromJSON));
    }

    /**
     * Gets a list of github connections
     */
    async githubConnectionsGetGithubConnections(requestParameters: GithubConnectionsGetGithubConnectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GitHubConnectionModel>> {
        const response = await this.githubConnectionsGetGithubConnectionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add/remove list of repos within specified github connection.
     */
    async githubConnectionsUpdateRaw(requestParameters: GithubConnectionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GitHubConnectionRepoModel>>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling githubConnectionsUpdate().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling githubConnectionsUpdate().'
            );
        }

        if (requestParameters['connectionId'] == null) {
            throw new runtime.RequiredError(
                'connectionId',
                'Required parameter "connectionId" was null or undefined when calling githubConnectionsUpdate().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling githubConnectionsUpdate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling githubConnectionsUpdate().'
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.githubconnections_manage"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/githubconnections/{connectionId}/reposBatch`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters['connectionId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GitHubConnectionReposBatchRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GitHubConnectionRepoModelFromJSON));
    }

    /**
     * Add/remove list of repos within specified github connection.
     */
    async githubConnectionsUpdate(requestParameters: GithubConnectionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GitHubConnectionRepoModel>> {
        const response = await this.githubConnectionsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
