export default function Lines({ side }) {
    const position = side === 'left' ? 'left-4 sm:left-6 md:left-8 lg:left-0' : 'right-4 sm:right-6 md:right-8 lg:right-0';

    return (
        <div className={`${position} w-[1px] h-full absolute top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0`}></div >
    );
}