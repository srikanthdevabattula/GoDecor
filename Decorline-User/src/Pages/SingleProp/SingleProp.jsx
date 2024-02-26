import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productsSelector } from '../../redux/reducers/productReducer';
import sprop from '../../assets/props/sprop.png';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

import arrow from '../../assets/products/arrow.png';

const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector(productsSelector);
    const product = products.find(product => product.id === parseInt(id));


 

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, price, description, image, rating, category } = product;


    const productcategory = useState(category);
    const [currentPage, setCurrentPage] = useState(1);
    const productsCat = useSelector(productsSelector);
    const productsPerPage = 6;

    const filteredProducts = productsCat.filter(product => product.category === category);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Function to render stars based on rating
    const renderStars = () => {
        
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
        const outlineStars = 5 - fullStars - halfStar;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoIosStar key={i} className='text-[#FFC107]'/>);
        }
        if (halfStar === 1) {
            stars.push(<IoIosStarHalf key={fullStars} className='text-[#FFC107]' />);
        }
        for (let i = 0; i < outlineStars; i++) {
            stars.push(<IoIosStar key={fullStars + halfStar + i} className='text-[#DEDEDE]'/>);
        }

        return stars;
    };
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 700, behavior: 'smooth' }); // Scroll to top when changing page number
    };
    const handleProductChange = () => {
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page number
    };

    return (
        <div className='space-y-[40px]'>
            <div className='h-[250px] sm:h-[180px] bg-cover bg-center flex items-end justify-center' style={{ backgroundImage: `url(${sprop})` }}>
                <div className='bg-[white] flex flex-col items-center justify-center rounded-tl-[37px] rounded-tr-[37px] h-[100px] w-[300px] sm:w-[180px]'>
                    <h1 className='text-[#292F36] font-DMSerif text-[30px] sm:text-[20px]'>Props</h1>
                    <p className='text-[17px] sm:text-[13px] text-[#4D5053]'>Home / Props</p>
                </div>
            </div>
            <div className='px-[15%] lg:px-[12%] md:px-[7%] space-y-[30px] md:space-y-[20px]'>
                <h1 className='text-[#292F36] font-DMSerif text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px] pl-5'>Prop Detail</h1>
                <div className='border-[1px] border-[#E7E7E7] rounded-[62px] md:rounded-[40px] sm:rounded-[20px] p-8 sm:p-4 flex sm:flex-col gap-10 sm:gap-5 w-[100%] '>
                    <div className='w-[50%] sm:w-[100%]'>
                        <img src={image} alt={name} className='h-[478px] lg:h-[430px] md:h-[360px] sm:h-[250px] w-[100%] rounded-[18px]' />
                    </div>
                    <div className='w-[50%] sm:w-[100%] space-y-6 lg:space-y-4 md:space-y-2'>
                        <h2 className='text-[#292F36] font-DMSerif text-[27px] lg:text-[23px] md:text-[18px]'>{name}</h2>
                        <p className='text-[22px] lg:text-[20px] md:text-[17px] sm:text-[14px] font-Jost text-[#4D5053]'>Description: {description}</p>
                        <div className='space-y-1'>
                            <p className='flex'>{renderStars()}</p>
                            <p className='text-[#AAAAAA] font-Jost text-[12px]'>93 Reviews ⮞</p>
                        </div>
                        <p className='text-[32px] lg:text-[27px] md:text-[23px] font-DMSerif'>₹ {price}</p>
                        <div className='flex gap-5 sm:gap-3 items-center'>
                            <button className='bg-[#023020] rounded-[15px] p-[14px_90px] lg:p-[12px_60px] md:p-[10px_40px] sm:p-[7px_30px] text-[#FFFFFF] font-poppins font-semibold text-[14px] lg:text-[12px] sm:text-[10px]'>ADD TO CART</button>
                            <div className='space-x-3 sm:space-x-2 flex items-center '>
                                <button className='border-[#000000] border-[1px] p-[7px_15px] lg:p-[6px_13px] md:p-[4px_9px] sm:p-[0px_5px]  font-extrabold text-[20px] rounded-[10px]'>-</button>
                                <p className='text-[24px] lg:text-[21px] sm:text-[16px] font-DMSerif text-[#121212]'>{0}</p>
                                <button className='border-[#000000] border-[1px] p-[7px_15px] lg:p-[6px_13px] md:p-[4px_9px] sm:p-[0px_5px] font-extrabold text-[20px] rounded-[10px] '>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<div className=' '>
    <h1 className='text-[#292F36] px-[10%]   font-DMSerif text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px]'>
    Similar Products
    </h1>
    <div className='px-[10%] lg:px-[5%] sm:px-[1%] my-[40px] sm:my-[20px] flex  flex-wrap   items-center justify-center gap-[40px] sm:gap-[15px]'>
                {
                    currentProducts.map((product, index) => (
                        <div key={index} className='w-[350px]  lg:w-[280px] md:w-[250px] sm:w-[150px] esm:w-[130px] rounded-[50px] sm:rounded-[20px] border-[#E7E7E7] border-[1px] p-[30px] md:p-[20px] sm:p-[10px]'>
                           <Link to={`/productDetails/${product.id}`}> <div className='space-y-2' onClick={() => handleProductChange()}>
                                <img src={product.image} alt="" className='w-[100%] h-[300px] lg:h-[220px] md:h-[200px] sm:h-[120px] rounded-[30px_30px_10px_10px]' />
                                <div className='flex justify-between items-center'>
                                    <div className='space-y-2'>
                                        <h1 className='text-[#292F36] font-DMSerif text-[25px] lg:text-[22px] md:text-[17px] sm:text-[10px]'>{product.name}</h1>
                                        <p className='font-poppins font-semibold text-[22px] lg:text-[18px] md:text-[15px] sm:text-[9px]'>₹ {product.price}</p>
                                    </div>
                                    <img src={arrow} alt="" className='md:w-[30px] lg:w-[40px] w-[50px] sm:w-[25px]' />
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
              
            </div>

            <div className="pagination text-center">
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => handlePageChange(number)} className={`${currentPage === number ? 'bg-[#F4F0EC]' : 'border-[#CDA274] border-[1px]'} p-[10px_15px] sm:p-[7px_10px] mx-2 sm:mx-1 text-[15px] md:text-[12px] sm:text-[9px] rounded-[50px]`}>
                            <span >{number}</span>
                        </button>
                    ))}
                </div>
</div>

        </div>
    );
};

export default ProductDetails;
