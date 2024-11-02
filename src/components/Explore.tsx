import { Wifi, Coffee, Power, ThermometerSun, Tv, Map } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../components/ui/carousel';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from './ui/card';

const buses = [
  {
      id: 1,
      name: "Luxury Coach VIP (40-45 seater)",
      image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048026/MyBus/d18756fc-3125-4b1d-af18-0cc934acbaf0_zwkkzy.jpg",
      capacity: 45,
      price: 0,
      amenities: ["wifi", "power", "ac", "gps"],
      description: "Premium coach perfect for corporate events and long-distance travel"
  },
  {
      id: 2,
      name: "Urbania buses (15-20 seater) ",
      image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048032/MyBus/fb5a6930-9943-4ece-9659-56440b0fa5b8_oftcwv.jpg",
      capacity: 30,
      price: 0,
      amenities: ["wifi", "power", "ac", "gps"],
      description: "Ideal for small groups and airport transfers"
  },
  {
      id: 3,
      name: "Force Tempo Travellers (15-25 seater)",
      image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048038/MyBus/c4177407-ba49-4918-8ff2-586962dd9efe_ujqspe.jpg",
      capacity: 25,
      price: 0,
      amenities: ["wifi", "power", "ac", "gps"],
      description: "Perfect for special events and celebrations"
  },
  {
      id: 4,
      name: "Bharat Benz (30-35 seater)",
      image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730554853/MyBus/66299bac-c382-443a-bf2f-50a1e9143ae9_fmsrni.jpg",
      capacity: 35,
      price: 0,
      amenities: ["wifi", "power", "ac", "gps"],
      description: "A reliable and comfortable option for medium-sized groups, perfect for school trips, corporate events, or family gatherings."
  },
];

const amenityIcons = {
  wifi: <Wifi className="w-4 h-4" />,
  power: <Power className="w-4 h-4" />,
  ac: <ThermometerSun className="w-4 h-4" />,
  entertainment: <Tv className="w-4 h-4" />,
  refreshments: <Coffee className="w-4 h-4" />,
  gps: <Map className="w-4 h-4" />
};

export default function FeaturedBus() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', onSelect);
      emblaApi.on('settle', onSelect);

      setActiveIndex(emblaApi.selectedScrollSnap());

      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('settle', onSelect);
      };
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#ffeeee]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#333333]">
          Explore Our Fleet
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover Comfortable and Reliable Travel Options
        </p>
        <Card className="p-4 bg-transparent border-none shadow-none">
          <Carousel 
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {buses.map((bus) => (
                <CarouselItem key={bus.id}>
                  <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full md:w-2/5 relative h-72 md:h-[500px]">
                      <img
                        src={bus.image}
                        alt={bus.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        Featured
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {bus.name}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                          {bus.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                          {bus.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center space-x-3">
                              <span className="text-red-500">
                                {amenityIcons[amenity as keyof typeof amenityIcons]}
                              </span>
                              <span className="text-sm capitalize text-gray-600">
                                {amenity}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-gray-600 mb-6">
                          <span className="text-lg font-semibold">Capacity:</span>
                          <span className="ml-2 text-lg">{bus.capacity} passengers</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate('/buses')}
                        className="w-full md:w-auto bg-red-500 text-white hover:bg-red-600 text-lg py-6"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end mt-6 space-x-4">
              <CarouselPrevious className="static transform-none bg-red-500 hover:bg-red-600 text-white h-11 w-11" />
              <CarouselNext className="static transform-none bg-red-500 hover:bg-red-600 text-white h-11 w-11" />
            </div>
          </Carousel>
          <div className="flex justify-center mt-6 space-x-2">
            {buses.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-red-500 w-6' : 'bg-gray-300 w-2'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}