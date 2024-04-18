import { NavLink } from "react-router-dom";
import { Container } from "../Layout/Layout.styled";
import {
  HeaderBtnWrapper,
  HeaderStyled,
  HeaderWrapper,
  LoginBtn,
  LogoLink,
  LogoNavWrapper,
  LogoSpan,
  Nav,
  NavLinkStyled,
  RegBtn,
} from "./Header.styled";

const Header = ({ setModalLogin, setModalSignUp }) => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <LogoNavWrapper>
          <LogoLink href="/" aria-label="Link to home page">
            <LogoSpan>psychologists.</LogoSpan>services
          </LogoLink>
          <Nav>
            <NavLinkStyled to={"/"}>Home</NavLinkStyled>
            <NavLinkStyled to={"/psychologists"}>Psychologists</NavLinkStyled>
          </Nav>
        </LogoNavWrapper>
        <HeaderBtnWrapper>
          <LoginBtn
            type="button"
            aria-label="login"
            onClick={() => setModalLogin(true)}
          >
            Log In
          </LoginBtn>
          <RegBtn
            type="button"
            aria-label="registration"
            onClick={() => setModalSignUp(true)}
          >
            Registration
          </RegBtn>
        </HeaderBtnWrapper>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
