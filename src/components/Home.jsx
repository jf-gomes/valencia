import { useState } from "react"
import Header from "./Header"
import Menu from "./Menu"
import ProductsData from "./ProductsData"
import CartIcon from "./CartIcon"
import Footer from "./Footer"

export default function Home() {

  const [itemsToRender, setItemsToRender] = useState(ProductsData)

  return (
    <>
      <Header />
      <Menu items={itemsToRender} setItems={setItemsToRender} />
      <CartIcon />
      <Footer />
    </>
  )
}