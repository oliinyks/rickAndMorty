import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLinkBack = styled(NavLink)`
  display: flex;
  margin-bottom: 32px;
  text-decoration: none;
  color: ${(p) => `${p.theme.colors.button}`};
`;

export const ButtonText = styled.p`
  margin-left: 12px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  font-family: "Karla", sans-serif;
`;

export const Box = styled.div`
  text-align: center;

  @media (min-width: 400px) {
    display: grid;
    place-items: center;
    /* text-align: left; */
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 16px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  overflow: hidden;
  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
  }
`;
export const MainTitle = styled.h1`
  margin-bottom: 48px;
  align-items: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: ${(p) => `${p.theme.colors.infoTitle}`};

  @media (min-width: 767px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
export const SecondTitle = styled.h2`
  margin-bottom: 57px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${(p) => `${p.theme.colors.secondaryText}`};
  text-align: left;
`;

export const InfoBox = styled.div`
  width: 100%;
  text-align: left;
  @media (min-width: 400px) {
    width: 40%;
  }
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${(p) => `${p.theme.colors.infoTitle}`};
`;

export const CategoryText = styled.p`
  padding-bottom: 11px;
  margin-bottom: 9px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${(p) => `${p.theme.colors.infoText}`};
  border-bottom: 1px solid ${(p) => `${p.theme.colors.borderInfo}`};
`;
