import { useEffect, useState } from 'react'
import { BASE_URL } from '../api/api'
import { NavBar } from '../components'
import axios from 'axios'

const List = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])
    const [order , setOrder ] = useState('asc')
    const [newStudentData, setNewStudentData] = useState({
        nombre : '',
        apellido: '',
        edad: 0
    })

    const getStudents = async () => {
        const alumno = await axios.get(`${BASE_URL}/alumno/read`)
        console.log(alumno.data.res)
        const usersMap = alumno.data.res
        setStudents(usersMap)
        console.log(usersMap)
    }

    const createStudent  = async () => {
        try {
            
            const alumno = await axios.post(`${BASE_URL}/alumno/create`, newStudentData)
            console.log('Alumno creado:', alumno.data);
            const createdStudent = alumno.data
            setStudents([...students], createdStudent)

        } catch (error) {
            console.error('Error al crear alumno:', error);
        }
        
    }

    const deleteStudent = async (id) => {
        await axios.delete(`${BASE_URL}/alumno/delete/${id}`);
        const filteredStudents = students.filter(student => student.id !== id);
        setStudents(filteredStudents);
    }

    const updateStudent = async (id, updateStudent) => {
        await axios.put(`${BASE_URL}/alumno/update/${id}`, updateStudent)
        const updatedStudents = students.map(student => {
            if(student.id === id){
                return { ...student, ...updatedStudents} 
            }
        })
    }

    const handleChange = e => {
        setBusqueda(e.target.value)
        filter(e.target.value)
    }

    const handleInputChange = (e) => {
        setNewStudentData({
            ...newStudentData, [e.target.name] : e.target.value
        })
    }

    const handleCreateClick = () => {
        createStudent();
      };

    const resetList = () => {
        getStudents();
    }

    const filter = (termSearch) => {
        const resultsSearch = students.filter((elemento) => {
            if (
                elemento.nombre.toString().toLowerCase().includes(termSearch.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(termSearch.toLowerCase())
            ) {
                return elemento
            }
        });
        setStudents(resultsSearch)

        if (termSearch === '') {
            resetList();
        }
    }

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

    useEffect(() => {
        try {
            getStudents()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <NavBar />

            <div className='d-flex p-2'>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-auto">
                                        <input type="text"  className="form-control-plaintext" id="staticEmail2" placeholder="nombre" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="text"  className="form-control-plaintext" id="staticEmail2" placeholder="apellido" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" className="form-control" id="inputPassword2" placeholder="edad" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-3">Confirm Edit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
                <input className="form-control me-2" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Edit
                </button>
            </div>
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
                        students.map(item => (
                            <tr key={item.id}>
                                <td> {item.nombre} </td>
                                <td> {item.apellido} </td>
                                <td> {item.edad} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default List