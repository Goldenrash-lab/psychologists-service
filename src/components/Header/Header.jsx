import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../Layout/Layout.styled";
import {
  HeaderAvatarBox,
  HeaderBtnWrapper,
  HeaderStyled,
  HeaderUsername,
  HeaderWrapper,
  LogOutBtn,
  LoginBtn,
  LogoLink,
  LogoNavWrapper,
  LogoSpan,
  Nav,
  NavLinkStyled,
  RegBtn,
} from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { logout } from "../../store/auth/slice";
import { toast } from "react-toastify";
import DefaultAvatarSvg from "../../images/defaultAvatarSvg";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ setModalLogin, setModalSignUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  async function handleLogOut() {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
    toast.info("Bye bye!");
    navigate("/");
  }

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
            {user && <NavLinkStyled to={"/favorites"}>Favorites</NavLinkStyled>}
          </Nav>
        </LogoNavWrapper>
        <HeaderBtnWrapper>
          {!user ? (
            <>
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
              </RegBtn>{" "}
            </>
          ) : (
            <>
              <HeaderAvatarBox>
                <DefaultAvatarSvg />
                <HeaderUsername>{user?.email ?? "username"}</HeaderUsername>
              </HeaderAvatarBox>
              <LogOutBtn
                type="button"
                aria-label="log out"
                onClick={handleLogOut}
              >
                Log Out
              </LogOutBtn>
            </>
          )}
        </HeaderBtnWrapper>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
