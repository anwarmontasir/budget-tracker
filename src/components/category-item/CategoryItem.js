import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateForm from '../category-form/CategoryForm';

export default class CategoryItem extends Component {
  
  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleDelete() {
    console.log(this.props); // eslint-disable-line no-console
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    return (
      <li onDoubleClick={this.toggleEdit}>
        {this.state.editing ?
          <CreateForm
            buttonText="update category" 
            onComplete={this.props.onComplete}
            category={this.props.category}
            toggle={this.toggleEdit}/> :
          <div>
            <button onClick={this.handleDelete}>x</button>
            <p>{this.props.category.name}</p>
            <p>{this.props.category.budget}</p>
          </div>
        }
      </li>
    );
  }
}