const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function MapArray() {
    const listItems = people.map(person => <li key={crypto.randomUUID()}>{person}</li>)

    return (
        <>
            <div>Map Array: </div>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {listItems}
            </ul>
        </>
    )
}
