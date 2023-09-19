import { type StackContext, Bucket } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  const researchConsentPdfsBucket = new Bucket(stack, "ResearchConsentPdfs");

  return {
    researchConsentPdfsBucket,
  };
}
