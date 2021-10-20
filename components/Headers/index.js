import styled from "@emotion/styled";
import Link from "next/link";
import MenuIcon from "../Graph/Menu";
import { useRouter } from "next/router";

const NavWrapper = styled.header`
  padding-top: 28px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLogo = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const NavOptionMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavOption = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  &:hover {
    background: #f2f2f2;
  }
  @media (max-width: 1000px) {
    margin-left: 2rem;
  }
  @media (max-width: 850px) {
    margin-left: 1rem;
  }
  @media (max-width: 756px) {
    display: none;
  }
`;
const NavOptionLink = styled.a`
  text-decoration: none;
  ${(props) => props?.$bold}
`;
const NavOptionNavigate = (props) => {
  const { text, onClickGoTo } = props;
  const { asPath } = useRouter();

  return (
    <NavOption>
      <Link href={onClickGoTo}>
        <NavOptionLink
          $bold={asPath === onClickGoTo ? "font-weight: bold" : null}
        >
          {text}
        </NavOptionLink>
      </Link>
    </NavOption>
  );
};

const Menu = styled.div`
  display: none;
  @media (max-width: 756px) {
    display: block;
    float: right;
    cursor: pointer;
  }
`;

const ContactMeButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-right: 4rem;
  background: #001219;
  border-radius: 50px;
  width: 150px;
  height: 42px;
  color: #fff;
  @media (max-width: 1000px) {
    margin-right: 2rem;
  }
  @media (max-width: 850px) {
    margin-right: 1rem;
  }
  @media (max-width: 756px) {
    display: none;
  }
`;

function Header() {
  return (
    <NavWrapper>
      <NavContainer>
        <NavLogo>Hoan Tran</NavLogo>
        <NavOptionMenu>
          <NavOptionNavigate text="Home" onClickGoTo="/" />
          <NavOptionNavigate text="About" onClickGoTo="/about" />
          <NavOptionNavigate text="Products" onClickGoTo="/products" />
        </NavOptionMenu>
        <ContactMeButton>Contact me</ContactMeButton>
        <Menu>
          <MenuIcon />
        </Menu>
      </NavContainer>
    </NavWrapper>
  );
}

export default Header;
