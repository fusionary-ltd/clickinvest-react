import { styled } from "frontity";
import Link from "@frontity/components/link";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`

export const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    height: auto; 
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;

export const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

export const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

export const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

export const Title = styled(Typography)`
    font-size:1.6em;
    font-weight: 700;
    color: #000;
`;

export const TopLink = styled(Link)`
    color: #000;
    display: flex; 
    align-items: center; 
    text-decoration: none;
    &:hover { color: white }
    `;

export const MenuLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
    `;

export const RightLink = styled(Link)`
    margin: 16px 0px;
    text-decoration: none;
    &:hover { color: #000 }
`;

export const HStack = styled(Stack)`
    flex-direction: row;
    align-items: center;
`;


export const CategoryBtn = styled(Button)`
    color: #000000;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 13px 20px;
    line-height: 20px;
    text-transform: capitalize;
    .MuiTouchRipple-root {
        display: none;
    }
`;

export const CategoryLink = styled(Link)`
    color: #000000;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 13px 20px;
    line-height: 20px;
    text-decoration: none;
    text-transform: capitalize;
`;

export const FooterLink = styled(Link)`
    color: #ECECEC;
    text-decoration: none;
`;

export const FooterArticle = styled(Link)`
    color: #ECECEC;
    font-size: 1.1rem;
    line-height: 32px;
    text-decoration: none;
`;

export const Divider = styled(Box)`
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
`;

export const BackgroundOverlay = styled(Box)`
    background-color: transparent;
    background-image: linear-gradient(110deg, #000000 50%, rgba(0, 0, 0, 0) 53%);
    opacity: 0.45;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;

export const RepairInput = styled(TextField)`
    margin-right: 10px;
    .MuiOutlinedInput-root {
        border-radius: 0px;
        
        input {
            padding: 0.5rem 1rem;
            background-color: #fff;
            fontSize: 17px
        }

        fieldset {
            display: none;
        }
    }
`;

export const RepairButton = styled(Button)`
    color: #fff;
    font-size: 1.1rem;
    padding: 5px 65px;
    text-transform: capitalize;
    border-radius: 0px;
`;

export const TabButton = styled(Button)`
    color: #000;
    width: 100%;
    font-size: '1rem';
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0px;
`;

export const SliderImg = styled(Box)`
    background-size: cover; 
    width: 65%; 
    height: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
`;

export const SliderContent = styled(Stack)`
    width: 35%; 
    border: 1px solid #eee; 
    background-color: #f9f9f9; 
    position: absolute; 
    top: 0; 
    right: 0; 
    height: 100%;
`;


export const ServiceLink = styled(Link)`
    text-decoration: none;
`;