import React from 'react'
import Column from './Column.js'

import './row.styl'

var Row = React.createClass({
  getDefaultProps: function() {
    return {
      desc: ['no value'],
      titles: ['no value']
    };
  },

  handleSubmit: function() {
    var data = {
      hello: 'hello',
      hi: 'hi'
    }
    this.props.submit()
  },

  render: function(){
    var description = this.props.desc
    var emails = this.props.emails
    var names = this.props.names
    var hidden = this.props.desc.length > 1 ? 'hel': 'hidden'
    var columns = this.props.titles.map(function(t,index){
      return (<Column title={t} description={description[index]} emails={emails} names={names} key={index} valueChange={this.props.valueChanger} />)
    }.bind(this));

    return (
      <div>
        <div className='row each-row'>
          {columns}
        </div>
        <div className={'button-container '+ hidden} >
          <button className='waves-effect waves-light blue darken-1 btn-large center' onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
})

module.exports = Row
