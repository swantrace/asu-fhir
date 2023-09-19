import { AstroSite, StackContext, use } from "sst/constructs";

export function FrontendStack({ stack, app }: StackContext) {
  const site = new AstroSite(stack, "Site", {
    path: "packages/frontend",
    buildCommand: "pnpm run build",
  });

  return {
    site,
  };
}
