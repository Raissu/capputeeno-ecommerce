"use client";
import useFilter from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { FilterList, FilterItems } from "./styles";

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <div>
      <FilterList>
        <FilterItems
          selected={type === FilterType.ALL}
          onClick={() => handleChangeType(FilterType.ALL)}
        >
          TODOS OS PRODUTOS
        </FilterItems>
        <FilterItems
          selected={type === FilterType.SHIRT}
          onClick={() => handleChangeType(FilterType.SHIRT)}
        >
          CAMISETAS
        </FilterItems>
        <FilterItems
          selected={type === FilterType.MUG}
          onClick={() => handleChangeType(FilterType.MUG)}
        >
          CANECAS
        </FilterItems>
      </FilterList>
    </div>
  );
}
