import React from 'react';
import PropTypes from 'prop-types';
import CollegeDetails from './college-detail'
import CareerOutput from './career-output'

class Modal extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

    const block = {
      display : 'block'
    }

    let modalContent;
    if(this.props.category === "college"){
      modalContent=(
          <CollegeDetails modal={true} query={this.props.query}/>
          )
      } else {
        modalContent = (
            <CareerOutput modal={true} career={this.props.query}/>
            )
      }


    return (
        <div className="modal" style={block}>
          <div className ="modal-content">
              <span className="close" onClick={this.props.onClose}>&times;</span>
                  <div className="row career-column modal-fill">
                  {modalContent}
                  <div className="footer">
                  <button onClick={this.props.onClose}>
                    Close
                  </button>
              </div>
          </div>
          </div>
        </div>

    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  category : PropTypes.string, 
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;