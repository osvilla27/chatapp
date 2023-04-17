import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.COLORS.light};
  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
`;

// Typography styles

export const H1 = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.theme.SIZES.h1}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h2}px;
  }
  @media (max-width: 420px) {
    font-size: ${(props) => props.theme.SIZES.h3}px;
  }
  ${(props) => {
    switch (props.color) {
      case "primary":
        return `color: ${props.theme.COLORS.primary};`;
      case "secondary":
        return `color: ${props.theme.COLORS.secondary};`;
      case "info":
        return `color: ${props.theme.COLORS.info};`;
      case "success":
        return `color: ${props.theme.COLORS.success};`;
      case "warning":
        return `color: ${props.theme.COLORS.warning};`;
      case "danger":
        return `color: ${props.theme.COLORS.danger};`;
      case "light":
        return `color: ${props.theme.COLORS.light};`;
      default:
        return `color: ${props.theme.COLORS.dark};`;
    }
  }};
`;

export const H2 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h2}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h3}px;
  }
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.SIZES.h4}px;
  }
`;

export const H3 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h3}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h4}px;
  }
`;

export const H4 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h4}px;
`;

export const H5 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h5}px;
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.SIZES.p}px;
  ${(props) => {
    switch (props.color) {
      case "primary":
        return `color: ${props.theme.COLORS.primary};`;
      case "secondary":
        return `color: ${props.theme.COLORS.secondary};`;
      case "info":
        return `color: ${props.theme.COLORS.info};`;
      case "success":
        return `color: ${props.theme.COLORS.success};`;
      case "warning":
        return `color: ${props.theme.COLORS.warning};`;
      case "danger":
        return `color: ${props.theme.COLORS.danger};`;
      case "light":
        return `color: ${props.theme.COLORS.light};`;
      case "dark":
        return `color: ${props.theme.COLORS.dark};`;
      default:
        return `color: ${props.theme.COLORS.gray};`;
    }
  }}
  line-height: 1.6;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  color: ${(props) => props.theme.COLORS.light};
  ${(props) => {
    switch (props.color) {
      case "secondary":
        return `background: ${props.theme.COLORS.secondary}`;
      case "info":
        return `background: ${props.theme.COLORS.info}`;
      case "success":
        return `background: ${props.theme.COLORS.success}`;
      case "warning":
        return `background: ${props.theme.COLORS.warning}`;
      case "danger":
        return `background: ${props.theme.COLORS.danger}`;
      case "light":
        return `background: ${props.theme.COLORS.light};
                color: ${props.theme.COLORS.dark};`;
      case "dark":
        return `background: ${props.theme.COLORS.primary}`;
      default:
        return `background: ${props.theme.COLORS.primary}`;
    }
  }}
`;

export const Blur = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0 10px 30px #000;
  backdrop-filter: blur(10px);
  border: 1px solid #ffffff40;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: saturate(80%) blur(15px);
  background-color: rbga(243, 243, 243, 0.2);
`;

export default GlobalStyle;
