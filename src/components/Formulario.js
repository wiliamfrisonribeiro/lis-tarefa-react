import { useContext } from "react"

import Alerta from "./Alerta"

import ToDoListContext from "./ToDoListContext";
function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ToDoListContext);


    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lista</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtTarefa" className="form-label">
                                    Tarefa
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtTarefa"
                                    name="tarefa"
                                    required
                                    value={objeto.tarefa}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <textarea className="form-control" id="txtDescricao"   name="descricao" rows="3" value={objeto.descricao}
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtData" className="form-label">
                                    Data
                                </label>
                                <input
                                    className="form-control"
                                    id="txtData"
                                    name="data"
                                    value={objeto.data}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
                                Salvar <i className="bi bi-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )



}

export default Formulario