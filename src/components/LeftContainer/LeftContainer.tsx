import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";
import styles from './LeftContainer.module.css';

export default function LeftContainer() {
    const { setLeftSelectedItems, leftContainerItems, leftSelectedItems } = useContext(ListItemsContext);

    console.log(leftSelectedItems);


    const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setLeftSelectedItems(prevState => [...prevState, e.target.name]);
        } else {
            setLeftSelectedItems(prevState => prevState.filter(item => item !== e.target.name));
        }
    };

    return (
        <div className={styles["left-container"]}>
            <ul className={styles["left-container__list"]} role="list">
                {leftContainerItems.map(listItem => (
                    <li key={listItem} className={styles["left-container__list-item"]}>
                        <input type="checkbox" name={`${listItem}`} id={`${listItem}`} className={styles["left-container__checkbox"]} onChange={handleSelectedItem} />
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}