import { useState ,useEffect } from 'react'
import { BASE_URL } from "../../api/api"
import axios from 'axios'

const Noche = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])
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
            <h1 className='text-center fs-1 mt-3 mb-3'>Turno noche</h1>
            <input className="form-control me-2" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
            <div className='container'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="colspan-5">Nombres</th>
                            <th scope="col">Apellido</th>
                            <th scope="col" 
                            // onClick={orderForAge}
                            >Edad</th>
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
                                </tr>
                            ))
                            : students
                            .filter((item) => item.turno === 'mañana')
                            .map((item) => (
                              // Lista de la tabla para cada estudiante de turno mañana
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.edad >= 18 ? 'Adulto' : 'Niño'}</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Noche