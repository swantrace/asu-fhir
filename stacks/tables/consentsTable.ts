import { type Stack, Table } from "sst/constructs";

const createConsentsTable = (stack: Stack) => {
  const consentsTable = new Table(stack, "ConsentsTable", {
    fields: {
      patientId: "string",
      consentId: "string",
      consentType: "string",
    },
    primaryIndex: {
      partitionKey: "patientId",
      sortKey: "consentId",
    },
  });
  return consentsTable;
};

export default createConsentsTable;
