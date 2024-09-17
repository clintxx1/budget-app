import { atom } from "jotai";

export const dateAtom = atom<any>(new Date());
export const loadingAtom = atom<boolean>(true);
