import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatCard from './CatCard'
import { fetchCats, loadCats } from '../store/cats';


class Park extends Component {

  constructor() {
    super();
    this.state = {
      cats: this.props
    }
  }


  render() {

    console.log(this.props)
    return (
      <div className='Cats'>
        <h1>Park</h1>
        <ul>{
          cats.map(cat => <li><CatCard {...cat} key={cat.id} /></li>)
        }</ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({cats})

const mapDispatchToProps = (dispatch) => {
  return {
    loadCats: () => {
      dispatch(fetchCats())
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Park)



