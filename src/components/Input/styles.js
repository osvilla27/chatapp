import styled from "styled-components";

export const CommonInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 20px;
  padding-left: 5px;
  border-radius: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
  }
`;

export const IconContainer = styled.div`
  flex: 0 0;
  padding-top: 3px
`;