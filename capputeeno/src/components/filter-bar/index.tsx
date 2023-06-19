"use client";
import { FilterByPriority } from "./filter-priority/filter-by-priority";
import { FilterByType } from "./filter-type/filter-by-type";
import { FilterContainerBar } from "./styles";

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainerBar>
      <FilterByType />
      <FilterByPriority />
    </FilterContainerBar>
  );
}
