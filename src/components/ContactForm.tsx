import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "./ui/datepicker";
import { format, set } from "date-fns";

interface FormData {
    name: string;
    phone: string;
    departureDate: Date | null;
    arrivalDate: Date | null;
    tripOrigin: string;
    tripDestination: string;
    numberOfPassengers: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        departureDate: null,
        arrivalDate: null,
        tripOrigin: "",
        tripDestination: "",
        numberOfPassengers: ""
    });
    const navigate = useNavigate();
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.sheetbest.com/sheets/f2270757-2734-4282-aae0-03f6aea2c0a6", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    departureDate: formData.departureDate ? format(new Date(formData.departureDate), 'dd-MM-yyyy') : null,
                    arrivalDate: formData.arrivalDate ? format(new Date(formData.arrivalDate), 'dd-MM-yyyy') : null
                })
            });
            console.log(res);
            if (res.ok) {
                alert("Thank you for your response. We'll reach out to you as soon as possible.");
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="relative overflow-hidden w-full pt-20 pb-20 lg:pl-10">
            <div className="absolute inset-0 bg-[linear-gradient(-45deg,#ffffff,#ffebeb,#ffd6d6,#ff9999)] bg-[length:400%_400%] animate-[gradientBG_15s_ease_infinite]" />
            <div className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section (left) */}
                <div className="relative h-64 lg:h-full w-full order-1 lg:order-none">
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src="https://res.cloudinary.com/dnvh2fya6/video/upload/v1729980686/MyBus/142755-780943401_small_ymnske.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content Section (right) */}
                <div className="relative px-4 md:px-6 lg:px-12 flex items-center z-10 py-8 lg:py-0 order-2 lg:order-none">
                    <div className="w-full max-w-xl mx-auto">
                        {/* {!isSubmitted ? ( */}
                        {/* <> */}
                        <Card className="border-none shadow-lg">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl md:text-3xl text-[#ff3333]">Get in Touch</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="departureDate">Date of departure</Label>
                                        <DatePicker
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.departureDate ?? undefined}
                                            onChange={(date) => setFormData({ ...formData, departureDate: date ?? null })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="arrivalDate">Date of arrival</Label>
                                        <DatePicker
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.arrivalDate ?? undefined}
                                            onChange={(date) => setFormData({ ...formData, arrivalDate: date ?? null })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tripOrigin">Trip Origin</Label>
                                        <Input
                                            id="tripOrigin"
                                            placeholder="Enter your trip origin"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.tripOrigin}
                                            onChange={(e) => setFormData({ ...formData, tripOrigin: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tripDestination">Trip Destination</Label>
                                        <Input
                                            id="tripDestination"
                                            placeholder="Enter your trip destination"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.tripDestination}
                                            onChange={(e) => setFormData({ ...formData, tripDestination: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="numberOfPassengers">Number of Passengers</Label>
                                        <Input
                                            id="numberOfPassengers"
                                            placeholder="Enter number of passengers"
                                            type="number"
                                            min="1"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.numberOfPassengers}
                                            onChange={(e) => setFormData({ ...formData, numberOfPassengers: e.target.value })}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-[#ff3333] hover:bg-[#ff4444] transition-colors">
                                        Submit
                                    </Button>
                                </form>

                                {/* Contact Info Pills */}
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                                    {[
                                        { icon: FiMapPin, text: "123 Main St, Hiranandani, India" },
                                        { icon: FiPhone, text: "+91 9137569829" },
                                        { icon: FiMail, text: "mybusrental@gmail.com" },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2 text-xs sm:text-sm bg-white/90 px-2 py-1 rounded-full border border-[#ff3333] transition-all duration-300 hover:bg-red-50 hover:border-[#ff6666] w-full sm:w-auto"
                                        >
                                            <item.icon className="w-4 h-4 text-[#ff3333] flex-shrink-0" />
                                            <span className="text-gray-800 truncate">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        {/* </>) : (
                            <Card className="border-none shadow-lg">
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-2xl md:text-3xl text-[#ff3333]">Thank you for your response</CardTitle>
                                    <CardDescription>
                                        We'll reach out to you as soon as possible.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        )
                        } */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;