import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

function useFilter() {
  return useContext(FilterContext);
}

export default useFilter;
