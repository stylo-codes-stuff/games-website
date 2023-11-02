import {css} from 'lit-element/lit-element.js';

export const navbarStyle = css`
    *
    @font-face {
        font-family: Candal;
        src: "/Fonts/Candal-Regular.ttf";
    }
    {
        font-family: Candal;
    }

    ul{
        list-style:none;
        margin:0;
        padding-left:5;

    }
    li{
        color
    }
    .dropdown{
        position: relative;
        
    }
    .dropdown-content{
        min-width:max-content;
        max-height:0;
        overflow:hidden;
        transition: max-height 1s; 
    }
    .dropdown:hover .dropdown-content,
    .dropdown:focus .dropdown-content,
    .dropdown:focus-within .dropdown-content {
      max-height: 200px;
    } 
`;    