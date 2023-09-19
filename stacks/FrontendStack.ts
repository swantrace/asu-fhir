import { AstroSite, StackContext, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function FrontendStack({ stack, app }: StackContext) {
  const { api } = use(ApiStack);

  const site = new AstroSite(stack, "Site", {
    path: "packages/frontend",
    buildCommand: "pnpm run build",
    environment: {
      PUBLIC_API_URL: api.url,
    },
  });

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: api.url,
  });
}
