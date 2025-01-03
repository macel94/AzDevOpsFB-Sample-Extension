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
  SendMailBody,
} from '../models/index';
import {
    SendMailBodyFromJSON,
    SendMailBodyToJSON,
} from '../models/index';

export interface SendMailSendMailRequest {
    organization: string;
    project: string;
    apiVersion: string;
    body: SendMailBody;
}

/**
 * 
 */
export class SendMailApi extends runtime.BaseAPI {

    /**
     * RESTful method to send mail for selected/queried work items.
     */
    async sendMailSendMailRaw(requestParameters: SendMailSendMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling sendMailSendMail().'
            );
        }

        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling sendMailSendMail().'
            );
        }

        if (requestParameters['apiVersion'] == null) {
            throw new runtime.RequiredError(
                'apiVersion',
                'Required parameter "apiVersion" was null or undefined when calling sendMailSendMail().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendMailSendMail().'
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["vso.work"]);
        }

        const response = await this.request({
            path: `/{organization}/{project}/_apis/wit/sendmail`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMailBodyToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * RESTful method to send mail for selected/queried work items.
     */
    async sendMailSendMail(requestParameters: SendMailSendMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendMailSendMailRaw(requestParameters, initOverrides);
    }

}