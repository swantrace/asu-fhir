import { type Stack, Table } from "sst/constructs";

const createOrganizationsTable = (stack: Stack) => {
  const organizationsTable = new Table(stack, "OrganizationsTable", {
    fields: {
      organizationId: "string",
    },
    primaryIndex: {
      partitionKey: "organizationId",
    },
  });
  return organizationsTable;
};

export default createOrganizationsTable;
