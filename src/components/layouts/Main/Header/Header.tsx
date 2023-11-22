import Button from "@/components/common/Button/Button";
import React from "react";
import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaMoon  } from "react-icons/fa";
import * as Style from "./index.styled";
import Link from 'next/link';

interface HeaderProps {
  switchTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ switchTheme }) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    switchTheme();
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };

  return (
    <Style.Header id="header">
      <Style.Content>
        
        <Style.Logo>
          <Style.Img
            src="https://avatars.githubusercontent.com/u/70664528?s=400&u=861e9fafb08a103ed6de3852531877eecfa63036&v=4"
            alt="Logo"
          />
          <Link href="/"><Style.Name1>Nico</Style.Name1></Link>
          <Link href="/"><Style.Name2>Movies</Style.Name2></Link>
        </Style.Logo>
        
        <Style.Buttons>
          <Button name={isLightTheme ? <FaRegSun /> : <FaMoon />} action={toggleTheme} />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};

export default Header;