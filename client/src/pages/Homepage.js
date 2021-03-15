import React, { Component } from "react";
import { connect } from "react-redux";
import Services from "../components/Services";
import { fetchTrendingVideos } from '../redux/actions/Service.actions'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    // if (!this.props.user) return <Redirect to="/login" />;
    return this.props.services ? (
        <Services services={this.props.services} />
    ) : (
      <h1>Loading</h1>
    );
  }
}

const mapStateToProps = storeState => {
  return {

    services: storeState.ServiceState.services
  };
};

export default connect(mapStateToProps, {fetchTrendingVideos})(HomePage);