import React, { useContext } from 'react';
import myContext from '../../Components/Context/MyContext';
import backgroundImage from '../../assets/background.jpg'; // Import your background image

function AddProducts() {

    const context = useContext(myContext);
    const {products,setProducts,addProduct} = context
    return (
        <div>
            <div className=' flex  justify-center bg-gray-100 items-center h-screen'style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className=' bg-white drop-shadow-lg px-10 py-10 'style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className="">
                        <h1 className='text-center text-gray-800 text-2xl mb-4 font-semibold '>Add <span className='text-green-500'>Product</span></h1>
                    </div>
                    <div>
                        <input type="text"
                       onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            name='title'
                            className=' border-2 border-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-800 placeholder:text-bold outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className=' border-2 border-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-800 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageUrl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className=' border-2 border-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-800 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className=' border-2 border-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-800 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" 
                       name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' border-2 border-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-800 placeholder:text-gray-800 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' border-2 bg-black border-gray-200 w-full text-white font-bold  px-2 py-2'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}


export default AddProducts;
