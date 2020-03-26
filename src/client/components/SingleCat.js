import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'
import { fetchCat } from '../store'

export class DisconnectedSingleCat extends React.Component {
  componentDidMount(){
    this.props.goGetCat(this.props.match.params.catId)
  }

  render() {
    const {cat} = this.props
    return (
      cat.name ? 
      <div className='single-cat'>
        <h2>{cat.name}</h2>
        <img src={cat.imageUrl}></img>
        <ul className='oneCat'>
          {cat.toyRatings.map(rating => <li>{rating.toyRatings}</li>)}
        </ul>
        <div className='friends'>
          <h3>Friends</h3>
          <ul>
            {cat.friends.map(friend => <li><CatCard key={friend.id} {...friend}/></li>)}
          </ul> 
        </div>
      </div > : <span>Loading...</span>
    )
  }
}

export const mapStateToProps = ({cat}) => ({cat})

export const mapDispatchToProps = (dispatch) => {
  return {
    goGetCat : (id) => {dispatch(fetchCat(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedSingleCat)



