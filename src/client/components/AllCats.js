import React, {Component} from 'react';
import { connect } from 'react-redux'
import CatCard from './CatCard'
import { fetchCats } from '../store';


class DisconnectedAllCats extends Component{
  componentDidMount(){
    this.props.goGetCats()
  }
  render(){
    const {cats} = this.props
    return (
      <div className='Cats'>
        <h1>Park's Park</h1>
          {cats.map(cat => <CatCard {...cat} key={cat.id} />)}
      </div>
    )
  }
}

const mapStateToProps = ({cats}) => ({cats})

const mapDispatchToProps = (dispatch) => ({
  goGetCats: () => {
    dispatch(fetchCats())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCats)






