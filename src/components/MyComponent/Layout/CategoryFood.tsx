import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';


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

const CategoryFood = () => {
    const { id } = useParams()
    const [item, setItem] = useState<Category>();

    useEffect(() => {

        fetch('/category.json')
            .then((res) => res.json())
            .then((data: CategoryData) => {
                console.log(data)
                console.log(data.categories)

                const allCat = data.categories.find((cat) => cat.id === Number(id))
                console.log(allCat)
                setItem(allCat);


            })
    }, [id])

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 min-h-[50vh]">
            {item?.items.map((food) => (<Link to={`/detail/${food.id}`}  key={food.id}>
                <div
                   
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center"
                >


                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-2">
                        {food.babge.toUpperCase()}
                    </span>



                    <img
                        src={food.image}
                        alt={food.name}
                        className="w-32 h-32 object-contain mb-3"
                    />


                    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                        {food.name}
                    </h3>


                    <p className="text-gray-600 text-sm mb-3">
                        <span className="font-semibold text-green-600">৳{food.price}</span> / {food.unit}
                    </p>


                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </Link>

            ))}
        </div>
    )
};

export default CategoryFood;
