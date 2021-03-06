import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends Component {

    static propTypes = {
      buttonText: PropTypes.string,
      category: PropTypes.object,
      onComplete: PropTypes.func,
      toggle: PropTypes.bool
    };
    
    constructor(props) {
      super(props);

      this.state = {
        name: props.category ? props.category.name : '',
        budget: props.category ? props.category.budget : '',
        id: props.category ? props.category.id : null,
        timestamp: props.category ? props.category.timestamp : null,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
      console.log('__FORM_PROPS__', this.props); // eslint-disable-line no-console
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onComplete(Object.assign({}, this.state));
      if(this.props.toggle) this.props.toggle();
    }

    render() {
      return (
        <form className="category-form" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>

          <input type="number" name="budget" placeholder="budget" value={this.state.budget} onChange={this.handleChange}/>

          <button type="submit">{this.props.buttonText}</button>
        </form>
      ); 
    }
}