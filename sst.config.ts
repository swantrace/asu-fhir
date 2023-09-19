import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";
import { DatabaseStack } from "./stacks/DatabaseStack";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "asu-fhir",
      region: "us-east-1",
    };
  },
  stacks(app) {
    // Remove all resources when non-prod stages are removed
    if (app.stage !== "prod") {
      app.setDefaultRemovalPolicy("destroy");
    }

    app.stack(DatabaseStack).stack(StorageStack).stack(FrontendStack);
  },
} satisfies SSTConfig;
