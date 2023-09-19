import { type StackContext, Api, use } from "sst/constructs";
import { DatabaseStack } from "./DatabaseStack";

export function ApiStack({ stack }: StackContext) {
  const {
    patientsTable,
    consentsTable,
    relatedPersonsTable,
    organizationsTable,
    practitionersTable,
    questionnairesTable,
    questionnaireResponsesTable,
  } = use(DatabaseStack);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [
          patientsTable,
          consentsTable,
          relatedPersonsTable,
          organizationsTable,
          practitionersTable,
          questionnairesTable,
          questionnaireResponsesTable,
        ],
      },
    },
    routes: {
      "GET /consents/{id}": "packages/functions/src/consents/get.main",
      "POST /consents": "packages/functions/src/consents/create.main",
    },
  });

  return {
    api,
  };
}
