import React from "react";
import styled from "@emotion/styled";

const NavWrapper = styled.header`
  margin: 28px 125px 0 125px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavOptionWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  // max-width: 400px;
`;

const NavOption = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-left: 4rem;
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
`;

function Header() {
  return (
    <NavWrapper>
      <NavContainer>
        <NavOptionWrapper>
          <NavOption>Home</NavOption>
          <NavOption>About</NavOption>
          <NavOption>Products</NavOption>
        </NavOptionWrapper>
        <ContactMeButton>Contact me</ContactMeButton>
      </NavContainer>
    </NavWrapper>
  );
}

export default Header;
