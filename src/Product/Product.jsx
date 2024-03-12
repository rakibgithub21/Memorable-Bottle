import PropTypes from 'prop-types';

const Product = ({ product }) => {
    console.log(product);
    const { img, name, price, ratings, shipping } = product;
    return (
        <div className="card relative bg-base-100 shadow-xl h-[500px] h- md:h-[450px] lg:h-[530px]">
            <figure><img src={img} alt="" /></figure>
            <div className="p-3 w-full">
                <h2 className="text-xl font-medium">{name}</h2>
                <p className='text-[#0d5581d8] font-medium'>Price: ${price} </p>
                <p className='text-[#0d5581d8] font-medium'>Ratings: {ratings}</p>
                <p className='text-[#0d5581d8] font-medium'>Shipping: ${shipping} </p>

                <div className='absolute w-full bottom-0 left-0 p-5'>
                    <button className="btn w-full btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.obj,
}

export default Product;