import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDoc, doc } from 'firebase/firestore';
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
      const productTemp = await getDoc(doc(fireDB, 'products', params.id));
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
      // Handle error (e.g., display error message)
      toast.error('Failed to fetch product details');
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

  if (loading) return <Loader />;

  return (
    <section className="text-gray-600 px-15 body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        {product && (
          <div className="flex flex-col lg:flex-row items-center lg:items-start  rounded-lg overflow-hidden">
            <div className="lg:w-1/2 h-auto lg:h-auto relative mb-6 lg:mb-0">
              <img
                alt={product.title}
                className="w-full h-full object-cover object-center rounded-lg"
                src={product.imageUrl}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => addProductToCart(product)}
                  className="text-white bg-black border-2 py-3 px-7 focus:outline-none duration-300 rounded-lg"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl lg:text-4xl font-semibold mb-4">{product.title}</h1>
              <p className="text-gray-700 text-lg mb-6">{product.description}</p>
              <div className="flex items-center mb-6 space-x-4">
                <span className="text-2xl lg:text-3xl font-semibold text-gray-900">₹{product.price}</span>
              </div>
              {product.colors && (
                <div className="flex items-center mb-6 space-x-4">
                  <span className="text-gray-700">Color: </span>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
                        style={{ backgroundColor: color, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="flex px-5  flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => addProductToCart(product)}
                  className="text-white bg-green-800 border-2 py-3 px-8 w-full focus:outline-none hover:bg-green-900 duration-300 "
                >
                  Add To Cart
                </button>
                <Modal />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductInfo;
