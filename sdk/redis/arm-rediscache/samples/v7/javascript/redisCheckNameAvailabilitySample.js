/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the redis cache name is valid and is not already in use.
 *
 * @summary Checks that the redis cache name is valid and is not already in use.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2022-05-01/examples/RedisCacheCheckNameAvailability.json
 */
async function redisCacheCheckNameAvailability() {
  const subscriptionId = "subid";
  const parameters = {
    name: "cacheName",
    type: "Microsoft.Cache/Redis",
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.redis.checkNameAvailability(parameters);
  console.log(result);
}

redisCacheCheckNameAvailability().catch(console.error);
