import { Wifi, Wind, Coffee } from 'lucide-react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';

export default function FeaturedBus() {
    const navigate = useNavigate();
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#ffeeee]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#333333] glow-text">
          Explore Our Fleet
        </h2>
        <p className="text-center text-[#666666] mb-8">
          Discover Comfortable and Reliable Travel Options
        </p>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048026/MyBus/d18756fc-3125-4b1d-af18-0cc934acbaf0_zwkkzy.jpg"
                alt="Luxury Bus"
                width={400}
                height={300}
                className="h-48 w-full object-cover md:h-full md:w-96"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-[#ff3333] font-semibold">Featured Bus</div>
              <h3 className="mt-1 text-2xl font-medium text-[#333333]">Luxury Cruiser XL</h3>
              <p className="mt-2 text-[#666666]">Experience ultimate comfort with our state-of-the-art Luxury Cruiser XL. Perfect for long journeys and group travel.</p>
              <div className="mt-4 flex items-center text-[#666666]">
                <Wifi className="h-5 w-5 mr-2 text-[#ff3333]" />
                <span className="mr-4">Wi-Fi</span>
                <Wind className="h-5 w-5 mr-2 text-[#ff3333]" />
                <span className="mr-4">AC</span>
                <Coffee className="h-5 w-5 mr-2 text-[#ff3333]" />
                <span>Refreshments</span>
              </div>
              <div className="mt-4 flex items-center text-[#666666]">
                <span className="font-semibold">Seating Capacity:</span>
                <span className="ml-2">45 passengers</span>
              </div>
              <Button onClick={() => navigate('/buses')} className="mt-6 px-4 py-2 bg-[#ff3333] text-white rounded-md transition-all duration-300 hover:bg-[#ff6666] focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:ring-opacity-50">
                View All Buses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}