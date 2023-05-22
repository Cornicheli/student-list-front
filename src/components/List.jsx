import { useEffect, useState } from 'react'
import { BASE_URL } from '../api/api'
import { NavBar } from '../components'
import axios from 'axios'

const List = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])
    const [order , setOrder ] = useState('asc')
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        nombre : '',
        apellido: '',
        edad: 0
    })

    // Obtener la lista de estudiantes desde la API al cargar el componente
    const getStudents = async () => {
        try {
            const alumno = await axios.get(`${BASE_URL}/alumno/read`)
            console.log(alumno.data.res)
            const usersMap = alumno.data.res
            setStudents(usersMap)
            console.log(usersMap)
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

    // Obtener la lista de estudiantes al cargar el componente
    useEffect(() => {
        try {
            getStudents()
            filter(busqueda); // Agrega esta línea para actualizar la lista de estudiantes filtrados al cargar la página
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <NavBar />

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
                                <form className="row g-3" onSubmit={createStudent}>

                                    <div className="col-auto">
                                        {/* Campo de entrada para el nombre */}
                                        <input type="text"
                                            className="form-control-plaintext"
                                            name='nombre' onChange={handleInputChange}
                                            id="staticEmail2" placeholder="nombre"
                                        />

                                    </div>
                                    <div className="col-auto">
                                        {/* Campo de entrada para el apellido */}
                                        <input type="text"
                                            className="form-control-plaintext"
                                            name="apellido" onChange={handleInputChange}
                                            id="staticEmail2" placeholder="apellido"
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
                                        {/* Botón para agregar un nuevo estudiante */}
                                        <button type="submit" className="btn btn-primary mb-3"> Agregar </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Campo de búsqueda */}
                <input className="form-control me-2" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
                {/* Botón para abrir el modal de creación */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Edit
                </button>
            </div>
            {/* Tabla de estudiantes */}
            <div className='container'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="colspan-5">Nombres</th>
                            <th scope="col">Apellido</th>
                            <th scope="col" onClick={orderForAge} >Edad</th>
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
                            : students.map((item) => (
                                // Lista de la tabla para cada estudiante
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
        </>
    )
}

export default List




    // const deleteStudent = async (id) => {
    //     await axios.delete(`${BASE_URL}/alumno/delete/${id}`);
    //     const filteredStudents = students.filter(student => student.id !== id);
    //     setStudents(filteredStudents);
    // }

    // const updateStudent = async (id, updateStudent) => {
    //     await axios.put(`${BASE_URL}/alumno/update/${id}`, updateStudent)
    //     const updatedStudents = students.map(student => {
    //         if(student.id === id){
    //             return { ...student, ...updatedStudents} 
    //         }
    //     })
    // }
