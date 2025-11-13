// Passing event handlers as props
function CustomButton({ hitMe, children }) {
    return (
        <button onClick={hitMe}>{children}</button>
    )
}


export default function PassingEventHandlersAsProps() {
    return (
        <>
            <CustomButton hitMe={() => alert('Playing!')}>
                Play Movie
            </CustomButton>
            <CustomButton hitMe={() => alert('Uploading...')}>
                Upload Image
            </CustomButton>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.dir(e)
            }}>
                <input />
                <button>submit</button>
            </form>
        </>
    );
}