import React, { Component } from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

 class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    };
    componentDidMount() {
        this.props.fetchProducts();
    };
    openModel = (product) => {
        this.setState({ product });
    };
    closeModel = () => {
        this.setState({ product: null });
    };
    render() {
        const { product} = this.state;
        return (
            <div>
                <Fade bottom cascade>
                    {!this.props.products ? ( 
                    <div>Loading...</div> 
                            ) : (
                        <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id} onClick={() => this.openModel(product)}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className="button" onClick={() => this.props.addToCart(product)}>
                                            Add To Cart
                                        </button>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                            )
                    }
             
                </Fade>
                {
                    product && (
                        <Modal isOpen={true} onRequestClose={this.closeModel}>
                            <Zoom>
                                <button className="close-modal"onClick={this.closeModel}>x</button>
                                <div className="product-details">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-details-description">
                                        <p>
                                            <strong>{product.title}</strong>
                                        </p>
                                        <p>
                                            {product.description}
                                        </p>
                                        <p>
                                            Category Food:{" "}
                                            {product.categoryFood.map((x)=>(
                                                <span>{" "} <button className="button">{x}</button></span>
                                            ))}
                                        </p>
                                        <div className="product-price">
                                            <div>
                                                {formatCurrency(product.price)}
                                            </div>
                                            <button className="button primary" onClick={()=>{
                                                this.props.addToCart(product);
                                                this.closeModel();
                                            }}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </Zoom>
                        </Modal>
                    )
                }
            </div>
        )
    }
}
export default connect((state) => ({ products: state.products.filteredItems }), {
    fetchProducts,
    addToCart,
})(Products);
