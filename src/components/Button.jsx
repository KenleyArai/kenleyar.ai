import styled from "styled-components";

const Button = styled.div`
  display: inline-block;
  padding: 0.5rem;
  align-text: center;
  background-color: #cae7b9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3),
      0 14px 12px 0 rgba(0, 0, 0, 0.17);
  }
`;

export default Button;
