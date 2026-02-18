import {atom} from "jotai";
import { menuTypes } from "./types";

export const menuAtom = atom<menuTypes>("home");
