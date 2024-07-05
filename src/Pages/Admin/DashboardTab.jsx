import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import myContext from "../../Components/Context/MyContext";
import { Link } from "react-router-dom";

function DashboardTab() {
  const navigate = useNavigate();
  const context = useContext(myContext);

  const { product, deleteProduct, user } = context;

  const add = () => {
    navigate("/addproducts");
  };

  const edithandle = (item) => {
    context.setProducts(item);
    navigate("/updateproducts");
  };

  const handleFocus = (event) => {
    const element = event.target;
    if (element) {
      element.classList.add("focused");
    } else {
      console.warn("Element not found");
    }
  };

  return (
    <div className="container  font-league-spartan mt-10 mx-auto">
      <div className="tab container mx-auto">
        <Tabs defaultIndex={0} className="">
          <TabList className="md:flex md:space-x-8  grid grid-cols-3 text-center gap-4 p-2 md:justify-center mb-10">
            <Tab>
              <button
                type="button"
                className="font-medium bg-white border-b-2 border-gray-300  text-xl text-black px-5 py-1.5 text-center border-2"
                onFocus={handleFocus}
              >
                <div className="flex gap-2 items-center">
                  <MdOutlineProductionQuantityLimits /> Products
                </div>
              </button>
            </Tab>
            <Tab>
              <button
                type="button"
                className="font-medium border-2 border-gray-300 text-xl px-5 py-1.5 text-center text-black"
                onFocus={handleFocus}
              >
                <div className="flex gap-2 items-center">
                  <FaUser /> Users
                </div>
              </button>
            </Tab>
            <Tab>{/* Placeholder for additional tabs */}</Tab>
          </TabList>
          <TabPanel>
            {/* Product Details TabPanel Content */}
            <div className="px-4 md:px-0 mb-16">
              <h1 className="text-center mb-5 text-3xl font-semibold underline">
                Product Details
              </h1>
              <div className="flex justify-end">
                <button
                  onClick={add}
                  type="button"
                  className="focus:outline-none text-black bg-gray-400 border hover:bg-pink-700 outline-0 font-medium  text-sm px-6 py-3 mb-2"
                >
                  <div className="flex gap-2 items-center">
                    Add Product <FaCartPlus size={20} />
                  </div>
                </button>
              </div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs border-2 border-gray-200 text-black uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => {
                      const { title, price, imageUrl, category, date } = item;
                      return (
                        <tr
                          key={index}
                          className="bg-transparent border-b dark:border-gray-700"
                        >
                          <td className="px-6 py-4 text-black">{index + 1}</td>
                          <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                            <img
                              className="w-16"
                              src={imageUrl}
                              alt="Product"
                            />
                          </td>
                          <td className="px-6 py-4 text-black">{title}</td>
                          <td className="px-6 py-4 text-black">{price}</td>
                          <td className="px-6 py-4 text-black">{category}</td>
                          <td className="px-6 py-4 text-black">{date}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2 cursor-pointer text-black">
                              <div onClick={() => deleteProduct(item)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                              <Link to={"/updateproducts"}>
                                <div onClick={() => edithandle(item)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="relative overflow-x-auto mb-10">
              <h1 className=" text-center mb-5 text-3xl font-semibold underline">
                User Details
              </h1>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Uid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, index) => {
                    const { firstName, uid, email, date } = item;
                    return (
                      <tr
                        key={index}
                        className="bg-gray-50 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4 text-black ">{index + 1}.</td>
                        <td className="px-6 py-4 text-black ">{firstName}</td>
                        <td className="px-6 py-4 text-black ">{email}</td>
                        <td className="px-6 py-4 text-black ">{uid}</td>
                      </tr>
                    );
                  })}
                  {user.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default DashboardTab;
