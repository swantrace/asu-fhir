import { type Stack, Table } from "sst/constructs";

const createQuestionnairesTable = (stack: Stack) => {
  const questionnairesTable = new Table(stack, "QuestionnairesTable", {
    fields: {
      questionnaireId: "string",
    },
    primaryIndex: {
      partitionKey: "questionnaireId",
    },
  });
  return questionnairesTable;
};

export default createQuestionnairesTable;
