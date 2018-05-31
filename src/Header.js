import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/form1'>Formik</Link></li>
        <li><Link to='/form2'>Redux Form</Link></li>
        <li><Link to='/form3'>Final Form</Link></li>
        <li><Link to='/form4'>React Form</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header