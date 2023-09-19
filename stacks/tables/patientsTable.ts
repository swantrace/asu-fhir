import { type Stack, Table } from "sst/constructs";

const createPatientsTable = (stack: Stack) => {
  const patientsTable = new Table(stack, "PatientsTable", {
    fields: {
      patientId: "string",
    },
    primaryIndex: {
      partitionKey: "patientId",
    },
  });
  return patientsTable;
};

export default createPatientsTable;
