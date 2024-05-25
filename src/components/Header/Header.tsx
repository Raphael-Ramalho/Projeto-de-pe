import { MenuProps } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { RoutePaths } from "enums/RoutePaths";
import {
  HeaderContainer,
  Navigation,
  StyledLabel,
  StyledOption,
  Title,
} from "./Header.style";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case RoutePaths.ABOUT:
        setCurrentTab("about");
        break;
      case RoutePaths.PROFESSIONALS:
        setCurrentTab("contact");
        break;
      case RoutePaths.DONATIONS:
        setCurrentTab("donation");
        break;
      default:
        setCurrentTab("home");
        break;
    }
  }, [location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTab(e.key);
  };

  const items = [
    {
      label: (
        <StyledOption to={RoutePaths.HOME} onClick={() => setOpen(false)}>
          Início
        </StyledOption>
      ),
      key: "home",
    },
    {
      label: (
        <StyledOption to={RoutePaths.ABOUT} onClick={() => setOpen(false)}>
          Sobre
        </StyledOption>
      ),
      key: "about",
    },
    {
      label: (
        <StyledOption
          to={RoutePaths.PROFESSIONALS}
          onClick={() => setOpen(false)}
        >
          Profissionais
        </StyledOption>
      ),
      key: "contact",
    },
    {
      label: (
        <StyledOption to={RoutePaths.DONATIONS} onClick={() => setOpen(false)}>
          Doação por Pix
        </StyledOption>
      ),
      key: "donation",
    },
    {
      label: (
        <StyledLabel
          onClick={() =>
            window.open(require("assets/files/estatuto-de-pe.pdf"))
          }
        >
          Prestação de contas
        </StyledLabel>
      ),
      key: "transparency",
    },
  ];

  const handleTitleClick = () => {
    setCurrentTab("home");
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <Menu open={open} setOpen={setOpen}>
        <>
          {items.map((item) => {
            return <div key={item.key}>{item.label}</div>;
          })}
        </>
      </Menu>
      <Title to={RoutePaths.HOME} onClick={handleTitleClick}>
        Instituto De Pé
      </Title>

      <Navigation
        onClick={onClick}
        disabledOverflow
        selectedKeys={[currentTab]}
        mode="horizontal"
        items={items}
      />
    </HeaderContainer>
  );
};
