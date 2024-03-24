import { sortBy } from "lodash";

import employeeData from "../jest/data/data1.json";
import { prefixRoute } from "./utils/routing.mjs";

const handler = () => {
  const sortedEmployees = sortBy(employeeData.employees, "name");

  return prefixRoute(sortedEmployees[0].name);
};

console.log(handler());
