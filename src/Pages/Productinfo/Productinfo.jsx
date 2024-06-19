import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LoadBundleTask, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../Redux/CartSlice'; 
import { fireDB } from '../../Firebase/FirebaseConfig';
import Modal from '../../Components/Verify/Verify';
import myContext from '../../Components/Context/MyContext';
import Loader from '../../Components/Loader/Loader';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            // Handle error
        }
    };

    useEffect(() => {
        getProductData();
    }, [params.id, setLoading]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="text-gray-600 rounded-md body-font">
            <div className="container  px-5 py-10 mx-auto">
                {loading && <p><Loader/></p>}
                {product && (
                    <div className="flex border-2 border-gray-300 rounded-md px-16 flex-col lg:flex-row items-center justify-center lg:justify-start">
                        <img
                            alt={product.title}
                            className="lg:w-1/3 lg:h-auto w-full object-cover hover:scale-105 duration-300 object-center rounded"
                            src={product.imageUrl}
                        />
                        <div className="lg:w-2/3 lg:px-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-xl font-medium mb-1">{product.title}</h1>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex items-center mb-4 space-x-2">
                                <span className="text-gray-600">4 Reviews</span>
                                {/* Add more icons or ratings if needed */}
                            </div>
                            <div className="flex items-center mb-4 space-x-4">
                                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                                <button
                                    onClick={() => addProductToCart(product)}
                                    className="flex text-gray-700 border-2 rounded-md  border-gray-400 py-2 px-6 focus:outline-none"
                                >
                                    Add To Cart
                                </button>
                                <Modal className=''/>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductInfo;
