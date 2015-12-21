import React from 'react'
import { SimpleSelect, MultiSelect } from 'react-selectize'
import './column.styl'

var Column = React.createClass({
  getDefaultProps: function() {
    return {
      names: ['no value'],
      emails: ['no value']
    };
  },

  render: function(){
    var name_val = this.props.names
    var options = this.props.emails.map(function(option, index){
      return (<option value={option} key={index}>{name_val[index]}</option>)
    })
    return (
      <div>
        <div className='col s12 m6 l4 column'>
          <div className='center'>
            <h4>"{this.props.title}"</h4>
            <p>{this.props.description}</p>
          </div>
          <SimpleSelect placeholder = "Type or Select a name"
            className='simple-container'
            onValueChange = {function(value, callback){
              this.props.valueChange(value.value,this.props.title)
              callback();
            }.bind(this)}
          >
            {options}
          </SimpleSelect>
        </div>
      </div>

    )
  }
})

module.exports = Column
