import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    border: unset;
    outline: unset;
    font-weight: 100;
  }

  button {
    border: unset;
    background-color: unset;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --bgColor: ${({ theme }) => theme.bgColor};
    --cardColor: ${({ theme }) => theme.cardColor};
    --textColor: ${({ theme }) => theme.textColor};
    --borderColor: ${({ theme }) => theme.borderColor};
    --cancelColor: ${({ theme }) => theme.cancelColor};
    --doneColor: ${({ theme }) => theme.doneColor};
    --modalBgColor: ${({ theme }) => theme.modalBgColor};
    --font-family: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--bgColor);
    transition: background-color 0.2s ease-in;
    min-height: 100vh;

    * {
      color: var(--textColor);
      box-sizing: border-box;
      font-weight: 100;
      transition:
        background-color 0.2s ease-in,
        color 0.2s ease-in;
    }
  }

  input {
    font-size: 1.6rem;
    font-family: var(--font-family);
  }

  #root {
    width: 100vw;
    display: flex;
    position: relative;
    user-select: none;
  }
`;
