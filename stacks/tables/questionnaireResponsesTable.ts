import { type Stack, Table } from "sst/constructs";

const createQuestionnaireResponsesTable = (stack: Stack) => {
  const questionnaireResponsesTable = new Table(
    stack,
    "QuestionnaireResponsesTable",
    {
      fields: {
        questionnaireResponseId: "string",
      },
      primaryIndex: {
        partitionKey: "questionnaireResponseId",
      },
    }
  );
  return questionnaireResponsesTable;
};

export default createQuestionnaireResponsesTable;
