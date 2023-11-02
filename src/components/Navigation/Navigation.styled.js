import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
padding:15px 100px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.transparent};
`

export const Logo = styled.p`
display: flex;
align-items: center;
color: ${({ theme }) => theme.colors.orange};
font-size: ${({ theme }) => theme.fontSize[4]};
line-height: 0.5
`

export const LogoBox = styled.a`
display: flex;
justify-content: center;
align-items: center;
`

export const Span = styled.span`
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize[2]};
line-height: 0.3
`

export const NavMenu = styled.nav`
display: flex;
gap: 20px;
`

export const NavItem = styled(NavLink)`
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize[2]};
&:hover,
   &:focus {
     color: ${({ theme }) => theme.colors.orange};
   }
   transition: color 350ms linear;
`