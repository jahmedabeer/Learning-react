/* props - object
{
  person: {
    name: 'Lin Lanying',
    imageId: '1bX5QH6'
  },
  size: 100
}
*/

export default function Avatar(props) {
    const { person, age } = props;
    return (
        <>
            <h1>{person.name}</h1>
            <p>{age}</p>
            <img
                className="avatar"
                src={'https://i.imgur.com/' + person.imageId + '.jpg'}
                alt="Lin Lanying"
                width={100}
                height={100}
            />
        </>
    );
}