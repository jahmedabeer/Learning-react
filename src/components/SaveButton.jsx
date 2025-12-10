import { useEffect, useState } from 'react'

export default function SaveButton() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true)
        }

        function handleOffline() {
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    function handleClick() {
        console.info('Your data was saved!')
    }

    return (
        <button disabled={!isOnline} onClick={handleClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    )
}
