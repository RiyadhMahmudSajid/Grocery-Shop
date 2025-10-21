import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBagIcon, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router';


interface Item {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    babge: string
}
interface Category {
    id: number,
    name: string,
    price: number,
    image: string;
    items: Item[]
}

interface AllpageshowProps {
    cat: Category;
}

const Allpageshow: React.FC<AllpageshowProps> = ({ cat }) => {
    console.log(cat)
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-between gap-6'>

                {
                    cat.items.map((item) => <Link to={`/detail/${item.id}`}><Card className=' relative  bg-gradient-to-b from-gray-100 to bg-white px-3 py-4 rounded-md mb-6' key={item.id}>
                        <div className='w-40 h-36 rounded-md '>
                            <img className=' ' src={item.image}></img>
                        </div>

                        <CardContent className='px-0'>
                            <div>
                                <p className='text-xs text-gray-400'>{cat.name}</p>
                                <p className=' text-primary font-medium pb-1 pt-0.5'> {item.name}</p>
                                <p className='flex gap-0.5 text-orange-300'><Star size={13} fill='orange'></Star > <Star size={13} fill='orange'></Star> <Star size={13} fill='orange'></Star> <Star size={13} fill='orange'></Star> <Star className='text-primary' size={13} ></Star> <span className='text-xs ml-2 text-primary font-sans'>4.5k</span></p>
                            </div>
                            <div className='flex justify-between items-center pt-2.5'>
                                <p className='font-semibold text-primary'>${item.price}.00</p>
                                <p className='text-orange-400'><ShoppingBagIcon></ShoppingBagIcon></p>
                            </div>
                            <Badge className='absolute top-1/17 '>{item.babge}</Badge>
                        </CardContent>
                    </Card>
                    </Link> )
                }
            </div>
        </div>
    );
};

export default Allpageshow;