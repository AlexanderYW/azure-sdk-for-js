/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  RoleAssignmentScheduleRequest as RoleAssignmentScheduleRequestMapper,
  RoleEligibilityScheduleRequest as RoleEligibilityScheduleRequestMapper,
  RoleManagementPolicy as RoleManagementPolicyMapper,
  RoleManagementPolicyAssignment as RoleManagementPolicyAssignmentMapper,
  RoleAssignmentCreateParameters as RoleAssignmentCreateParametersMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const roleAssignmentScheduleName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleName",
  mapper: {
    serializedName: "roleAssignmentScheduleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const roleAssignmentScheduleInstanceName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleInstanceName",
  mapper: {
    serializedName: "roleAssignmentScheduleInstanceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleAssignmentScheduleRequestMapper
};

export const roleAssignmentScheduleRequestName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleRequestName",
  mapper: {
    serializedName: "roleAssignmentScheduleRequestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleEligibilityScheduleName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleName",
  mapper: {
    serializedName: "roleEligibilityScheduleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleEligibilityScheduleInstanceName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleInstanceName",
  mapper: {
    serializedName: "roleEligibilityScheduleInstanceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleEligibilityScheduleRequestMapper
};

export const roleEligibilityScheduleRequestName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleRequestName",
  mapper: {
    serializedName: "roleEligibilityScheduleRequestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleManagementPolicyName: OperationURLParameter = {
  parameterPath: "roleManagementPolicyName",
  mapper: {
    serializedName: "roleManagementPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleManagementPolicyMapper
};

export const roleManagementPolicyAssignmentName: OperationURLParameter = {
  parameterPath: "roleManagementPolicyAssignmentName",
  mapper: {
    serializedName: "roleManagementPolicyAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleManagementPolicyAssignmentMapper
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const tenantId: OperationQueryParameter = {
  parameterPath: ["options", "tenantId"],
  mapper: {
    serializedName: "tenantId",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceProviderNamespace: OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    serializedName: "resourceProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceType: OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const roleAssignmentName: OperationURLParameter = {
  parameterPath: "roleAssignmentName",
  mapper: {
    serializedName: "roleAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleAssignmentCreateParametersMapper
};

export const roleAssignmentId: OperationURLParameter = {
  parameterPath: "roleAssignmentId",
  mapper: {
    serializedName: "roleAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
