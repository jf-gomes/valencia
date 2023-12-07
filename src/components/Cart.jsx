import styles from './Cart.module.css'
import Header from './Header'
import { AuthContext } from '../contexts/auth'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Cart(){

    const {cartItems, setCartItems, setTotalPrice, totalPrice} = useContext(AuthContext)

    useEffect(() => {
        if (totalPrice < 0){
            setTotalPrice(0)
        }
    }, [totalPrice])

    return (
        <>
            <Header />
            <div className={styles.cartTitleDiv}>
                <h1>Seu carrinho</h1>
            </div>
            <div className={styles.cartContainerDiv}>
                {cartItems.map((e) => (
                    <div className={styles.cartProductDiv}>
                        <div className={styles.productLeftDiv}>
                            <img className={styles.productImg} src={e.img} alt={e.label} />
                            <div className={styles.productLabels}>
                                <p>{e.label}</p>
                                <p>{e.qnt}x</p>
                                <p>R${e.price}</p>
                                <p className={styles.totalPrice}>Total: R${e.qnt * e.price}</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            let newList = cartItems.filter((i) => i.cartId != e.cartId)
                            setTotalPrice((totalPrice - (e.qnt * e.price)))
                            setCartItems(newList)
                        }} className={styles.productRightDiv}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </div>
                    </div>
                ))}
                <div className={styles.totalPriceDiv}>
                    <p>Valor total:</p>
                    <div className={styles.totalPriceDivRightDiv}>
                        <p style={{fontSize: '1.3em', fontWeight: 'bold'}}>R${totalPrice.toFixed(2)}</p>
                        <div className={styles.totalPriceDivBtnDiv}>
                            <button className={styles.placeOrderBtn}>Finalizar pedido</button>
                            <Link to='/restaurant-order-website/'><button className={styles.addMoreItemsBtn}>Adicionar mais itens</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}