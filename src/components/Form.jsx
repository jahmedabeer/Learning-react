import { useState } from "react";

export default function Form() {
    const [inputs, setInputs] = useState([{
        id: 1,
        label: 'input'
    }])

    const handleAddInput = () => {
        const nextId = inputs[inputs.length - 1].id + 1;
        setInputs([
            ...inputs,
            {
                id: nextId
            }
        ])
    }

    return (
        <div>
            <div>
                {inputs.map(input => (
                    <input key={input.id} type="text" label={input.label} />
                ))
                }
            </div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={handleAddInput}>Add Input</button>
            </div>
        </div>
    );
}