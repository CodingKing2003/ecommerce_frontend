import React, { Fragment, useEffect, useState } from 'react';
import './ProductDetails.css';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from "./ReviewCard";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import { clearErrors } from '../../redux/actions/productActions';
import MetaData from '../MetaData';

const ProductDetails = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const [quantity,setQuantity]=useState(1);

  const increment=()=>{
    if (product.Stock <= quantity) return;
    const qty=quantity+1;
    setQuantity(qty);
  }

  const decrement=()=>{
    
    if (1 >= quantity) return;
    const qty=quantity-1;
    setQuantity(qty);
  }

  const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth<600?20:25,
    value:product.rating,
    isHalf:true

}

  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
    dispatch(getProductDetails(id));
  }, [dispatch, id,error]);

  return (
    <Fragment>

        
        {
            loading?<Loader />:

            
            <Fragment>
                 <MetaData title={`${product.name}--ECOMMERCE`}/>
     <div className="ProductDetails">
    <div>
      {product.images &&
        product.images.map((item, i) => (
          <img
            className="CarouselImage"
            key={i}
            src={item.url}
            alt={`${i} Slide`}
          />
        ))}
    </div>
    <div>
            <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>{product._id}</p>
            </div>
            <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numOfReviews} Reviews)</span>
            </div>
            <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                        <button onClick={decrement}>-</button>
                        <input readOnly type="number" value={quantity} />
                        <button onClick={increment}>+</button>
                    </div>{" "}
                    <button>Add to Cart</button>
                </div>
                <p>
                    Status:<b className={product.Stock<1 ? "redColor":"greenColor"}>
                        {product.Stock < 1 ? "Out Of Stock":"InStock"}

                    </b>
                </p>
            </div>
            <div className="detailsBlock-4">
                Description: <p>{product.description}</p>
            </div>
            <button className='submitReview'>Submit Review</button>
        </div>
        </div>
        
        <h3 className="reviewsHeading">REVIEWS</h3>
        {
            product.reviews && product.reviews[0]?(
                <div className="reviews">
                    {
                        product.reviews && product.reviews.map((review)=><ReviewCard review={review} />)
                    }
                </div>

            ):(
                <p className='noReviews'>No Reviews Yet</p>
            )
        }
       
      
    </Fragment>
        }
    </Fragment>
  );
};

export default ProductDetails;
