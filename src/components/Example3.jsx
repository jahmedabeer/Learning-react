import { useState } from "react";

export default function Example3({ items }) {
    // const [selection, setSelection] = useState(null);

    /* 🔴 Avoid: Adjusting state on prop change in an Effect
    useEffect(() => {
        setSelection(null);
    }, [items]);*/

    /* Better: Adjust the state while rendering
    const [prevItems, setPrevItems] = useState(items);
    if (items !== prevItems) {
        setPrevItems(items);
        setSelection(null);
    }*/

    // ✅ Best: Calculate everything during rendering
    const [selectedId, setSelectedId] = useState(null);
    const selection = items.find((item) => item.id === selectedId) ?? null;

    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.id === selection?.id}
                            // onChange={() => setSelection(item)}
                            onChange={() => setSelectedId(item.id)}
                        />{" "}
                        {item.title}
                    </li>
                ))}
            </ul>

            {selection?.id && (
                <div>
                    <h2>Selected Item</h2>
                    <div
                        style={{
                            padding: "10px",
                            backgroundColor: "lightcyan",
                        }}
                    >
                        {selection?.title}
                    </div>
                </div>
            )}
        </>
    );
}