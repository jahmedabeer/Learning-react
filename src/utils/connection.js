export default function createConnection(serverUrl, roomId) {
    return {
        connect: () => {
            console.info(`Connected ${serverUrl} to room ${roomId}`);
        },
        disconnect: () => {
            console.info(`Disconnected ${serverUrl} from room ${roomId}`);
        },
    };
}

export function logVisit(roomId) {
    console.log(`User visited room ${roomId}`);
}