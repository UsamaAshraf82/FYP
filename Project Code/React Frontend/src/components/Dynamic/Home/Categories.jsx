import React from 'react';
import { connect } from 'react-redux';
import { categoriesAction } from '../../../redux/_actions';
import Img from 'react-cloudinary-lazy-image';


class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(
            categoriesAction.Top()
        );
    }
    render() {
        const { loading, loaded, categories } = this.props
        return (
            <div className="categories">
                <div className="row heading centre">
                    <div className="col-md-5">
                        <h1>Top Categories</h1>
                    </div>
                </div>



                <div className="content">
                    <div className="card-deck row">
                        {loading && <em>Loading Top Categories...</em>}

                        {loaded &&
                            categories.map((category) =>

                                <div className="col-lg-3 col-md-6 col-sm-12 cateCard" key={category.Name}>
                                    <a className="card cardhover" href={'/Categories/' + category.CategoryId}>
                                        <Img
                                            cloudName={'dgptopskq'}
                                            imageName={category.Image + ".webp"}
                                            fixed={{
                                                height: 210,
                                                width: 253
                                            }}
                                            urlParams={'c_fill,g_face:auto'}
                                        />

                                        <h5 className="card-title"> {category.Name}</h5>


                                    </a>
                                </div>

                            )
                        }
                    </div>
                </div>



            </div>
        );
    }
}



function mapStateToProps(state) {
    const { loading, loaded, categories } = state.categoriesTop
    return {
        loading,
        loaded,
        categories
    };
}

const connectedCategories = connect(mapStateToProps)(Categories);
export { connectedCategories as Categories };
