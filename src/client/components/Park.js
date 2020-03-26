import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


const Park =()=> {
    return (
      <div className='all-cats'>
        <h1>Welcome to Peter's Park</h1>
        <Link to='/cats'>Click Here to See All Our our Famous Cats!</Link>
      </div>
    )
}

export default Park




