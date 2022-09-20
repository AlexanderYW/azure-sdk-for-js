/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ManagedPrivateEndpointsCheckNameRequest,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Checks that the managed private endpoints resource name is valid and is not already in use.
 *
 * @summary Checks that the managed private endpoints resource name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoManagedPrivateEndpointsCheckNameAvailability.json
 */
async function kustoManagedPrivateEndpointsCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const resourceName: ManagedPrivateEndpointsCheckNameRequest = {
    name: "pme1",
    type: "Microsoft.Kusto/clusters/managedPrivateEndpoints"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.managedPrivateEndpoints.checkNameAvailability(
    resourceGroupName,
    clusterName,
    resourceName
  );
  console.log(result);
}

kustoManagedPrivateEndpointsCheckNameAvailability().catch(console.error);
