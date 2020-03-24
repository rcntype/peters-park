import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'


export class DisconnectedAllCats extends React.Component {

  render() {
    const {cats} = this.props
    console.log(this.props)
    return (
      <div className='all-cats'>
        <h1>Peter's Park</h1>
        <ul>{
          cats.map(cat => <li><CatCard {...cat} key={cat.id} /></li>)
        }</ul>
      </div>
    )
  }
}

export const mapStateToProps = (state)=> (state)

export const mapDispatchToProps = (dispatch) => ({goGetCats: () => dispatch()})

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCats)



