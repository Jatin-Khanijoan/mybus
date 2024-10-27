import { useEffect, useRef, useState } from 'react';
import { Bus, DollarSign, UserCheck, Clock, Settings } from 'lucide-react';

const benefits = [
    {
        icon: Bus,
        title: "Wide Selection of Buses",
        description: "Choose from our diverse fleet to fit your group size and needs."
    },
    {
        icon: DollarSign,
        title: "Affordable and Transparent Pricing",
        description: "Competitive rates with no hidden fees, ensuring budget-friendly travel."
    },
    {
        icon: UserCheck,
        title: "Experienced Drivers",
        description: "Our professional drivers ensure a safe and comfortable journey."
    },
    {
        icon: Clock,
        title: "On-Time Service",
        description: "Punctuality is our priority, keeping your schedule on track."
    },
    {
        icon: Settings,
        title: "Customizable Bookings",
        description: "Tailor your trip with flexible options to suit your requirements."
    }
];

export default function WhyChooseUs() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Handle screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Smooth scrolling animation
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isSmallScreen) return;

        const scrollWidth = scrollContainer.scrollWidth;
        // const clientWidth = scrollContainer.clientWidth;

        let scrollPosition = 0;
        const scrollSpeed = 0.5;
        let animationId: number;

        const scroll = () => {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= scrollWidth / 2) {
                scrollPosition = 0;
            }
            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollPosition;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [isSmallScreen]);

    return (
        <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#ffeeee] opacity-80" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-[#333333] glow-text">
                    Why Choose Us
                </h2>

                {/* Benefits Container */}
                <div className="w-full">
                    {/* Mobile Layout */}
                    <div className="md:hidden grid grid-cols-1 gap-6">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>

                    {/* Desktop Scrolling Layout */}
                    <div
                        ref={scrollRef}
                        className="hidden md:flex overflow-x-hidden space-x-6 pb-4"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {benefits.concat(benefits).map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Separated BenefitCard component for better organization
const BenefitCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<any>, title: string, description: string }) => (
    <div className="flex-none w-full md:w-72 bg-white/90 p-4 sm:p-6 rounded-lg 
                  shadow-md transition-all duration-300 
                  hover:shadow-lg hover:bg-[#fff2f2] 
                  border border-[#ff3333]/20 hover:border-[#ff3333] 
                  group backdrop-blur-sm">
        <div className="flex items-start sm:items-center mb-3 sm:mb-4">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff3333] mr-3 
                     group-hover:text-[#ff6666] transition-colors duration-300 
                     flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#333333] 
                     group-hover:text-[#ff3333] transition-colors duration-300">
                {title}
            </h3>
        </div>
        <p className="text-sm sm:text-base text-[#666666] 
                  group-hover:text-[#333333] transition-colors duration-300 
                  leading-relaxed">
            {description}
        </p>
    </div>
);