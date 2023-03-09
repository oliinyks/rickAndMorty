import styled from "@emotion/styled";

export const Btn = styled.button`
  margin-bottom: 20px;
  width: 160px;
  height: 40px;
  border: 1px solid ${(p) => `${p.theme.colors.border}`};
  border-radius: 8px;
  background-color: transparent;
`;

export const Img = styled.img`
  display: block;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 32px;

  @media (min-width: 767px) {
    margin-bottom: 16px;
    max-width: 400px;
  }
  @media (min-width: 1440) {
    max-width: 600px;
  }
`;
