import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";

export default function LeftContainer() {
    const { setLeftSelectedItems, leftContainerItems } = useContext(ListItemsContext);

    const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLeftSelectedItems(prevState => [...prevState, Number([e.target.name])]);
    };

    return (
        <div>
            <ul>
                {leftContainerItems.map(listItem => (
                    <li key={listItem}>
                        <input type="checkbox" name={`${listItem}`} id={`${listItem}`} onChange={handleSelectedItem} />
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}