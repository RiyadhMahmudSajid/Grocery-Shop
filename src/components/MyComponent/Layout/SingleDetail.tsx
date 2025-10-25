import { Minus, Plus } from 'lucide-react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    const [count , setCount] = useState<number>(0)
    useEffect(() => {
        if (!id) return;
        fetch("/category.json")
            .then((res) => res.json())
            .then((data: CategoryData) => {
                // console.log("Fetched data:", data);
                const allItems = data.categories.flatMap((cat) => cat.items);
                // console.log("all is",allItems)
                const found = allItems.find((i) => i.id === Number(id));
                // console.log("Found item:", found);
                setItem(found || null);
            });
    }, [id]);

     const handleCountPlus = () =>{
        setCount((count) => count + 1)
     }
     const handleCountMinus = () =>{
           setCount((count:number):number=>{
              if(count > 0){
                return count - 1
              }
              else return 0
           })
     }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto gap-8 p-6'>
            <div className='flex-1 w-full shadow-sm  p-4 bg-white '>
                <img src={item?.image}></img>


            </div>
            <div className="flex-1 w-full">
                <p className='font-medium text-3xl'>{item?.name}</p>
                <p className='my-2 font-medium text-2xl'>${item?.price}</p>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius quam dolorem iusto aperiam quos aut nam aliquid est fugit!</p>
                <p className='font-medium my-3'>{item?.unit}</p>
              
                <div className='bg-primary text-white flex  rounded-md h-8 justify-between border w-[20%] lg:w-[30%]'>
                    <button onClick={ handleCountMinus}  className='border-r px-2 cursor-pointer'>
                        <Minus className='' />
                    </button>
                    <div>
                       {count}
                    </div>
                    <button onClick={handleCountPlus} className='border-l px-2 cursor-pointer'>
                        <Plus className=''></Plus>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SingleDetail;