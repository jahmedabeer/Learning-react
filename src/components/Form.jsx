import { useState } from 'react';

// utility function
function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === "dhaka") {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            }
        }, 1500);
    });
}

export default function Form() {
    // visual states: Typing, Submitting, Success

    // mandatory data state
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    // final state from visual state
    const [status, setStatus] = useState('typing')

    // handlers
    const handleTextChange = (e) => {
        setError(null)
        setAnswer(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('submitting');
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (error) {
            setStatus('typing')
            setError(error.message)
        }
    }

    if (status === 'success') return <h1>That's right!</h1>
    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextChange} disabled={status === 'submitting'}></textarea>{/* crontrolled form input */}
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {status === 'submitting' && <p>Loading...</p>}
                {error && <p style={{ color: 'red', fontSize: '22px' }}>{error}</p>}
            </form>
        </>
    );
}