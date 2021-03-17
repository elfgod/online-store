import React, { Component } from 'react'

export class ProductList extends Component {
    render() {
        if(this.props.products == null || this.props.products.length === 0 ){
            return <h4 className="p-2">No Products</h4>
        }
        return this.props.products.map(p => 
            <div key={p.id} className="bg-light card m-1 p-1">
                <h4>
                    {p.name}
                </h4>
                <span className="badge badge-pill badge-primary float-right">
                    ${ p.price.toFixed(2) }
                </span>
                <div className="card-text- bg-white p-1">
                    {p.description}
                </div>
            </div>
            
            )
    }
}
