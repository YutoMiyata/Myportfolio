import React from 'react'
import "./TableOfContents.css"
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom';
import ButtonRectangle from './ButtonRectangle';
import MainTitle from './MainTitle';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


const TableOfContents = () => {
  return (
    <div className='tableOfContent'>
        <MainTitle  MainTitle="My Info"  Icon={<EmojiPeopleIcon sx={{ fontSize: 70 }} />}/>
        <div className='baseComponents'>
            <div className='profileBlock'>
                <div className='profileComponents'>
                    <PersonIcon sx={{ fontSize: 70 }}/>
                    <h2>Profile</h2>
                </div>
                <Link to='/profile'><ButtonRectangle message="next"/></Link>
            </div> 

            <div className='baseWorksBlock'>
                <div className='baseWorksComponents'>
                    <LightbulbIcon sx={{ fontSize: 70 }}/>
                    <h2>Works</h2>
                </div>
                <Link to='/works'><ButtonRectangle message="next"/></Link>
            </div>
        </div>
    </div>

  )
}

export default TableOfContents
