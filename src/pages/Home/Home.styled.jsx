import styled from "@emotion/styled";

export const Img = styled.img`
  display: block;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 16px;
  
  @media (min-width: 767px) {
    max-width: 400px;
  }
  @media (min-width: 1440) {
    max-width: 600px;
  }
`;
