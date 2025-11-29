import { useState } from 'react';

// When something can be calculated from the existing props or state, don’t put it in state. Instead, calculate it during rendering.
export default function Example1() {
    const [firstName] = useState('Taylor');
    const [lastName] = useState('Swift');

    /* 🔴 Avoid: redundant state and unnecessary Effect
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName]);
    */

    // Solution?
    const fullName = `${firstName} ${lastName}`

    return (
        <>
            {fullName}
        </>
    )
}
