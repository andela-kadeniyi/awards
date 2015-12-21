import React from 'react'
import './nav.styl'

var Nav = React.createClass({
  render: function(){
    return (
      <div>
        <nav className='parent-nav'>
          <div className="nav-wrapper blue darken-4">
            <a href="#" className="brand-logo center">Andela Awards 2015</a>
          </div>
        </nav>
      </div>
    )
  }
})

module.exports = Nav
