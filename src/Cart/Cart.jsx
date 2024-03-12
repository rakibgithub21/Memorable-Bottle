import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = ({ product, handleRemoveFromCart }) => {
    const { img, name, price, shipping } = product
    // console.log(product);
    return (
        <div className='flex  justify-between items-center p-2 my-3 bg-slate-300 rounded-2xl'>
            <div className='flex gap-5 items-center'>
                <img className='w-14 h-14 rounded-full' src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h5>Price: $ <span className='text-[#614b2bc5] font-medium'>{price}</span></h5>
                    <p>Shipping: $ <span className='text-[#614b2bc5] font-medium'>{shipping}</span> </p>
                </div>
            </div>
            <div className='bg-red-400 rounded-full w-12 h-12 flex justify-center items-center'>
                <button onClick={() => handleRemoveFromCart(product.id)}><RiDeleteBin5Line className='text-3xl text-red-800' /></button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired,
};

export default Cart;