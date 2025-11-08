import Badge from "./Badge";
import Content from "./Content";

export default function Pricing() {
    return (
        // <!-- Pricing Section -->
        <div
            className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]"
        >
            {/* <!-- Pricing Header --> */}
            <div
                className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6"
            >
                <div
                    className="w-full max-w-[586px] px-6 py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4"
                >
                    <Badge icon="pricing" title="Plans & Pricing" />
                    <Content title="Choose the perfect plan for your business">
                        Scale your operations with flexible
                        pricing that grows with your
                        team.<br />
                        Start free, upgrade when you're
                        ready.
                    </Content>
                </div>
            </div>
        </div>
    );
}