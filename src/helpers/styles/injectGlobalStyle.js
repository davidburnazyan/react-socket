import { createGlobalStyle } from 'styled-components';

const injectGlobalStyle = () =>
    createGlobalStyle`   
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, textarea {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      text-decoration: none;
      font-family: sans-serif;
    };
    button {
      outline: none;
    }
    *, ::after, ::before {
      box-sizing: border-box;
    };
`;

export default injectGlobalStyle;