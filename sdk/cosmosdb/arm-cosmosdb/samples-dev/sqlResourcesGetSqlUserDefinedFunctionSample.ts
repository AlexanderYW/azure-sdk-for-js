/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlUserDefinedFunctionGet.json
 */
async function cosmosDbSqlUserDefinedFunctionGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const userDefinedFunctionName = "userDefinedFunctionName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlUserDefinedFunction(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    userDefinedFunctionName
  );
  console.log(result);
}

cosmosDbSqlUserDefinedFunctionGet().catch(console.error);
