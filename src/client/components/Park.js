import React, {Component} from 'react';
import { connect } from 'react-redux'
import CatCard from './CatCard'
import { fetchCats } from '../store';


class Park extends Component{
  componentDidMount(){
    this.props.load()
  }
  render(){
    console.log('store', this.props)
    return (
      <div className='Cats'>
        <h1>Park's Park</h1>
        <ul>{
          cats.map(cat => <li><CatCard {...cat} key={cat.id} /></li>)
        }</ul>
      </div>
    )

  }
}

// const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(fetchCats())
  }
})



export default connect(null, mapDispatchToProps)(Park)



