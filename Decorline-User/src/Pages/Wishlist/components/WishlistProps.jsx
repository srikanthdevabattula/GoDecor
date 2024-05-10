import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../../redux/reducers/productReducer';
import arrow from '../../../assets/products/arrow.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const WishlistProps = () => {
    const [category, setCategory] = useState('bathroom');
    const [currentPage, setCurrentPage] = useState(1);
    const [wishlistIds, setWishlistIds] = useState([]);
    const products = useSelector(productsSelector);
    const productsPerPage = 8;

    
    useEffect(() => {
        const fetchWishlistIds = async () => {
            try {
                const token = Cookies.get('token');
                if (!token) {
                    throw new Error('Access token not found in cookies');
                }

                const response = await fetch('https://go-decor.vercel.app/api/v1/favoriteProduct', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                        // Add any other headers as needed
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch wishlist IDs');
                }

                const data = await response.json();
                console.log('ids',data.data)
                const wishlistIds = data.data
                setWishlistIds(wishlistIds);
            } catch (error) {
                console.error('Error fetching wishlist IDs:', error);
            }
        };

        fetchWishlistIds();
    }, []);
console.log('pp',products)
    const filteredProducts = products.filter(product => product.category === category && wishlistIds.includes(product._id));
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const changeCategory = (newCategory) => {
        setCategory(newCategory);
        setCurrentPage(1); // Reset page number to 1 when changing category
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page number
    };
    

    return (
        <div className=''>
        <div className='flex justify-center'>
            <div className='border-[#CDA274] flex border-[1px] rounded-[18px] h-[75px] lg:h-[60px] md:h-[50px] sm:h-[35px] w-[880px] lg:w-[700px] md:w-[500px] sm:w-[280px]'>
                <button onClick={() => changeCategory('bathroom')} className={`text-center w-[25%] ${category == 'bathroom' && 'bg-[#CDA274] rounded-[18px] text-[white]'} font-Jost text-[18px] lg:text-[16px] md:text-[14px] sm:text-[10px] font-semibold`}>Bathroom</button>
                <button onClick={() => changeCategory('bed room')} className={`text-center w-[25%] ${category == 'bed room' && 'bg-[#CDA274] rounded-[18px] text-[white]'} font-Jost text-[18px] lg:text-[16px] md:text-[14px] sm:text-[10px] font-semibold`}>Bed Room</button>
                <button onClick={() => changeCategory('kitchen')} className={`text-center w-[25%] ${category == 'kitchen' && 'bg-[#CDA274] rounded-[18px] text-[white]'} font-Jost text-[18px] lg:text-[16px] md:text-[14px] sm:text-[10px] font-semibold`}>Kitchen</button>
                <button onClick={() => changeCategory('living area')} className={`text-center w-[25%] ${category == 'living area' && 'bg-[#CDA274] rounded-[18px] text-[white]'} font-Jost text-[18px] lg:text-[16px] md:text-[14px] sm:text-[10px] font-semibold`}>Living Area</button>
            </div>
        </div>
        <div className='px-[10%] sm:px-[5%] my-[40px] flex  flex-wrap   items-center justify-center gap-[40px] sm:gap-[25px]'>
            {
                currentProducts.map((product, index) => (
                    <div key={index} className='w-[400px]  lg:w-[350px] md:w-[250px] sm:w-[120px]'>
                       <Link to={`/productDetails/${product._id}`} > <div className='space-y-2'>
                            <img src={product.images[0]} alt="" className='w-[100%] h-[400px] md:h-[300px] sm:h-[120px]' />
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
    );
}

export default WishlistProps;
