import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  margin-bottom: 33px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 20px 20px 20px 40px;
  border: 1px solid ${(p) => `${p.theme.colors.border}`};
  border-radius: 8px;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(50%, -50%);

  padding: 0;
  border: none;
  background-color: transparent;
`;
