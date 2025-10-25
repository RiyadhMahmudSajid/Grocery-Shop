import { Separator } from '@/components/ui/separator';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">


                <div>
                    <h2 className="text-2xl font-bold text-white">FreshMart</h2>
                    <p className="text-gray-100 mt-3 text-sm leading-relaxed">
                        Experience the freshness of nature with our organic foods, directly from local farms to your table.
                    </p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-100 text-sm">
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/about" className="">About Us</a></li>
                        <li><a href="/shop" className="">Shop</a></li>
                        <li><a href="/contact" className="">Contact</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-3">Contact</h3>
                    <ul className="space-y-2 text-gray-100 text-sm">
                        <li className="flex items-center gap-2"><MapPin size={16} /> Dhaka, Bangladesh</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> +880 1234 567890</li>
                        <li className="flex items-center gap-2"><Mail size={16} /> info@smartvillage.com</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                     
                        <Link to = 'https://www.facebook.com/'><Facebook color='white' size={20} /></Link>
                        <Link to = 'https://www.instagram.com/accounts/login/?hl=en'><Instagram color='white' size={20} /></Link>
                        <Link to = 'https://x.com/'><Twitter color='white' size={20} /></Link>
                    </div>
                </div>

            </div>

            <Separator className="my-4" />


            <div className="text-center text-gray-100 text-sm pb-6">
                © {new Date().getFullYear()} Smart Village. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;