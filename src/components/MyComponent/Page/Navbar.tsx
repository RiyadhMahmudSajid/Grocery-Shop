
import { MapPin, Menu, PhoneCall, Search, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logo from '../../../assets/dologo.png'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem,  NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { NavLink } from 'react-router';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';



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



const Navbar: React.FC = () => {

    const [catagory, setCatagory] = useState<Category[]>([])


    useEffect(() => {
        // console.log("useEffect fired!");
        fetch('category.json')
            .then(res => {
                if (!res.ok) throw new Error('Network response not ok');
                return res.json();
            })
            .then((data: CategoryData) => {
                // console.log("Fetched categories:", data.categories);
                setCatagory(data.categories);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const getNavLinkStyle = ({ isActive}:{isActive:boolean}) => {
        return {
            color: isActive ? 'orange' : "black",
            
        }
    }

    return (
        <nav className='sticky z-50 top-0'>
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

            <div className='bg-gray-100 flex justify-between gap-4 py-2 px-12 items-center '>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className=" w-7 h-7 cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white px-4">

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

                                <NavLink 
                                 style ={getNavLinkStyle}
                                 className="py-2.5 rounded-md hover:bg-primary hover:text-white transition-all duration-200" to='/'>Home</NavLink>

                                <ul className="flex flex-col py-2 text-gray-700 ">
                                    {catagory.length > 0 ? (
                                        catagory.map(cat => <NavLink style={getNavLinkStyle} key={cat.id} className="py-2.5 rounded-md hover:bg-primary hover:text-white transition-all duration-200" to={`/cat/${cat.id}`}>{cat.name}</NavLink>)
                                    ) : (
                                        <li>Loading categories...</li>
                                    )}
                                </ul>
                                
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className=' flex items-center  gap-1' >
                    <img className='w-12 h-12 ' src={logo}></img>
                    <p className='text-2xl font-bold '> FreshMart</p>
                </div>
                <NavigationMenu className='hidden  lg:block  z-100'>
                    <NavigationMenuList className=' lg:flex gap-4'>
                        <NavigationMenuItem>

                            <NavLink to='/' style={getNavLinkStyle} className="py-2.5 font-medium">Home </NavLink>



                        </NavigationMenuItem>
                        <NavigationMenuItem className='flex'>
                            <ul className='py-2 text-gray-700 flex gap-3 items-center font-medium'>
                                {catagory.length > 0 ? (
                                    catagory.map(cat => (
                                        <li key={cat.id}>
                                            <NavLink
                                               style={getNavLinkStyle}
                                                to={`/cat/${cat.id}`}
                                                className='py-2.5 px-3 rounded-md '
                                            >
                                                {cat.name}
                                            </NavLink>
                                        </li>
                                    ))
                                ) : (
                                    <li>Loading categories...</li>
                                )}
                            </ul>
                        </NavigationMenuItem>


                        <NavigationMenuItem className=''>
                            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='py-2 text-gray-700 flex flex-col gap-3 items-center font-semibold'>
                                    {catagory.length > 0 ? (
                                        catagory.map(cat => (
                                            <li key={cat.id}>
                                                <NavLink
                                                    to={`/cat/${cat.id}`}
                                                    className='py-2.5 px-3 rounded-md hover:bg-primary hover:text-white transition-all duration-200'
                                                >
                                                    {cat.name}
                                                </NavLink>
                                            </li>
                                        ))
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
                        <Input className='pl-10' type="search" placeholder="search">

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