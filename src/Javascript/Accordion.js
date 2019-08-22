import React from 'react';
import $ from 'jquery';
var ReactDOM = require('react-dom');

require('jquery-ui/ui/widgets/accordion');

class Accordion extends React.Component{
    constructor(props){
        super(props);

        // active index
        Object.defineProperty(this, 'active', {
            get: function() {
                return this.$el.accordion('option', 'active');
            },
            set: function(index) {
                this.$el.accordion('option', {active: index});
            }
        })

        // activeHeader element
        Object.defineProperty(this, 'activeHeader', {
            get: function() {
            var selector = this.$el.accordion('option', 'header');
            return this.$el.find(selector)[this.active];
            }
        })
    }

  componentDidMount(){
    // get accordion DOM node
    this.$el = $(ReactDOM.findDOMNode(this));
    // init with config
    this.$el.accordion((this.props.options || {}));
  }

  render() {
    // create element and children
    return React.createElement(
      'div',
      { className: 'react-jqueryui-accordion' },
      this.props.children
    );
  }
}

export default Accordion;