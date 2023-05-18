import { useEffect, useState } from 'react'
import { BASE_URL } from '../api/api'
import { NavBar } from '../components'
import axios from 'axios'

const List = () => {

    const [alumnos, setAlumnos] = useState([])

    const getStudents = async () => {
        const alumno = await axios.get(`${BASE_URL}/alumno/read`);
        console.log(alumno.data.res)
        const usersMap = alumno.data.res
        setAlumnos(usersMap)
        console.log(usersMap)
    }

    useEffect( () => {
        try {
            getStudents()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
    <>
        <NavBar />
        <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="colspan-5">Nombres</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                    </tr>
                </thead>
            <tbody>
                    {
                        alumnos.map(item => (
                            <tr key={item.id}>
                                <td> {item.length} </td>
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