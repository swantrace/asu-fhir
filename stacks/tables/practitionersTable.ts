import { type Stack, Table } from "sst/constructs";

const createPractitionersTable = (stack: Stack) => {
  return new Table(stack, "PractitionersTable", {
    fields: {
      practitionerId: "string",
    },
    primaryIndex: {
      partitionKey: "practitionerId",
    },
  });
};

export default createPractitionersTable;
