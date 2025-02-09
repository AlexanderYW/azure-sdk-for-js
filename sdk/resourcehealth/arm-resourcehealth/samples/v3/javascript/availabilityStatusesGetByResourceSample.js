/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftResourceHealth } = require("@azure/arm-resourcehealth");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets current availability status for a single resource
 *
 * @summary Gets current availability status for a single resource
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/stable/2017-07-01/examples/AvailabilityStatus_GetByResource.json
 */
async function getCurrentHealthByResource() {
  const subscriptionId =
    process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceUri = "resourceUri";
  const expand = "recommendedactions";
  const options = { expand };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const result = await client.availabilityStatuses.getByResource(resourceUri, options);
  console.log(result);
}

async function main() {
  getCurrentHealthByResource();
}

main().catch(console.error);
