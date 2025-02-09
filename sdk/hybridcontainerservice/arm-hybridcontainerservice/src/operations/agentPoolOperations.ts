/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AgentPoolOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridContainerServiceClient } from "../hybridContainerServiceClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AgentPoolGetOptionalParams,
  AgentPoolGetResponse,
  AgentPool,
  AgentPoolCreateOrUpdateOptionalParams,
  AgentPoolCreateOrUpdateResponse,
  AgentPoolDeleteOptionalParams,
  AgentPoolUpdateOptionalParams,
  AgentPoolUpdateResponse,
  AgentPoolListByProvisionedClusterOptionalParams,
  AgentPoolListByProvisionedClusterResponse
} from "../models";

/** Class containing AgentPoolOperations operations. */
export class AgentPoolOperationsImpl implements AgentPoolOperations {
  private readonly client: HybridContainerServiceClient;

  /**
   * Initialize a new instance of the class AgentPoolOperations class.
   * @param client Reference to the service client
   */
  constructor(client: HybridContainerServiceClient) {
    this.client = client;
  }

  /**
   * Gets the agent pool in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    provisionedClustersName: string,
    agentPoolName: string,
    options?: AgentPoolGetOptionalParams
  ): Promise<AgentPoolGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, provisionedClustersName, agentPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates the agent pool in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster
   * @param agentPool The agentPool resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    provisionedClustersName: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AgentPoolCreateOrUpdateResponse>,
      AgentPoolCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AgentPoolCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        provisionedClustersName,
        agentPoolName,
        agentPool,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates the agent pool in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster
   * @param agentPool The agentPool resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    provisionedClustersName: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolCreateOrUpdateOptionalParams
  ): Promise<AgentPoolCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      provisionedClustersName,
      agentPoolName,
      agentPool,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the agent pool in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    provisionedClustersName: string,
    agentPoolName: string,
    options?: AgentPoolDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, provisionedClustersName, agentPoolName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates the agent pool in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param agentPoolName Parameter for the name of the agent pool in the provisioned cluster
   * @param agentPool The agentPool resource definition
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    provisionedClustersName: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolUpdateOptionalParams
  ): Promise<AgentPoolUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        provisionedClustersName,
        agentPoolName,
        agentPool,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Gets the agent pools in the Hybrid AKS provisioned cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param provisionedClustersName Parameter for the name of the provisioned cluster
   * @param options The options parameters.
   */
  listByProvisionedCluster(
    resourceGroupName: string,
    provisionedClustersName: string,
    options?: AgentPoolListByProvisionedClusterOptionalParams
  ): Promise<AgentPoolListByProvisionedClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, provisionedClustersName, options },
      listByProvisionedClusterOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/provisionedClusters/{provisionedClustersName}/agentPools/{agentPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisionedClustersName,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/provisionedClusters/{provisionedClustersName}/agentPools/{agentPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    202: {
      bodyMapper: Mappers.AgentPool
    },
    204: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.agentPool,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisionedClustersName,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/provisionedClusters/{provisionedClustersName}/agentPools/{agentPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisionedClustersName,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/provisionedClusters/{provisionedClustersName}/agentPools/{agentPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    202: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.agentPool,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisionedClustersName,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByProvisionedClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/provisionedClusters/{provisionedClustersName}/agentPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.provisionedClustersName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
