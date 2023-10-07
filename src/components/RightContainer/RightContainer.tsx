import { useContext } from "react";
import { ListItemsContext } from "../context/ListItemsContext";

export default function RightContainer() {
    const { setRightSelectedItems, rightContainerItems } = useContext(ListItemsContext);

    const handleSelectedItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRightSelectedItems(prevState => [...prevState, Number([e.target.name])]);
    };

    return (
        <div>
            <ul>
                {rightContainerItems.map(listItem => (
                    <li key={listItem}>
                        <input type="checkbox" name={`${listItem}`} id={`${listItem}`} onChange={handleSelectedItems} />
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}