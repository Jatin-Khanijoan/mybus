import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import {
    Users, Wifi, Power,
    ThermometerSun, Map, Coffee, Tv
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const buses = [
    {
        id: 1,
        name: "Luxury Coach VIP",
        image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048026/MyBus/d18756fc-3125-4b1d-af18-0cc934acbaf0_zwkkzy.jpg",
        capacity: 45,
        price: 1200,
        amenities: ["wifi", "power", "ac", "gps"],
        description: "Premium coach perfect for corporate events and long-distance travel"
    },
    {
        id: 2,
        name: "Executive Minibus",
        image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048032/MyBus/fb5a6930-9943-4ece-9659-56440b0fa5b8_oftcwv.jpg",
        capacity: 28,
        price: 800,
        amenities: ["wifi", "power", "ac", "gps"],
        description: "Ideal for small groups and airport transfers"
    },
    {
        id: 3,
        name: "Party Bus Supreme",
        image: "https://res.cloudinary.com/dnvh2fya6/image/upload/v1730048038/MyBus/c4177407-ba49-4918-8ff2-586962dd9efe_ujqspe.jpg",
        capacity: 20,
        price: 1500,
        amenities: ["wifi", "power", "ac", "gps"],
        description: "Perfect for special events and celebrations"
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

export default function BusListingPage() {
    const [sortBy, setSortBy] = React.useState("default");
    const [capacityFilter, setCapacityFilter] = React.useState("all");
    const navigate = useNavigate();

    const filteredAndSortedBuses = React.useMemo(() => {
        let filtered = [...buses];

        // Apply capacity filter
        if (capacityFilter !== "all") {
            filtered = filtered.filter((bus) => {
                switch (capacityFilter) {
                    case "small":
                        return bus.capacity < 30;
                    case "medium":
                        return bus.capacity >= 30 && bus.capacity <= 45;
                    case "large":
                        return bus.capacity > 45;
                    default:
                        return true;
                }
            });
        }

        // Apply sorting
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "capacity":
                    return b.capacity - a.capacity;
                default:
                    return 0; 
            }
        });
    }, [sortBy, capacityFilter]);

    return (
        <section className="mt-16 min-h-screen w-full bg-gradient-to-br from-background to-secondary p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground glow-text">
                        Available Buses
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Find the perfect bus for your next journey
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <Select defaultValue="default" onValueChange={setSortBy}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Featured</SelectItem>
                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                            <SelectItem value="capacity">Capacity</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select defaultValue="all" onValueChange={setCapacityFilter}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filter by Capacity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Sizes</SelectItem>
                            <SelectItem value="small">Under 30 seats</SelectItem>
                            <SelectItem value="medium">30-45 seats</SelectItem>
                            {/* <SelectItem value="large">45+ seats</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedBuses.map((bus) => (
                        <Card key={bus.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img
                                    src={bus.image}
                                    alt={bus.name}
                                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                    Starting at Rs.{bus.price}/day
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{bus.name}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{bus.description}</p>

                                <div className="flex items-center gap-2 mb-4">
                                    <Users className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">{bus.capacity} Seats</span>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {bus.amenities.map((amenity) => (
                                        <div
                                            key={amenity}
                                            className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-full text-xs"
                                        >
                                            {amenityIcons[amenity as keyof typeof amenityIcons]}
                                            <span className="capitalize">{amenity}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => {
                                        navigate("/contact");
                                    }}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
