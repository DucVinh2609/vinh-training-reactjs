import { listUnits } from "./contants";

function getNameUnit(id) {
  return listUnits.find(item => item.id === id).text
};

export { getNameUnit };