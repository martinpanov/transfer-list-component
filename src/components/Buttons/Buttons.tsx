import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";
import styles from './Buttons.module.css';

export default function Buttons() {
    const { leftSelectedItems, setLeftSelectedItems, rightSelectedItems, setRightSelectedItems, setLeftContainerItems, setRightContainerItems } = useContext(ListItemsContext);

    const handleLeftClickButton = () => {
        setRightSelectedItems([]);
        setRightContainerItems(prevState => prevState.filter(item => !rightSelectedItems.includes(item)));
        setLeftContainerItems(prevState => [...prevState, ...rightSelectedItems]);
    };

    const handleRightClickButton = () => {
        setLeftSelectedItems([]);
        setLeftContainerItems(prevState => prevState.filter(item => !leftSelectedItems.includes(item)));
        setRightContainerItems(prevState => [...prevState, ...leftSelectedItems]);
    };

    return (
        <div className={styles["buttons-container"]}>
            <button className={styles["buttons-container__button"]} onClick={handleLeftClickButton}>&#60;</button>
            <button className={styles["buttons-container__button"]} onClick={handleRightClickButton}>&#62;</button>
        </div>
    );
}