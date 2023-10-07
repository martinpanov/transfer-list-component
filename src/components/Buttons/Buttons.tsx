import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";

export default function Buttons() {
    const { leftSelectedItems, rightSelectedItems, setLeftContainerItems, setRightContainerItems } = useContext(ListItemsContext);

    const handleLeftClickButton = () => {
        setLeftContainerItems(leftSelectedItems);
    };

    const handleRightClickButton = () => {
        setRightContainerItems(rightSelectedItems);
    };

    return (
        <div>
            <button onClick={handleLeftClickButton}>&#60;</button>
            <button onClick={handleRightClickButton}>&#62;</button>
        </div>
    );
}