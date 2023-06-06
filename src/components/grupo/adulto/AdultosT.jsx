import { useState ,useEffect } from 'react'
import { BASE_URL } from "../../../api/api"
import { Title } from '../../index'
import axios from 'axios'

const AdultosT = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])
    const [order , setOrder ] = useState('asc')
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        nombre : '',
        apellido: '',
        edad: 0,
        turno: '',
        horario: '',
        grupo: '',
    })

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

     // Crear un nuevo estudiante
    const createStudent  = async (e) => {
        e.preventDefault()
        try {
            const alumno = await axios.post(`${BASE_URL}/alumno/create`, newStudent)
            console.log('Alumno creado:', alumno.data);
            const createdStudent = alumno.data
            setStudents([...students, createdStudent])
        } catch (error) {
            console.error('Error al crear alumno:', error);
        }
    }

    // Actualizar el estado cuando cambian los campos del formulario de creación
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        let newStudentData = { ...newStudent, [name]: value }
        setNewStudent(newStudentData)
        console.log(newStudentData)
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
            <Title title='Turno tarde de Adultos' />
            <div className='d-flex p-2'>
                {/* Modal para agregar un nuevo estudiante */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Nuevo Alumno</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Formulario para agregar un nuevo estudiante */}
                                <form className="row g-3 justify-content-center" onSubmit={createStudent}>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la nombre */}
                                        <input type="text"
                                            className="form-control"
                                            name='nombre' onChange={handleInputChange}
                                            id="inputPassword2" placeholder="nombre"
                                        />
                                    </div>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la apellido */}
                                        <input type="text"
                                            className="form-control"
                                            name='apellido' onChange={handleInputChange}
                                            id="inputPassword2" placeholder="apellido"
                                        />
                                    </div>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la edad */}
                                        <input type="number"
                                            className="form-control"
                                            name='edad' onChange={handleInputChange}
                                            id="inputPassword2" placeholder="edad"
                                        />
                                    </div>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la horario */}
                                        <input type="text"
                                            className="form-control"
                                            name='horario' onChange={handleInputChange}
                                            id="inputPassword2" placeholder="horario"
                                        />
                                    </div>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la turno */}
                                        <select
                                        className="form-select w-full" aria-label="Default select example"
                                        name="turno" onChange={handleInputChange}
                                        >

                                        <option disabled selected>Turno</option>
                                        <option value="mañana">Mañana</option>
                                        <option value="tarde">Tarde</option>
                                        <option value="noche">Noche</option>

                                        </select>
                                    </div>

                                    <div className="col-auto">
                                        {/* Campo de entrada para la grupo */}
                                        <select
                                        className="form-select w-full" aria-label="Default select example"
                                        name="grupo" onChange={handleInputChange}
                                        >
                                            <option disabled selected>Grupo</option>
                                            <option value="mañana">Adultos</option>
                                            <option value="tarde">Niños</option>
                                            <option value="noche">Aquagym</option>
                                            <option value="noche">Libre</option>

                                        </select>
                                    </div>

                                    <div className="col-auto">
                                        {/* Botón para agregar un nuevo estudiante */}
                                        <button type="submit" className="btn btn-primary mb-3"> Agregar </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly w-100'>
                    {/* Campo de búsqueda */}
                    <input className="form-control w-75" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
                    {/* Botón para abrir el modal de creación */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Edit
                    </button>
                </div>
            </div>
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
                            .filter((item) => item.turno === 'tarde' && item.edad >= 14)
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

export default AdultosT