import axios from 'axios';
import React, {useEffect ,useState} from 'react';

const SeguroList = ()=> {
    const [lista, setList] = useState ()

    useEffect(()=> {
        todosAsegurados(setList)
    },[])

    return(
        <div>hola</div>
    )
}


export default SeguroList
