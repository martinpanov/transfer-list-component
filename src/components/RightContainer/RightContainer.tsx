import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";
import styles from './RightContainer.module.css';

export default function RightContainer() {
    const { setRightSelectedItems, rightContainerItems } = useContext(ListItemsContext);

    const handleSelectedItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setRightSelectedItems(prevState => [...prevState, e.target.name]);
        } else {
            setRightSelectedItems(prevState => prevState.filter(item => item !== e.target.name));
        }
    };

    return (
        <div className={styles["right-container"]}>
            <ul className={styles["right-container__list"]} role="list">
                {rightContainerItems.map(listItem => (
                    <li key={listItem} className={styles["right-container__list-item"]}>
                        <input type="checkbox" name={`${listItem}`} id={`${listItem}`} className={styles["right-container__checkbox"]} onChange={handleSelectedItems} />
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}