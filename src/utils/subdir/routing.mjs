import { sortBy } from "lodash";

import { PLUGIN_BASE_URL } from "#/constants";
import employeeData from "../../../jest/data/data1.json";

// Prefixes the route with the base URL of the plugin
export function prefixRoute(route) {
  console.log(sortBy(employeeData.employees, "name"));

  return `${PLUGIN_BASE_URL}/${route}`;
}
