import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BPLarge, BPMedium, BPSmall, BreakPoints } from "../BreakPoints";
import MenuIcon from "../Graph/Menu";
import ArrorRight from "../Graph/ArrowRight";

const NavWrapper = styled.header`
  position: absolute;
  width: 100%;
  padding: 28px 9rem 0 9rem;
  top: 0;
  @media (max-width: ${BPLarge}) {
    padding: 28px 7rem 0 7rem;
  }
  @media (max-width: ${BPMedium}) {
    padding: 28px 4rem 0 4rem;
  }
  @media (max-width: ${BPSmall}) {
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
  align-items: center;
  @media (max-width: ${BreakPoints}) {
    position: fixed;
    right: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    padding: 3rem 0;
  }
  &.active {
    right: 0;
  }
`;
const NavOverlay = styled.div`
  position: absolute;
  top: 5rem;
  right: -100%;
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: #fff;
  transition: 0.3s;
  display: none;
  &.active {
    display: block;
    right: 0;
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
  @media (max-width: ${BreakPoints}) {
    margin: 1rem 0;
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

const MenuToggle = styled.div`
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
  cursor: pointer;

  @media (max-width: ${BreakPoints}) {
    margin: 1rem 0;
  }
`;

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <NavWrapper>
      <NavOverlay className={menuActive ? "active" : null} />
      <NavContainer>
        <NavLogo>HOAN TR</NavLogo>
        <NavOptionMenu className={menuActive ? "active" : null}>
          <NavOptionNavigate text="Home" onClickGoTo="/" />
          <NavOptionNavigate text="About" onClickGoTo="/about" />
          <NavOptionNavigate text="Products" onClickGoTo="/products" />
          <Link href="/contact">
            <ContactMeButton>Contact me</ContactMeButton>
          </Link>
        </NavOptionMenu>
        <MenuToggle onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? <ArrorRight /> : <MenuIcon />}
        </MenuToggle>
      </NavContainer>
    </NavWrapper>
  );
}

export default Header;
