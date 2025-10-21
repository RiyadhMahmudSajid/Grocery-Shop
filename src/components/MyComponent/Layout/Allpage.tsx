import React, { useEffect, useState } from 'react';
import Allpageshow from './Allpageshow';


interface Item {
    id: number,
    name: string,
    description: string,
    image: string
    price:number
    babge:string
}
interface Category {
    id: number,
    name: string,
    price: number,
    image: string;
    items: Item[]
}

interface CategoryData {
    categories: Category[]
}

const Allpage: React.FC = () => {
    const [catagory, setCatagory] = useState<Category[]>([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then((data: CategoryData) => {
                console.log(data.categories)
                setCatagory(data.categories)

            })
    }, [])
    return (
        <div>
            {
                catagory.map((cat)=><Allpageshow key={cat.id} cat={cat}></Allpageshow>)
            }
        </div>
    );
};

export default Allpage;