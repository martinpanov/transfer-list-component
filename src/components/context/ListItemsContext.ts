import { Dispatch, SetStateAction, createContext } from "react";

interface ListItemsContextType {
    leftSelectedItems: string[];
    setLeftSelectedItems: Dispatch<SetStateAction<string[]>>;
    rightSelectedItems: string[];
    setRightSelectedItems: Dispatch<SetStateAction<string[]>>;
    leftContainerItems: string[];
    setLeftContainerItems: Dispatch<SetStateAction<string[]>>;
    rightContainerItems: string[];
    setRightContainerItems: Dispatch<SetStateAction<string[]>>;
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