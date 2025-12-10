import useOnlineStatus from '../hooks/useOnlineStatus'

export default function CheckNetwork() {
    const isOnline = useOnlineStatus()


    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}
