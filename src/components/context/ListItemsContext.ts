import { Dispatch, SetStateAction, createContext } from "react";

interface ListItemsContextType {
    leftSelectedItems: number[];
    setLeftSelectedItems: Dispatch<SetStateAction<number[]>>;
    rightSelectedItems: number[];
    setRightSelectedItems: Dispatch<SetStateAction<number[]>>;
    leftContainerItems: number[];
    setLeftContainerItems: Dispatch<SetStateAction<number[]>>;
    rightContainerItems: number[];
    setRightContainerItems: Dispatch<SetStateAction<number[]>>;
}

export const ListItemsContext = createContext<ListItemsContextType>({
    leftSelectedItems: [],
    setLeftSelectedItems: () => { },
    rightSelectedItems: [],
    setRightSelectedItems: () => { },
    leftContainerItems: [],
    setLeftContainerItems: () => { },
    rightContainerItems: [],
    setRightContainerItems: () => { }
});