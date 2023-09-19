import { type Stack, Table } from "sst/constructs";

const createRelatedPersonsTable = (stack: Stack) => {
  const relatedPersonsTable = new Table(stack, "RelatedPersonsTable", {
    fields: {
      relatedPersonId: "string",
      patientId: "string",
    },
    primaryIndex: {
      partitionKey: "patientId",
      sortKey: "relatedPersonId",
    },
  });
  return relatedPersonsTable;
};

export default createRelatedPersonsTable;
