import React, { Component } from 'react';
import { Link } from 'router-dom';

export class CategoryNavigation extends Component {
    render() {
        return <React.Fragment>
            <Link className="btn btn-secondary btn-block"
            to={ this.props.baseurl }>All</Link>

            {this.props.categories &&
                 this.props.categories.map( cat => 
                    <Link className="btn btn-secondary btn-block"
                    key={cat}
                    to={ '${this.props.baseurl}/${cat.toLowerCase()}' }>
                        {cat}
                    </Link>
                 )}
        </React.Fragment>
    }
}
