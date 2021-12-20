import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import ToDoListContext from "./ToDoListContext";
import Tabela from "./Tabela";

function Lista() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('LISTASPWA-TRABALHO/listaobjetos')
        ? JSON.parse(localStorage.getItem('LISTASPWA-TRABALHO/listaobjetos')) : []);

    const [alerta, setAlerta] = useState( { status: "", message: "" });

    //const [sequenciaCodigo, setSequenciaCodigo] = useState(0);

    const [objeto, setObjeto] = useState({id: 0, nome: "", autor: "", ano:""});

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar) {
            // encontrar o id do objeto a ser editado
            const index = listaObjetos.findIndex(p => p.id === objeto.id);
            // remover o objeto do state para ser editado
            const listaObjetosTemp = listaObjetos.splice(0, index).concat(listaObjetos.splice(index + 1));
            // colocamos de volta no state o objeto 
            const newlistaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);
            setListaObjetos(newlistaObjetos);
            setAlerta({ status: "success", message: "Lista editado com sucesso" });
        } else { // novo livro
            if (objeto.id === 0) {
                var idautal = localStorage.getItem('LISTASPWA-TRABALHOsequenciaid');
                if (idautal === null){
                    idautal = 0;
                }
                var novoid = Number(idautal) + 1;
                objeto.id = novoid;
                //setSequenciaCodigo(novoid);
                localStorage.setItem('LISTASPWA-TRABALHOsequenciaid', novoid);
                setListaObjetos([...listaObjetos, objeto]);
                setAlerta({ status: "success", message: "Lista criado com sucesso" });
            }
        }
    };  
	
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }	

    const acaoRemover = objeto => {
        if (window.confirm("Remover esta lista?")){
            const listaObjetosTemp = 
            listaObjetos.filter(p => p.id !== objeto.id);
            setListaObjetos(listaObjetosTemp);
            setAlerta({ status: "success", message: "Livro removido com sucesso!" })     
        }
    }

    useEffect( () => {
        localStorage.setItem('LISTASPWA-TRABALHO/listaobjetos', JSON.stringify(listaObjetos));
    },[listaObjetos]);

    return (
        <ToDoListContext.Provider value={
            { listaObjetos, acaoRemover, alerta, setAlerta, objeto, setObjeto, 
                editar, setEditar, acaoCadastrar, handleChange}
        }>
            <Tabela />
            <Formulario/>
        </ToDoListContext.Provider>
    )

}

export default Lista;