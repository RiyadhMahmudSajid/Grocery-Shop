
import { MapPin, Menu, PhoneCall, Search, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logo from '../../../assets/dologo.png'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Link } from 'react-router';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';


interface Item {
    id: number;
    name: string;
    price: number;
    unit: string;
    image: string;
    babge: string;
}

interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    items: Item[];
}

interface CategoryData {
    categories: Category[];
}


const navItems = [
    { title: "Home", href: '/' },
    { title: "Products", href: '/products' },
    { title: "About Us", href: '/contact' },
]
const Navbar: React.FC = () => {

    const [catagory, setCatagory] = useState<Category[]>([])

    useEffect(() => {
        console.log("useEffect fired!");
        fetch('category.json')
            .then(res => {
                if (!res.ok) throw new Error('Network response not ok');
                return res.json();
            })
            .then((data: CategoryData) => {
                console.log("Fetched categories:", data.categories);
                setCatagory(data.categories);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    return (
        <nav>
            <div className='flex justify-between bg-primary text-primary-foreground py-1.5 border px-12'>
                <div className='flex  gap-5'>
                    <div className='flex gap-1 items-center text-[14px] font-medium'>
                        <MapPin size={16}></MapPin>
                        Dhaka , Bangladesh
                    </div>
                    <div className='flex gap-1 items-center text-[14px] font-medium'>
                        <PhoneCall size={16}></PhoneCall>
                        017454544
                    </div>


                </div>

                <div className='flex gap-3'>
                    <p className='text-[16px]'>Help</p>
                    <p className='text-[16px]'>Track Order</p>
                </div>
            </div>

            <div className='bg-gray-100 flex justify-between gap-4 py-2 px-12 items-center'>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className=" w-7 h-7 cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white px-4">
                            {/*  Search Bar */}
                            <div className="flex gap-3 justify-center mt-12 pb-3 border-b border-gray-200">
                                <div className="flex items-center relative w-full">
                                    <Search className="absolute left-3 text-muted-foreground" size={18} />
                                    <Input
                                        className="pl-10 py-2 rounded-md bg-gray-100 focus-visible:ring-primary"
                                        type="search"
                                        placeholder="Search products..."
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col mt-4 space-y-1 text-center font-medium text-gray-700">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        to={item.href}
                                        className="py-2.5 rounded-md hover:bg-primary hover:text-white transition-all duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                ))}


                                <Collapsible>
                                    <CollapsibleTrigger className="py-2.5 text-center w-full rounded-md hover:bg-primary hover:text-white border-y border-gray-200 font-semibold transition-all duration-200">
                                        Categories
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="bg-gray-50 mt-1 rounded-md shadow-inner ">
                                        <ul className="flex flex-col py-2 text-gray-700 ">
                                            {catagory.length > 0 ? (
                                                catagory.map(cat => <li key={cat.id}>{cat.name}</li>)
                                            ) : (
                                                <li>Loading categories...</li>
                                            )}
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className=' flex items-center  gap-1' >
                    <img className='w-12 h-12 ' src={logo}></img>
                    <p className='text-2xl font-bold '> FreshMart</p>
                </div>
                <NavigationMenu className='hidden  lg:block'>
                    <NavigationMenuList className=' lg:flex gap-4'>
                        {
                            navItems.map((item) => (<NavigationMenuItem key={item.title}>
                                <NavigationMenuLink asChild>
                                    <Link to={item.href}>{item.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>))
                        }

                        <NavigationMenuItem className=''>
                            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='flex flex-col gap-3 p-3' >

                                    {/* <li>
                                        <Link
                                            to=""
                                            className="block py-2 hover:bg-primary/10 rounded-md transition-colors"
                                        >
                                            Fruits
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=""
                                            className="block py-2 hover:bg-primary/10 rounded-md transition-colors"
                                        >
                                            Vegetable
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=""
                                            className="block py-2 hover:bg-primary/10 rounded-md transition-colors"
                                        >
                                            Beverage
                                        </Link>
                                    </li> */}
                                    {catagory.length > 0 ? (
                                        catagory.map(cat => <li key={cat.id}>{cat.name}</li>)
                                    ) : (
                                        <li>Loading categories...</li>
                                    )}

                                </ul>
                            </NavigationMenuContent>

                        </NavigationMenuItem>


                    </NavigationMenuList>

                </NavigationMenu>

                <div className='flex gap-4 '>
                    <div className='hidden  lg:flex items-center relative '>
                        <Search className='absolute left-1 text-muted-foreground'></Search>
                        <Input className='pl-10' type="search" placeholder="search" >

                        </Input>
                    </div>
                    <div className='bg-primary text-primary-foreground px-5 py-2 rounded-md flex items-center'>
                        <ShoppingCart size={35}></ShoppingCart>
                    </div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;