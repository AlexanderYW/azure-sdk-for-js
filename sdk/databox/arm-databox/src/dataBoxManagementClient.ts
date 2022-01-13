/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { OperationsImpl, JobsImpl, ServiceImpl } from "./operations";
import { Operations, Jobs, Service } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  DataBoxManagementClientOptionalParams,
  MitigateJobRequest,
  MitigateOptionalParams
} from "./models";

export class DataBoxManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DataBoxManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Subscription Id
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: DataBoxManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DataBoxManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-databox/5.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-08-01-preview";
    this.operations = new OperationsImpl(this);
    this.jobs = new JobsImpl(this);
    this.service = new ServiceImpl(this);
  }

  /**
   * Request to mitigate for a given job
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param resourceGroupName The Resource Group Name
   * @param mitigateJobRequest Mitigation Request
   * @param options The options parameters.
   */
  mitigate(
    jobName: string,
    resourceGroupName: string,
    mitigateJobRequest: MitigateJobRequest,
    options?: MitigateOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { jobName, resourceGroupName, mitigateJobRequest, options },
      mitigateOperationSpec
    );
  }

  operations: Operations;
  jobs: Jobs;
  service: Service;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const mitigateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/mitigate",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.mitigateJobRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
