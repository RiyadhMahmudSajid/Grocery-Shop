import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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

const SingleDetail = () => {
    const { id } = useParams()
    console.log(id)
    const [item, setItem] = useState<Item | null>(null);
    useEffect(() => {
        fetch("/category.json")
            .then((res) => res.json())
            .then((data: CategoryData) => {
                const allItems = data.categories.flatMap((cat) => cat.items);
                const found = allItems.find((i) => i.id === Number(id));
                setItem(found || null);
            });
    }, [id]);
    return (
        <div>
            {!item ? (
                <p className="text-center py-10 text-gray-500">Loading...</p>
            ) : (
                <div className="max-w-2xl mx-auto p-8">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <h1 className="text-2xl font-bold text-primary mb-2">{item.name}</h1>
                    <p className="text-gray-600 mb-4">Price: ৳{item.price}</p>
                    <p className="text-sm text-gray-500">Badge: {item.babge}</p>
                </div>
            )}
        </div>
    );
};

export default SingleDetail;