/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
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
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
}


// root style
#root{
  display:flex;
  flex-direction: column;
 
}


// HEADER STYLE

// TOP HEADER
.dyJpnj{
display:flex;
gap:20px;
padding:5px;

}

.coegGm{
  margin-right:auto;
  margin-left: 30px;
}

.ecYjpZ{
margin-right:30px;
}

//BOTTOM HEADER
.clSmDQ {
  display:flex;
  gap: 150px;
  padding:10px;
}


.Header__Nav-sc-77p8ox-1 a {
 margin-right:25px;


}


// MAIN CONTENT STYLES

.ShoeIndex__Wrapper-sc-17qarzr-0{
  display:flex;
  flex-direction:row-reverse;
  justify-content: flex-end;
}

.ShoeIndex__MainColumn-sc-17qarzr-2{
  flex:4;
}

.ShoeIndex__LeftColumn-sc-17qarzr-1{
flex:1;
margin-right:auto;
}


.ShoeIndex__Header-sc-17qarzr-3{
  display:flex;
}

.Select__Wrapper-sc-4lbtl6-0{
  display:flex;
  align-items:center;
  margin-left:auto;
}


.ShoeCard__Image-l6xor8-3{
  width:100%;
}

//shoe

.ShoeGrid__Wrapper-sc-1qzenvn-0{
  display:flex;
  flex-wrap: wrap;
  gap:30px;
  
 
}

.fkUKmH{
  display: flex;
  flex-direction:column;
  min-width:300px;
   flex: 1;
 
}

.ejaTdI{
  display: flex;
}

.jHbWit{
  margin-right: auto;
}

`;

export default GlobalStyles;
