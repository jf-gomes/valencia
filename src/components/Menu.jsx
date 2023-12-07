import styles from './Menu.module.css'
import PopularItems from './PopularItems'
import AllItems from './AllItems'
import NavBar from './NavBar'

export default function Menu({ items, setItems }){
    return (
        <>
            <div className={styles.menuTitleDiv}>
                <h1>Cardápio</h1>
            </div>
            <PopularItems />
            <NavBar items={items} setItems={setItems}  />
            <AllItems items={items} setItems={setItems}  />
        </>
    )
}