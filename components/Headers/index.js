import styled from "@emotion/styled";
import Link from "next/link";
import MenuIcon from "../Graph/Menu";
import { useRouter } from "next/router";
import { BPLarge, BPMedium, BPSmall, BreakPoints } from "../BreakPoints";

const NavWrapper = styled.header`
  position: absolute;
  width: 100%;
  padding: 28px 9rem 0 9rem;
  top: 0;
  @media (max-width: ${BPLarge}) {
    padding: 28px 7rem 0 7rem;
  }
  @media (max-width: ${BPMedium}) {
    padding: 2rem 0;
    padding: 28px 4rem 0 4rem;
  }

  @media (max-width: ${BPSmall}) {
    padding: 2rem 0;
    padding: 28px 3rem 0 3rem;
  }
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
  @media (max-width: ${BreakPoints}) {
    display: none;
  }
`;
const NavOption = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-right: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  &:hover {
    background: #f2f2f2;
  }
  @media (max-width: ${BPLarge}) {
    margin-right: 1rem;
  }
  @media (max-width: ${BPMedium}) {
    margin-right: 0.2rem;
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
  @media (max-width: ${BreakPoints}) {
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
  background: #001219;
  border-radius: 50px;
  width: 150px;
  height: 42px;
  color: #fff;
`;

function Header() {
  return (
    <NavWrapper>
      <NavContainer>
        <NavLogo>HOAN TR</NavLogo>
        <NavOptionMenu>
          <NavOptionNavigate text="Home" onClickGoTo="/" />
          <NavOptionNavigate text="About" onClickGoTo="/about" />
          <NavOptionNavigate text="Products" onClickGoTo="/products" />
          <ContactMeButton>Contact me</ContactMeButton>
        </NavOptionMenu>
        <Menu>
          <MenuIcon />
        </Menu>
      </NavContainer>
    </NavWrapper>
  );
}

export default Header;
