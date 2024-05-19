"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
const Nav = styled.nav`
  width: 100%;
  background-color: #333;
  height: 80px;
  display: flex;
  padding-inline: 60px;
  color: white;
  align-items: center;
  justify-content: space-between;
`;
const NavItems = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "red" : "white")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const NavBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <Nav>
      <h1>Logo</h1>
      <NavItems>
        <StyledLink $active={pathname === "/"} href="/">
          Home
        </StyledLink>
        <StyledLink $active={pathname === "/static"} href="/static">
          Static
        </StyledLink>
        <StyledLink $active={pathname === "/contact"} href="/dynamic">
          dynamic
        </StyledLink>
        <StyledLink $active={pathname === "/isr"} href="/isr">
          isr
        </StyledLink>
      </NavItems>
    </Nav>
  );
};

export default NavBar;
