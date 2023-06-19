"use client";
import { FilterByPriority } from "./filter-priority";
import { FilterByType } from "./filter-type";
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
