import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const Items = styled.ul`
  display: grid;
  grid-gap: 20px;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  letter-spacing: 0.15px;
`;
export const Img = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  padding: 16px 16px 12px;
  height: 110px;
`;

export const Title = styled.h1`
  margin-bottom: 1px;
  color: ${(p) => `${p.theme.colors.title}`};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: ${(p) => `${p.theme.colors.text}`};
`;
