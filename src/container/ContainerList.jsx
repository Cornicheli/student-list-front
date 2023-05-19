// import { useEffect, useState } from 'react';
// import { BASE_URL } from '../api/api';
// import axios from 'axios';
// import List from './List';

// const ContainerList = () => {
//     const [busqueda, setBusqueda] = useState('');
//     const [students, setStudents] = useState([]);
//     const [order, setOrder] = useState('asc');

//     const getStudents = async () => {
//         const alumno = await axios.get(`${BASE_URL}/alumno/read`);
//         console.log(alumno.data.res);
//         const usersMap = alumno.data.res;
//         setStudents(usersMap);
//         console.log(usersMap);
//     };

//     const handleChange = e => {
//         setBusqueda(e.target.value)
//         filter(e.target.value)
//     }

//     const resetList = () => {
//         getStudents();
//     }

//     const filter = (termSearch) => {
//         const resultsSearch = students.filter((elemento) => {
//             if (
//                 elemento.nombre.toString().toLowerCase().includes(termSearch.toLowerCase())
//                 || elemento.apellido.toString().toLowerCase().includes(termSearch.toLowerCase())
//             ) {
//                 return elemento;
//             }
//         });
//         setStudents(resultsSearch)

//         if (termSearch === '') {
//             resetList();
//         }
//     }

//     const orderForAge = () => {
//         const ordenStudents = [...students].sort((a, b) => {
//             if(order === 'asc') {
//                 return a.edad - b.edad
//             } else {
//                 return b.edad - a.edad
//             }
//         })
//         setStudents(ordenStudents)
//         setOrder(order === 'asc' ? 'des' : 'asc')
//     }

//     useEffect(() => {
//         try {
//             getStudents();
//         } catch (error) {
//             console.log(error);
//         }
//     }, []);

//     return (
//         <>
//             <div className='d-flex p-2'>
//             <input
//                 className="form-control me-2"
//                 type="search"
//                 onChange={handleChange}
//                 value={busqueda}
//                 placeholder="Search"
//                 aria-label="Search"
//             />
//             </div>
//             <List students={students} orderForAge={orderForAge} />
//         </>
//     );
// };

// export default ContainerList;
