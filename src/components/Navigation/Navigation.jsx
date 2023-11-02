import { NavLink } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Wrapper, Logo, LogoBox, Span, NavMenu, NavItem } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Wrapper>
      <LogoBox>
        <DoubleArrowIcon
          sx={[
            {
              fontSize: 55,
              color: "rgb(253, 197, 2)",
              cursor: "pointer",
              transition: "color 350ms linear",
            },
            { "&:hover": { color: "#fff" } },
          ]}
        />
        <div>
        <Logo>Luxury</Logo>
        <Span> Car Rental</Span>
        </div>
      </LogoBox>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/catalog">Catalog</NavItem>
        <NavItem to="/favorites">Favorites</NavItem>
      </NavMenu>
    </Wrapper>
  );
};
