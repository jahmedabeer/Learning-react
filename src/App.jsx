import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    // person.firstName = e.target.value; // mutating the value
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email
    })
  }

  function handleLastNameChange(e) {
    // person.lastName = e.target.value;
    setPerson({
      ...person, // Copy the old fields
      lastName: e.target.value
    })
  }

  function handleEmailChange(e) {
    // person.email = e.target.value;
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div
      /* chaning value directly is prohibited
      onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      */
      //  To actually trigger a re-render in this case, create a new object and pass it to the state setting function
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
      <div>
        <label>
          First name:
          <input
            name="firstName"
            value={person.firstName}
            // onChange={handleFirstNameChange}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            name="lastName"
            value={person.lastName}
            // onChange={handleLastNameChange}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={person.email}
            // onChange={handleEmailChange}
            onChange={handleChange}
          />
        </label>
        <p>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
        </p>
      </div>
    </div>
  );
}
