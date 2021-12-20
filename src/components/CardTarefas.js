import { useState } from "react";




const CardTarefa = () => {
    const [listaObjetos] = useState(
        localStorage.getItem('LISTASPWA-TRABALHO/listaobjetos')
            ? JSON.parse(localStorage.getItem('LISTASPWA-TRABALHO/listaobjetos')) : []);

    return (

        <div>

            {listaObjetos.length === 0 && <h2></h2>}

            {listaObjetos.length > 0 && (
                <div>
                    {listaObjetos.map(objeto => (
                        <div className="card" >
                            <div className="card-body">
                                <h2 className="card-title">{objeto.tarefa}</h2>
                                <h5 className="card-subtitle mb-2 text-muted">
                                    ID: {objeto.id} Data {objeto.data}</h5>
                                <p className="card-text">{objeto.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )




}

export default CardTarefa