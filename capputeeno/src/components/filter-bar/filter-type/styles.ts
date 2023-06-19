import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  gap: 40px;
`;

export const FilterItems = styled.li<FilterItemProps>`
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