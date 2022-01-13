/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  ServicesImpl,
  ConfigServersImpl,
  MonitoringSettingsImpl,
  AppsImpl,
  BindingsImpl,
  StoragesImpl,
  CertificatesImpl,
  CustomDomainsImpl,
  DeploymentsImpl,
  OperationsImpl,
  RuntimeVersionsImpl,
  SkusImpl
} from "./operations";
import {
  Services,
  ConfigServers,
  MonitoringSettings,
  Apps,
  Bindings,
  Storages,
  Certificates,
  CustomDomains,
  Deployments,
  Operations,
  RuntimeVersions,
  Skus
} from "./operationsInterfaces";
import { AppPlatformManagementClientOptionalParams } from "./models";

export class AppPlatformManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AppPlatformManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AppPlatformManagementClientOptionalParams
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
    const defaults: AppPlatformManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-appplatform/2.0.0-beta.2`;
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
    this.apiVersion = options.apiVersion || "2021-09-01-preview";
    this.services = new ServicesImpl(this);
    this.configServers = new ConfigServersImpl(this);
    this.monitoringSettings = new MonitoringSettingsImpl(this);
    this.apps = new AppsImpl(this);
    this.bindings = new BindingsImpl(this);
    this.storages = new StoragesImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.customDomains = new CustomDomainsImpl(this);
    this.deployments = new DeploymentsImpl(this);
    this.operations = new OperationsImpl(this);
    this.runtimeVersions = new RuntimeVersionsImpl(this);
    this.skus = new SkusImpl(this);
  }

  services: Services;
  configServers: ConfigServers;
  monitoringSettings: MonitoringSettings;
  apps: Apps;
  bindings: Bindings;
  storages: Storages;
  certificates: Certificates;
  customDomains: CustomDomains;
  deployments: Deployments;
  operations: Operations;
  runtimeVersions: RuntimeVersions;
  skus: Skus;
}
