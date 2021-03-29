import { getDefaultNormalizer } from "@testing-library/dom";
import {createContext} from "react"

const ThemeContext =  createContext(["light",()=>{}]);

export default ThemeContext;