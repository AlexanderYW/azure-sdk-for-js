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
 * This sample demonstrates how to Gets all firewall rules in the specified redis cache.
 *
 * @summary Gets all firewall rules in the specified redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2022-05-01/examples/RedisCacheFirewallRulesList.json
 */
async function redisCacheFirewallRulesList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const cacheName = "cache1";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firewallRules.list(resourceGroupName, cacheName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

redisCacheFirewallRulesList().catch(console.error);
