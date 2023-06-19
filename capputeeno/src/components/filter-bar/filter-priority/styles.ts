import styled from "styled-components";

export const FilterContainerPriority = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`;

export const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  padding: 12px 16px;

  top: 100%;

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;

  border-radius: 4px;

  li {
    color: var(--text-dark);

    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: var(--orange-low);
    }
  }

  li + li {
    margin-top: 4px;
  }
`;