import analytics from '../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg';
import collaborate from '../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg';
import planSchedules from '../assets/images/services/plan-your-schedules.jpeg';
import Card from './Card';

export default function Benefits() {
    return (
        <div
            className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60"
            data-component="benefits"
        >
            {/* <!-- Left Pattern --> */}
            <div
                className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
            >
                <div
                    className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                >
                    <template id="pattern-template">
                        <div
                            className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        ></div>
                    </template>
                </div>
            </div>

            {/* <!-- Feature Cards --> */}
            <div
                className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0"
            >
                <Card
                    title="Plan your schedules"
                    description="Streamline customer subscriptions and billing with automated scheduling tools."
                    alt="Plan schedules dashboard"
                    imgUrl={planSchedules}
                />
                <Card
                    title="Analytics & insights"
                    description="Transform your business data into actionable insights with real-time analytics."
                    alt="Analytics dashboard"
                    imgUrl={analytics}
                />
                <Card
                    title="Collaborate seamlessly"
                    description="Keep your team aligned with shared dashboards and collaborative workflows."
                    alt="Data visualization dashboard"
                    imgUrl={collaborate}
                />
            </div>

            {/* <!-- Right Pattern --> */}
            <div
                className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden"
            >
                <div
                    className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start"
                >
                    <template id="pattern-template-2">
                        <div
                            className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        ></div>
                    </template>
                </div>
            </div>
        </div>
    );
}