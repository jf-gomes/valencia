import { useContext, useState } from 'react'
import styles from './PopularItems.module.css'
import ProductsData from "./ProductsData"
import { AuthContext } from '../contexts/auth'
import PlusMinusBtn from './PlusMinusBtn'
import ConfirmationModal from './ConfirmationModal'

export default function PopularItems(){

    let popularItems = ProductsData.filter((e) => e.popularity >= 4)

    const [changeQnt, setChangeQnt] = useState(false)
    const {cartItems, setCartItems, totalPrice, setTotalPrice} = useContext(AuthContext)

    return (
        <div className={styles.popularProductsContainerDiv}>
            <ConfirmationModal />
            <h2>Os mais pedidos</h2>
            <div className={styles.popularProductsContentDiv}>
            {popularItems.map((e) => (
                <div className={styles.productDiv}>
                    <img className={styles.productImg} src={e.img} alt={e.label} />
                    <p className={styles.productLabel}>{e.label}</p>
                    <p className={styles.productPrice}>R${e.price}</p>
                    <div className={styles.btnDiv}>
                        <button style={{boxShadow: '1px 1px 10px -3px'}} className={styles.minusBtn} onClick={() => {
                            setChangeQnt(!changeQnt)
                            e.qnt -= 1
                            if (e.qnt < 1){
                                e.qnt = 1
                            }
                        }}><PlusMinusBtn type={'minus'} /></button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                            let newList = cartItems
                            newList.push({
                                id: e.id,
                                category: e.category,
                                label: e.label,
                                price: e.price,
                                img: e.img,
                                popularity: e.popularity,
                                qnt: e.qnt,
                                cartId: cartItems.length + 1,
                            })
                            setCartItems(newList)
                            setTotalPrice(totalPrice + (e.price * e.qnt))
                        }} className={styles.addBtn}>Adicionar x{e.qnt}</button>
                        <button style={{boxShadow: '1px 1px 10px -3px'}} className={styles.plusBtn} onClick={() => {
                            setChangeQnt(!changeQnt)
                            e.qnt += 1
                        }}><PlusMinusBtn type={'plus'} /></button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}