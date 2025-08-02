import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#444444] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff3333]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#ff3333]" />
                <span>+91 93727 10486</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#ff3333]" />
                <a href="mailto:mybusrental@gmail.com" className="hover:text-[#ff6666] transition-colors duration-300">mybusrental@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#ff3333]" />
                <span>123 Main St, Hiranandani, India</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff3333]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ff6666] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/buses" className="hover:text-[#ff6666] transition-colors duration-300">
                  Our Buses
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="hover:text-[#ff6666] transition-colors duration-300">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-[#ff6666] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff3333]">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="hover:text-[#ff6666] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" className="hover:text-[#ff6666] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" className="hover:text-[#ff6666] transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" className="hover:text-[#ff6666] transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 MyBusRental. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
