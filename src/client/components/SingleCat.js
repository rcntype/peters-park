import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'

export class DisconnectedSingleCat extends React.Component {

  render() {
    return (
      <div className='single-cat'>
        <h2>{this.props.name}</h2>
        <img src={this.props.imageUrl}></img>
        <ul className='toys'>
          {this.props.toyRatings.map(cat => <li>{cat.toyRatings}</li>)}
        </ul>
        <div className='friends'>
          <h3>Friends</h3>
          <ul>
            {this.props.friends.map(friend => <li><CatCard key={friend.id} {...friend}/></li>)}
          </ul>

        </div>
      </div >
    )
  }
}

export const mapStateToProps = (state) => ({...state.cat})

export const mapDispatchToProps = (dispatch) => ({goGetCat : () => dispatch()})

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedSingleCat)



