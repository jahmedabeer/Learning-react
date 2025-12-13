const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }
];

export default function FilterArray() {
    // const filteredItems = people.filter(({ profession }) => profession === 'chemist')
    // const listItems = filteredItems.map(({ name }) => <li>{name}</li>)

    // method chaining
    const listItems = people
        .filter(({ profession }) => profession === 'chemist')
        .map(({ id, name }) => <li key={id}>{name}</li>)

    return (
        <>
            <div>Filter Array: </div>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {listItems}
            </ul>
        </>
    )
}
