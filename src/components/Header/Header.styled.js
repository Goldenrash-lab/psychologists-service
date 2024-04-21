import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderTag = styled.header`
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;

export const HeaderStyled = styled.div``;
export const HeaderWrapper = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const NavLinkStyled = styled(NavLink)``;
export const LogoLink = styled.a`
  margin-right: 130px;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
`;
export const LogoSpan = styled.span`
  color: var(--green);
`;
export const HeaderBtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const LogoNavWrapper = styled.div`
  display: flex;
`;
export const LoginBtn = styled.button`
  padding: 14px 40px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  width: 124px;
  height: 48px;
  white-space: nowrap;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--black);
  display: flex;
  place-items: center;
  background-color: transparent;
  cursor: pointer;
`;
export const RegBtn = styled.button`
  color: var(--black);
  border: 1px solid var(--light-green);
  padding: 14px 40px;
  border-radius: 30px;
  width: 171px;
  height: 48px;
  white-space: nowrap;
  background: #54be96;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--white);
  display: flex;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--hover-green);
  }
`;

export const LogOutBtn = styled.button`
  padding: 14px 40px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  width: 135px;
  height: 48px;
  white-space: nowrap;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--black);
  display: flex;
  place-items: center;
  background-color: transparent;
  cursor: pointer;
`;
export const HeaderAvatarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 28px;
`;
export const HeaderUsername = styled.p`
  line-height: 125%;
  letter-spacing: -0.01em;
  font-weight: 500;
`;
