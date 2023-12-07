import { Link } from "react-router-dom"

export default function ConfirmationModal(){
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color: 'black', fontFamily: 'Fira Sans'}}>Confirmação</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Produto adicionado ao carrinho!
                        </div>
                        <div class="modal-footer">
                            <Link to='./cart'><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ir para o carrinho</button></Link>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Adicionar mais itens</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}