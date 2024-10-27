import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        message: ""
    });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.sheetbest.com/sheets/f2270757-2734-4282-aae0-03f6aea2c0a6", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)  
            })
            console.log(res);
            if(res.ok) {
                alert("Thank you for your response. We'll get back to you soon!");
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
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            placeholder="Enter your location"
                                            className="border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Type your message here"
                                            className="min-h-[100px] border-gray-200 focus:border-[#ff3333] focus:ring-[#ff3333]"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;