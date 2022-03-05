import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const SliderContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
}`;

export const CloseIcon = styled.div`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SliderWrapper = styled.div`
  color: #fff;
`;

export const SliderMenu  = styled.ul`
display: grid;
grid-template-columns: ltr;
text-align: center;
grid-template-row: repeat(6,80px);

@media screen and (max-width: 480px) {
grid-template-rows: repeat(6,60px)
} 
`

export const SliderLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &.hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SliderRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: a;; 0.2s ease-in-out;

  &.hover{
    transition: a;; 0.2s ease-in-out;
    background: #fff;
    color: #010606;

  }
`;
