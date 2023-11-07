import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { UpperHeader } from "../UpperHeader/UpperHeader";
import { HeaderWrapper } from "./Header.styled";

export const Header = () => {

  return (
   <HeaderWrapper>
   <UpperHeader/>
   <Navigation/>
   </HeaderWrapper>
  );
};

