export default function Form({ status = 'empty' }) {
    // visual states: Empty, Typing, Submitting, Success, Error

    if (status === 'success') return <h1>That's right!</h1>
    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form>
                <textarea disabled={status === 'submitting'}></textarea>
                <br />
                <button disabled={status === 'empty' || status === 'submitting'}>Submit</button>
                {status === 'submitting' && <p>Loading...</p>}
                {status === 'error' && <p style={{ color: 'red', fontSize: '22px' }}>There was an error!</p>}
            </form>
        </>
    );
}