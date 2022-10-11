import { styled } from "frontity";
import Link from "@frontity/components/link";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const TopLink = styled(Link)`
    padding: 10px;
    color: #000;
    display: flex; 
    align-items: center; 
    text-decoration: none;
    &:hover { color: white }
`;

export const HStack = styled(Stack)`
    flex-direction: row;
    align-items: center;
`;

export const CategoryBtn = styled(Button)`
    color: #000000;
    font-size: 17px;
    font-weight: 700;
    padding: 13px 20px;
    line-height: 20px;
    text-transform: capitalize;
    &:hover {
        color: #F7941D;
        background-color: transparent;
    }
    .MuiTouchRipple-root {
        display: none;
    }
`;

export const CategoryLink = styled(Link)`
    color: #000000;
    font-size: 17px;
    font-weight: 700;
    padding: 13px 20px;
    line-height: 20px;
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
        color: #F7941D;
        background-color: transparent;
    }
`;

export const FooterLink = styled(Link)`
    color: #ECECEC;
    text-decoration: none;
`;

export const FooterArticle = styled(Link)`
    color: #ECECEC;
    font-size: 17px;
    line-height: 32px;
    text-decoration: none;
`;

export const Divider = styled(Box)`
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
    border-top:1px solid #444444;
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
    font-size: 17px;
    padding: 5px 65px;
    background-color: #262626;
    text-transform: capitalize;
    border-radius: 0px;
    &:hover {
        background-color: #54595F;
    }
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