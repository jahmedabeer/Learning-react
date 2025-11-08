import integration from '../assets/images/services/integration.png';
import speak from '../assets/images/services/speak.png';
import workOrder from '../assets/images/services/work-order.png';
import workSync from '../assets/images/services/work-sync.png';
import Badge from './Badge';
import Content from './Content';

export default function Features() {
    return (
        // <!-- Features Section -->
        <div
            className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center"
            data-component="Features"
        >
            {/* <!-- Header --> */}
            <div
                className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6"
            >
                <div
                    className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4"
                >
                    {/* <!-- Badge --> */}
                    <Badge icon="services" title="Services" />
                    <Content title="Built for absolute clarity and focused work">
                        Stay focused with tools that
                        organize, connect<br />
                        and turn information into confident
                        decisions.
                    </Content>
                </div>
            </div>

            {/* <!-- Features Content --> */}
            <div
                className="self-stretch flex justify-center items-start"
            >
                {/* <!-- Left Pattern --> */}
                <div
                    className="w-12 self-stretch relative overflow-hidden hidden md:block"
                >
                    <div
                        className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                    >
                        <template id="pattern-template-3">
                            <div
                                className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                            ></div>
                        </template>
                    </div>
                </div>

                {/* <!-- Grid Content --> */}
                <div
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]"
                >
                    {/* <!-- Top Left --> */}
                    <div
                        className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <h3
                                className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight"
                            >
                                Smart. Simple. Brilliant.
                            </h3>
                            <p
                                className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed"
                            >
                                Your data is beautifully
                                organized so you see
                                everything clearly without
                                the clutter.
                            </p>
                        </div>
                        <div
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={workOrder}
                                alt="Work order"
                                className="h-1/2 object-cover"
                            />
                        </div>
                    </div>

                    {/* <!-- Top Right with Sync Avatars --> */}
                    <div
                        className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <h3
                                className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight"
                            >
                                Your work, in sync
                            </h3>
                            <p
                                className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed"
                            >
                                Every update flows instantly
                                across your team and keeps
                                collaboration effortless and
                                fast.
                            </p>
                        </div>
                        <div
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative"
                        >
                            <img
                                src={workSync}
                                alt="Work sync"
                                className="h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* <!-- Bottom Left --> */}
                    <div
                        className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent"
                    >
                        <div className="flex flex-col gap-2">
                            <h3
                                className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight"
                            >
                                Effortless integration
                            </h3>
                            <p
                                className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed"
                            >
                                All your favorite tools
                                connect in one place and
                                work together seamlessly by
                                design.
                            </p>
                        </div>
                        <div
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative"
                        >
                            <img
                                src={integration}
                                alt="Integration"
                                className="h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* <!-- Bottom Right --> */}
                    <div
                        className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <h3
                                className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight"
                            >
                                Numbers that speak
                            </h3>
                            <p
                                className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed"
                            >
                                Track growth with precision
                                and turn raw data into
                                confident decisions you can
                                trust.
                            </p>
                        </div>
                        <div
                            className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative"
                        >
                            <img
                                src={speak}
                                alt="Numbers that speak"
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* <!-- Right Pattern --> */}
                <div
                    className="w-12 self-stretch relative overflow-hidden hidden md:block"
                >
                    <div
                        className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                    >
                        <template id="pattern-template-4">
                            <div
                                className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                            ></div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    );
}