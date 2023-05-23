import React from 'react'
import { NavLink } from 'react-router-dom'

export const Table = ({ turno, linkTo }) => {
  return (
    <li>
      <NavLink className="dropdown-item bg-dark p-2" to={linkTo}>
        <li>
        {turno}
        </li>
      </NavLink>
    </li>
  )
}
