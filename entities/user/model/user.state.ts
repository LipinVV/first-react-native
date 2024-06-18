import {atom} from "jotai";
import {IUserModel} from "./user.model";

export const profileAtom = atom<IUserState>({
    profile: null,
    isLoading: false,
    error: null
})

export interface IUserState {
    profile: IUserModel | null,
    isLoading: boolean,
    error: string | null
}
