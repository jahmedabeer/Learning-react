import { useState } from 'react';
/*
    // Remove state from the child components
    // Add state to the common parent
*/
export default function Accordionlsu() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleActive = (index) => {
        console.log(index)
        setActiveIndex(index)
    }

    return (
        <>
            <h2>Lifting state up</h2>
            <Panel title="About" isActive={activeIndex === 0} onActive={() => handleActive(0)}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onActive={() => handleActive(1)}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}

function Panel({ title, children, isActive, onActive }) {
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
        </section>
    )
}