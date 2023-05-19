import { useEffect, useState } from 'react'
import { BASE_URL } from '../api/api'
import { NavBar } from '../components'
import axios from 'axios'

const List = () => {

    const [busqueda, setBusqueda] = useState('')
    const [students, setStudents] = useState([])

    const getStudents = async () => {
        const alumno = await axios.get(`${BASE_URL}/alumno/read`);
        console.log(alumno.data.res)
        const usersMap = alumno.data.res
        setStudents(usersMap)
        console.log(usersMap)
    }

    const handleChange = e => {
        setBusqueda(e.target.value)
        filter(e.target.value)
    }

    const resetList = () => {
        getStudents();
    }

    const filter = (termSearch) => {
        const resultsSearch = students.filter((elemento) => {
            if (
                elemento.nombre.toString().toLowerCase().includes(termSearch.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(termSearch.toLowerCase())
            ) {
                return elemento;
            }
        });
        setStudents(resultsSearch)

        if (termSearch === '') {
            resetList();
        }
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
                <input className="form-control me-2" type="search" onChange={handleChange} value={busqueda} placeholder="Search" aria-label="Search" />
            </div>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="colspan-5">Nombres</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
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