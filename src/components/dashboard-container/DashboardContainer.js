import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions';
import * as utils from '../../lib/utils';
import CategoryForm from '../category-form/CategoryForm';
import CategoryItem from '../category-item/CategoryItem';

class DashboardContainer extends Component {

  static propTypes = {
    categories: PropTypes.array,
    categoryCreate: PropTypes.func,
    categoryUpdate: PropTypes.func,
    categoryDelete: PropTypes.func
  };

  componentDidMount() {
    console.log('__DASHBOARD__', this); // eslint-disable-line no-console
    this.props.categoryCreate({ name: 'pokemon', budget: 100 });
    this.props.categoryCreate({ name: 'star wars', budget: 200 });
    this.props.categoryCreate({ name: 'dune', budget: 300 });
  } 
 
  render() {
    return (
      <main className="dashboard-container">
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText="create form"
          onComplete={this.props.categoryCreate}/>
        
        {utils.renderIf(this.props.categories,
          <ul>
            {this.props.categories.map(item => 
              <CategoryItem key={item.id} category={item} onComplete={this.props.categoryUpdate} />
            )}
          </ul>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);