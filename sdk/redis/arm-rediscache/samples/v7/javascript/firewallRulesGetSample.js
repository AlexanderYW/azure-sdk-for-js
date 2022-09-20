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
 * This sample demonstrates how to Gets a single firewall rule in a specified redis cache.
 *
 * @summary Gets a single firewall rule in a specified redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2022-05-01/examples/RedisCacheFirewallRuleGet.json
 */
async function redisCacheFirewallRuleGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const cacheName = "cache1";
  const ruleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.get(resourceGroupName, cacheName, ruleName);
  console.log(result);
}

redisCacheFirewallRuleGet().catch(console.error);
