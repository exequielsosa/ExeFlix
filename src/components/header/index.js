import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  Group,
  Profile,
  Dropdown,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Text,
  Link,
  Picture,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Search = function HeaderProfile({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
      <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      placeholder="Search films and series"
      active={searchActive}
      />
      </Search>
  )
} 

Header.Profile = function HeaderProfile({children, ...restProps}) {
  return <Profile {...restProps}>{children}</Profile>;
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
}

Header.Picture = function HeaderPicture({ src, ...restProps}) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
}

Header.Dropdown = function HeaderDropdown({children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
} 

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
