import React from 'react'
import ReactDom from 'react-dom'
import Nav from './Nav.js'
import Row from './Row.js'
import Helpers from '../utils/Helpers.js'

var Main = React.createClass({
  getInitialState: function(){
    return{
      emails: [],
      names: [],
      titles: [],
      desc: [],
      resp: []
    }
  },

  init: function(){
    Helpers.getInfo()
      .then(function(dataObj){
        this.setState({
          emails: dataObj.email,
          names: dataObj.name,
          titles: dataObj.title,
          desc: dataObj.desc,
        })
      }.bind(this))
  },

  valueChange: function(data, title) {
    Helpers.valueChange(data, title)
  },

  submitForm: function() {
    Helpers.postInfo()
      .then(function(dataObj){
        this.setState({
          resp: dataObj.response
        })
      }.bind(this))
  },

  componentDidMount: function(){
    this.init();
  },

  render: function(){
    console.log(this.state.resp);
    return (
      <div>
        <Nav />
        <Row emails={this.state.emails} names={this.state.names} titles={this.state.titles} desc={this.state.desc} submit={this.submitForm} valueChanger= {this.valueChange}/>
      </div>
    )
  }
})

ReactDom.render(<Main />, document.getElementById('app'))
