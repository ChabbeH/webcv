import { createGlobalStyle } from "styled-components";
import { mobile, tablet } from "./responsive";

const Globals = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin:0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
   
}

:root {
    --color-bg: #0A2239;
    --color-bg-variant: #15577A;
    --color-primary: #1A749E;
    --color-primary-variant: rgba(77,181,255,0.4);
    --color-white:#fff;
    --color-light:rgba(255,255,255,0.6);

    --transition: all 400ms ease;

    --container-width-lg:75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;
    
}

html {
    scroll-behavior: smooth;

}

::-webkit-scrollbar {

    display: none;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image:url("https://i.postimg.cc/JhcPNFN5/bg-texture1.png");

}

h1,h2,h3,h4,h5 {
    font-weight: 500;
}

h1 {
    font-size: 2.5rem;
}

section {
    margin-top: 8rem;
    ${mobile({ marginTop: "4rem" })}
    ${tablet({ marginTop: "1rem" })}
    
  
}

section > h2, section > h5 {
    text-align: center;
    color: var(--color-light);
    
}

section > h2 {
    color: var(--color-primary);
}


a {
    color: var(--color-primary);
    transition: var(--transition);
}

a:hover{
    color: var(--color-white);

}

.btn {
    width: max-content;
    display: inline-block;
    color:var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
}

.btn:hover{
    background: var(--color-white);
    color: var(--color-bg);
    border-color:transparent;
}

.btn-primary {

background: var(--color-primary);
color: var(--color-bg);
}

img {
    display: block;
    width: 100%;
    object-fit: cover;
    
}

`;

export default Globals;
