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
  StreamedBatch,
} from '../models/index';
import {
    StreamedBatchFromJSON,
    StreamedBatchToJSON,
} from '../models/index';

export interface WorkItemRevisionsDiscussionsReadReportingDiscussionsRequest {
    organization: string;
    project: string;
    apiVersion: string;
    continuationToken?: string;
    $maxPageSize?: number;
}

/**
 * 
 */
export class WorkItemRevisionsDiscussionsApi extends runtime.BaseAPI {

    /**
     */
    async workItemRevisionsDiscussionsReadReportingDiscussionsRaw(requestParameters: WorkItemRevisionsDiscussionsReadReportingDiscussionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StreamedBatch>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling workItemRevisionsDiscussionsReadReportingDiscussions().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling workItemRevisionsDiscussionsReadReportingDiscussions().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling workItemRevisionsDiscussionsReadReportingDiscussions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['continuationToken'] != null) {
            queryParameters['continuationToken'] = requestParameters['continuationToken'];
        }

        if (requestParameters['$maxPageSize'] != null) {
            queryParameters['$maxPageSize'] = requestParameters['$maxPageSize'];
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
            path: `/{organization}/{project}/_apis/wit/reporting/workItemRevisions/discussions`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamedBatchFromJSON(jsonValue));
    }

    /**
     */
    async workItemRevisionsDiscussionsReadReportingDiscussions(requestParameters: WorkItemRevisionsDiscussionsReadReportingDiscussionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StreamedBatch> {
        const response = await this.workItemRevisionsDiscussionsReadReportingDiscussionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
