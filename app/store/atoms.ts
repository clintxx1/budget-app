import { atom } from "jotai";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dateAtom = atom<any>(new Date());
export const loadingAtom = atom<boolean>(true);
