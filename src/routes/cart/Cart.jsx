import React from 'react';
import './Cart.scss';
import Container from '../../utils/Container';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { shortenDescription } from '../../helpers/shortenDescription';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { SlBasket } from 'react-icons/sl';

const Cart = () => {
    const dataInStore = useSelector(data => data);
    const dispatch = useDispatch();

    return (
        <section>
            <Container>
                <h2 className='cart-heading'>Products in cart <SlBasket /></h2>
                <ul className='basketed-products'>
                    {dataInStore.basketed.baskets.length > 0 ?
                        dataInStore.basketed.baskets.map(product => {
                            return <li key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    {
                                        product.images[0].startsWith('https://') && !product.images[0].startsWith('https://www.google') ?
                                            <img src={product.images[0]} alt="product" />
                                            : <img src={'https://avatars.mds.yandex.net/i?id=48d631e1e1de7efce8207be0d389470557260b5d-7755895-images-thumbs&n=13'} alt="product" />
                                    }
                                    <h5>${product.price}</h5>
                                    <h4>{product.title}</h4>
                                    <p>{shortenDescription("word", 4, product.description)}</p>
                                </Link>
                                {dataInStore.like.likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill className='heart-icon' onClick={() => { dispatch({ id: product.id, type: "REMOVE_FROM_WISHLIST" }) }} style={{ color: "red" }} /> : <FiHeart className='heart-icon' onClick={() => { dispatch({ product, type: "ADD_TO_WISHLIST" }) }} />}
                                {dataInStore.basketed.baskets.find(p => p?.id === product?.id) ? <button className='cart-btn' onClick={() => { dispatch({ id: product.id, type: "REMOVE_FROM_BASKET_LIST" }) }}>Remove from cart <SlBasket className='cart' /></button> : <button className='cart-btn' onClick={() => { dispatch({ basket: product, type: "ADD_TO_BASKET_LIST" }) }}>Add to cart <SlBasket className='cart' /></button>}
                            </li>
                        }) :
                        <h3>Nothing added to the cart yet... :&#40;</h3>
                    }
                </ul>
            </Container>
        </section>
    )
}

export default Cart