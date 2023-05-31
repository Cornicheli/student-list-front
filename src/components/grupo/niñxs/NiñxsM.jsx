import { useState ,useEffect } from 'react'
import { BASE_URL } from "../../../api/api"
import axios from 'axios'

const NiñxsM = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])
    const [order , setOrder ] = useState('asc')
    const [filteredStudents, setFilteredStudents] = useState([]);

    const getStudents = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/alumno/read`,)
            console.log(res.data.res)
            const listMap = res.data.res
            setStudents(listMap)
        } catch (error) {
        console.log(error)   
        }
    }

    // Filtrar la lista de estudiantes por nombre o apellido
    const filter = (termSearch) => {
        const resultSearch = students.filter((elemento) => {
            if (
                elemento.nombre.toString().toLowerCase().includes(termSearch.toLowerCase()) ||
                elemento.apellido.toString().toLowerCase().includes(termSearch.toLowerCase())
            ) {
                return elemento
            }
        })
            
            if (termSearch === '') {
                setFilteredStudents([]); // Restablecer la lista de estudiantes filtrados
            } else {
                setFilteredStudents(resultSearch)
            }
        }
    
        // Manejar el cambio en el campo de búsqueda
    const handleChange = e => {
        setBusqueda(e.target.value)
        filter(e.target.value)
    }

     // Ordenar la lista de estudiantes por edad en orden ascendente o descendente
    const orderForAge = () => {
        const ordenStudents = [...students].sort((a, b) => {
            if(order === 'asc') {
                return a.edad - b.edad
            } else {
                return b.edad - a.edad
            }
        })
        setStudents(ordenStudents)
        setOrder(order === 'asc' ? 'des' : 'asc')
    }

    useEffect( () => {
            try {
                getStudents()
                filter(busqueda) // Agrega esta línea para actualizar la lista de estudiantes filtrados al cargar la página
            } catch (error) {
                console.log(error)
            }
        
    } ,[] )
    
    return (
        <div>
            <h1 className='text-center fs-1 mt-3 mb-3'>Turno mañana de Niñxs</h1>
            <label className='d-flex justify-content-center aling-items-center p-2 m-2'>
                <input className="form-control w-75" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
            </label>
            <div className='container'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="colspan-5">Nombres</th>
                            <th scope="col">Apellido</th>
                            <th scope="col" onClick={orderForAge}>Edad</th>
                            <th scope="col">Turno</th>
                            <th scope="col">Lista</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        filteredStudents.length > 0
                            ? filteredStudents.map((item) => (
                            // Restablecer la lista para cada estudiante
                                <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.edad}</td>
                                <td>{item.turno}</td>
                                <td>
                                    <div className='d-flex justify-content-center'>
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" key="defaultCheck1" />
                                    </div>
                                </td>
                                </tr>
                            ))
                            : students
                            .filter((item) => item.turno === 'mañana' && item.edad <= 14)
                            .map((item) => (
                            // Lista de la tabla para cada estudiante de turno mañana
                                <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.edad}</td>
                                <td>{item.turno}</td>
                                <td>
                                    <div className='d-flex justify-content-center'>
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" key="defaultCheck1" />
                                    </div>
                                </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}


export default NiñxsM