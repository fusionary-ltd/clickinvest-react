import { styled } from "frontity";
import Link from "@frontity/components/link";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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