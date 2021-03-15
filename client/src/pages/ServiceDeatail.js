import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewService from '../components/ViewService'

import {
    fetchVideo
  } from '../redux/actions/CurrentService.actions'

 class ServiceDeatail extends Component {

  componentDidMount(){
    this.props.fetchVideo(this.props.match.params.serviceId)

  }
    render() {
        return (
          <div style={{width:"100%",minHeight:"120vh"}} >
           
              { this.props.currentService?(
                <div style={{ width:"100%", height:"80vh", display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}} >
                <ViewService service={this.props.currentService} />
                </div>
              ):
              (<h1>Loading...</h1>)
             

              }
               </div>
                
          
        )
    }
}

const mapStateToProps = storeState => {
    return {
      currentService: storeState.currentServiceState.service

    };
  };
  


export default connect(mapStateToProps,{ fetchVideo})(ServiceDeatail)