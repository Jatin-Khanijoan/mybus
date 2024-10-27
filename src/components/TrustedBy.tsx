import { useState, useEffect, useRef } from 'react'

const companies = [
    { alt: "Reliance Industries Limited", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044567/MyBus/reliance-industries-limited-logo-01BC1F53AE-seeklogo.com_egz8xd.png" },
    { alt: "TITAN Company", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044584/MyBus/titan-company-logo-B33AE787A6-seeklogo.com_isnrxn.png" },
    { alt: "JSW", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044599/MyBus/jsw-steel-logo-82ED4A72F6-seeklogo.com_okhmyn.png" },
    // { alt: "WRL", logo: "/placeholder.svg?height=100&width=100" },
    { alt: "redBus", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044621/MyBus/redbus-logo-5B2A75C4DA-seeklogo.com_kheclj.png" },
    { alt: "Yes Bank", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044639/MyBus/yes-bank-logo-BE25FE94D0-seeklogo.com_nmyqwl.png" },
    { alt: "Amazon", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044859/MyBus/amazon-logo-86547BFB54-seeklogo.com_psykvg.png" },
    { alt: "Google", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044896/MyBus/google-2015-icon-logo-B4217923DD-seeklogo.com_ge5fpr.png" },
    // { alt: "sf", logo: "/placeholder.svg?height=100&width=100" },
    // { alt: "Goibibo", logo: "/placeholder.svg?height=100&width=100" },
    { alt: "Rainbow International School", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730044703/MyBus/174-1747960_rainbow-preschools-international-logo-rainbow-international-school-logo_vrkig4.png" },
    // { alt: "OCS", logo: "/placeholder.svg?height=100&width=100" },
    // { alt: "Actics", logo: "/placeholder.svg?height=100&width=100" },
    { alt: "Cityflo", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730047087/MyBus/download_bqpzgr.png" },
    // { alt: "Navneet", logo: "/placeholder.svg?height=100&width=100" },
    // { alt: "Horizon Group of Hospitals", logo: "/placeholder.svg?height=100&width=100" },
    { alt: "Imagica", logo: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730047585/MyBus/download_eksyka.png" },
]

export default function TrustedCompanies({ displayType = 'grid' }: { displayType?: 'grid' | 'marquee' }) {
    const marqueeRef = useRef<HTMLDivElement>(null)
    const [marqueeWidth, setMarqueeWidth] = useState(0)

    useEffect(() => {
        if (displayType === 'marquee' && marqueeRef.current) {
            setMarqueeWidth(marqueeRef.current.scrollWidth / 2)
        }
    }, [displayType])

    const LogoComponent = ({ company }: { company: typeof companies[0] }) => (
        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#fff2f2] group">
            <img
                src={company.logo}
                alt={company.alt}
                width={100}
                height={100}
                className="w-20 scale-110 h-20 object-contain transition-all duration-300"
            />
        </div>
    )

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#ffeeee]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333] glow-text">
                    Trusted by Leading Companies
                </h2>
                {displayType === 'grid' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {companies.map((company, index) => (
                            <LogoComponent key={index} company={company} />
                        ))}
                    </div>
                ) : (
                    <div className="overflow-hidden" aria-hidden="true">
                        <div
                            ref={marqueeRef}
                            className="flex animate-marquee"
                            style={{ width: `${marqueeWidth}px` }}
                        >
                            {[...companies, ...companies].map((company, index) => (
                                <div key={index} className="flex-shrink-0 w-[200px] mx-4">
                                    <LogoComponent company={company} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}