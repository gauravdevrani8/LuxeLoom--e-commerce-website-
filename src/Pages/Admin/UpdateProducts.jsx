import React, { useContext } from 'react'
import myContext from '../../Components/Context/MyContext';
import backgroundImage from '../../assets/background.jpg'; // Import your background image

function UpdateProducts() {
    const context = useContext(myContext);
    const { products, setProducts, updateProduct } = context;
    return (
        <div>
            <div className=' flex justify-center  items-center h-screen'style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className=' bg-white px-10 py-10 drop-shadow-lg 'style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className="">
                    <h1 className='text-center text-gray-800 text-xl mb-4 font-semibold '>Update<span className='text-green-500'>Product</span></h1>
                    </div>
                    <div>
                        <input type="text"
                            value={products.title}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            name='title'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            name='category'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                         value={products.description}
                         onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' border-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-200 outline-none'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={updateProduct}
                            className=' bg-black w-full text-white font-bold  px-2 py-2'>
                            Update Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default UpdateProducts;