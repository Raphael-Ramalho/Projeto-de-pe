import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
`;

const StyleLine = css`
  display: flex;
  flex-direction: row;
  width: calc(100% - ${spaces.m}*2);
  padding: ${spaces.m};
  font-size: ${fonts.size.large};
  font-family: "Stick No Bills", sans-serif;
  border-bottom: 1px solid gray;
`;

export const Header = styled.div`
  ${StyleLine}
  background-color: ${colors.terciary};
`;

export const Line = styled.div`
  ${StyleLine}
  background-color: ${colors.secondary};
`;

export const FirstColumn = styled.div`
  width: 33.333%;
`;
export const SecondColumn = styled.div`
  width: 66.666%;
`;
