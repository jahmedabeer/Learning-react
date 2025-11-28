import { useEffect } from 'react';
import { createConnection } from '../chat';


export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        // Add cleanup if needed 
        return () => connection.disconnect()
    }, []);
    return <h1>Welcome to the chat!</h1>;
}
