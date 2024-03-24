import { sortBy } from "lodash";

import { prefixRoute } from "#/utils/routing.mjs";
import employeeData from "../../jest/data/data1.json";

const handler = () => {
  const sortedEmployees = sortBy(employeeData.employees, "name");

  return prefixRoute(sortedEmployees[0].name);
};

console.log(handler());
