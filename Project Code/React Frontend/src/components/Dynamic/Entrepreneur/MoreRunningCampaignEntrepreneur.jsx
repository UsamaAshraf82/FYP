import React from "react";
import { connect } from "react-redux";
import { categoriesAction } from "../../../redux/_actions";

class MoreRunningCampaignEntrepreneur extends React.Component {


  componentDidMount() {
    this.props.dispatch(categoriesAction.Top());
  }
  render() {
    const { loading, loaded, categories } = this.props;
    return (
      <div className="categories">
        <div className="row heading centre">
          <div className="col-md-5">
            
          </div>
        </div>

        <div className="content">
          <div className="card-deck row">
            {loading && <em>More Running Campaign Entrepreneurs</em>}

            {loaded &&
              categories.map(category => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 cateCard"
                  key={category.Name}
                >
                  <div className="card">
                    <img className="card-img-top" src="" alt="Card cap" />

                    <h5 className="card-title"> {category.Name}</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading, loaded, categories } = state.categoriesTop;
  return {
    loading,
    loaded,
    categories
  };
}

const connectedCategories = connect(mapStateToProps)(
  MoreRunningCampaignEntrepreneur
);
export { connectedCategories as MoreRunningCampaignEntrepreneur };
