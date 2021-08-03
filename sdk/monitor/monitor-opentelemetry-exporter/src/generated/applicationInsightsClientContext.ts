/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ApplicationInsightsClientOptionalParams } from "./models";

export class ApplicationInsightsClientContext extends coreClient.ServiceClient {
  host: string;

  /**
   * Initializes a new instance of the ApplicationInsightsClientContext class.
   * @param options The parameter options
   */
  constructor(options?: ApplicationInsightsClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ApplicationInsightsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-monitor-opentelemetry-exporter/1.0.0-beta.4`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{Host}/v2"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.host = options.host || "https://dc.services.visualstudio.com";
  }
}
