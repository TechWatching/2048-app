import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import * as azure_native from "@pulumi/azure-native";

const clientConfig = azure_native.authorization.getClientConfigOutput();
const subscriptionId = clientConfig.apply(config => config.subscriptionId);

// Get the existing resource group
const id = pulumi.interpolate`/subscriptions/${subscriptionId}/resourceGroups/rg-khaoulanajmeddine29-at-gmail-com`;
const resourceGroup = azure_native.resources.ResourceGroup.get("rg-khaoulanajmeddine29-at-gmail-com", id);

const environment = pulumi.getStack();

const staticSite = new azure_native.web.StaticSite("staticSite", {
  branch: "master",
  name: pulumi.interpolate`stapp-2048-app-${environment}`,
  repositoryUrl: "",
  location: "eastus2",
  resourceGroupName: resourceGroup.name,
  sku: {
    name: "Free",
    tier: "Free",
  },
  tags: {
    Class: "EI8IT213",
  },
});

export const hostname = staticSite.defaultHostname;

const secrets = azure_native.web.listStaticSiteSecretsOutput({
  name: staticSite.name,
  resourceGroupName: resourceGroup.name,
});

export const deploymentToken = pulumi.secret(
  secrets.apply(s => s.properties.apiKey)
);

export const resourceGroupName = resourceGroup.name;