import { type StackContext } from "sst/constructs";
import {
  createConsentsTable,
  createOrganizationsTable,
  createPatientsTable,
  createPractitionersTable,
  createQuestionnaireResponsesTable,
  createQuestionnairesTable,
  createRelatedPersonsTable,
} from "./tables";

export function DatabaseStack({ stack }: StackContext) {
  const patientsTable = createPatientsTable(stack);
  const consentsTable = createConsentsTable(stack);
  const relatedPersonsTable = createRelatedPersonsTable(stack);
  const organizationsTable = createOrganizationsTable(stack);
  const practitionersTable = createPractitionersTable(stack);
  const questionnairesTable = createQuestionnairesTable(stack);
  const questionnaireResponsesTable = createQuestionnaireResponsesTable(stack);

  return {
    patientsTable,
    consentsTable,
    relatedPersonsTable,
    organizationsTable,
    practitionersTable,
    questionnairesTable,
    questionnaireResponsesTable,
  };
}
