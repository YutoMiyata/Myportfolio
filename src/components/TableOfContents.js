import React from 'react'
import "./TableOfContents.css"
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom'

const TableOfContents = () => {
  return (
    <div className='tableOfContent'>
        <h1>My Info</h1>
        <div className='baseComponents'>
            <div className='profileBlock'>
                <div className='profileComponents'>
                    <PersonIcon sx={{ fontSize: 70 }}/>
                    <h2>Profile</h2>
                </div>
                <Link to='/profile'><button>next</button></Link>
            </div> 

            <div className='baseWorksBlock'>
                <div className='baseWorksComponents'>
                    <LightbulbIcon sx={{ fontSize: 70 }}/>
                    <h2>Works</h2>
                </div>
                <Link to='/works'><button>next</button></Link>
            </div>
        </div>
    </div>

  )
}

export default TableOfContents
