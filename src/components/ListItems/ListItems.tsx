const LIST_ITEMS = [1, 2, 3, 4, 5];

export default function ListItems() {
    return (
        <ul>
            {LIST_ITEMS.map(listItem => (
                <li key={listItem}>
                    <input type="checkbox" name={`${listItem}`} id={`${listItem}`} />
                </li>
            ))}
        </ul>
    );
}