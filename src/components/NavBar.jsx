import { useState, useEffect } from "react"
import ProductsData from "./ProductsData"

export default function NavBar({ setItems }){

    const [change, setChange] = useState(false)
    const [itemToRender, setItemToRender] = useState('todos')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        switch (itemToRender){
            case 'todos':
                setItems(ProductsData)
                break
            case 'brownie':
                setItems(ProductsData.filter((e) => e.category == 'brownie'))
                break
            case 'milkshake':
                setItems(ProductsData.filter((e) => e.category == 'milkshake'))
                break
            case 'bolos':
                setItems(ProductsData.filter((e) => e.category == 'bolos'))
                break
            case 'cafes':
                setItems(ProductsData.filter((e) => e.category == 'cafes'))
                break
            case 'salgados':
                setItems(ProductsData.filter((e) => e.category == 'salgados'))
                break
        }
    }, [itemToRender])

    useEffect(() => {
        if (!searchText){
            setItems(ProductsData)
        } else {
            setItems(ProductsData.filter((e) => e.label.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
            setChange(!change)
        }
    }, [searchText])

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('todos')}>Todos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('brownie')}>Brownies</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('milkshake')}>Milkshakes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('bolos')}>Bolos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('cafes')}>Cafés</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active navBtn" aria-current="page" onClick={() => setItemToRender('salgados')}>Salgados</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </form>
                </div>
            </div>
        </nav>
    )
}