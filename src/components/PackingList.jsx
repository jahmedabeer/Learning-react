function Item({ name, isPacked }) {
    if (isPacked) {
        // return <li className="item">{name} ✅</li>;
        return null; // won’t render anything at all
    }
    return <li className="item">{name}</li>;
}

function NewItem({ name, isPacked }) {
    return (
        <li className="item">
            {/* {isPacked ? (<del>{name + ' ✅'}</del>) : (name)} */}
            {name} {isPacked && '✅'} {/* // render some JSX when the condition is true, or render nothing otherwise. */}
        </li>
    )
}

function NewItem1() {
    const lang = 'JS'

    const result = lang && "Javascript" //(and operator) if left side truthy it will return right side, otherwise return left side
    const result1 = lang || "javaScript" //(or operator) if left side falsy it will return right side, otherwise return left side
    const result2 = lang ?? "JAVASCRIPT" // (nullish coalescing operator) if left side Nullish (null or undefiend) it will return right side, otherwise return left side

    console.log('result: ', result)
    console.log('result1: ', result1)
    console.log('result2: ', result2)
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={false}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={true}
                    name="Photo of Tam"
                />
                <NewItem isPacked={false} name="Jak" />
                <NewItem1 />
            </ul>
        </section>
    );
}
