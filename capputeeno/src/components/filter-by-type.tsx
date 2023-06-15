"use client";
import useFilter from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  gap: 40px;
`;

const FilterItems = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

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
