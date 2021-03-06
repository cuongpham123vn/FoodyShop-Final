import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../actions/productActions';
import { sortProducts } from '../actions/productActions';

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
                <div>Loading...</div>
            ) : (
                <div className="filter">
                    <div className="filter-result">
                        {this.props.filteredProducts.length} Products 
                    </div>
                    <div className="filter-sort">
                        Order {" "}
                        <select 
                            value={this.props.sort} 
                            onChange={(e) => 
                            this.props.sortProducts(
                                this.props.filteredProducts, 
                                e.target.value)}>
                            <option value="latest">
                                Latest
                            </option>
                            <option value="lowest">
                                Lowest
                            </option>
                            <option value="highest">
                                Highest
                            </option>
                        </select>
                    </div>
                    <div className="filter-category">
                        Filter {" "}
                        <select 
                            value={this.props.category} 
                            onChange={(e) => 
                                this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">
                                All
                            </option>
                            <option value="Eat">
                                Eat
                            </option>
                            <option value="Drink">
                                Drink
                            </option>
                            <option value="Fruit">
                                Fruit
                            </option>
                        </select>
                    </div>
                </div>
            );
    }
}
export default connect((state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),
    {
        filterProducts,
        sortProducts,
    }
)(Filter);
