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
import type { JsonPatchOperation } from './JsonPatchOperation';
import {
    JsonPatchOperationFromJSON,
    JsonPatchOperationFromJSONTyped,
    JsonPatchOperationToJSON,
    JsonPatchOperationToJSONTyped,
} from './JsonPatchOperation';

/**
 * The JSON model for JSON Patch Operations
 * @export
 * @interface JsonPatchDocument
 */
export interface JsonPatchDocument {
}

/**
 * Check if a given object implements the JsonPatchDocument interface.
 */
export function instanceOfJsonPatchDocument(value: object): value is JsonPatchDocument {
    return true;
}

export function JsonPatchDocumentFromJSON(json: any): JsonPatchDocument {
    return JsonPatchDocumentFromJSONTyped(json, false);
}

export function JsonPatchDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonPatchDocument {
    return json;
}

export function JsonPatchDocumentToJSON(json: any): JsonPatchDocument {
    return JsonPatchDocumentToJSONTyped(json, false);
}

export function JsonPatchDocumentToJSONTyped(value?: JsonPatchDocument | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

