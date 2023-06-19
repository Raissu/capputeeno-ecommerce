"use client";
import { FilterByPriority } from "./filter-priority";
import { FilterByType } from "./filter-type";
import { FilterContainerBar } from "./styles";

export function FilterBar() {
  return (
    <FilterContainerBar>
      <FilterByType />
      <FilterByPriority />
    </FilterContainerBar>
  );
}
