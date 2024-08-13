import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from './EnquiryForm';

class BannerV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, // State to control modal visibility
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        // Inline CSS for modal
        const modalStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        };

        const modalContentStyle = {
            backgroundColor: '#fefefe',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #888',
            width: '80%',
            maxWidth: '500px',
        };

        const closeButtonStyle = {
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer',
        };

        return (
            <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
                <div className="ltn__slider-11-inner">
                    <div className="ltn__slider-11-active">
                        {/* slide-item */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
                                                    <h1 className="slide-title animated ">Search and Find <br /><span>Luxury</span> Commercial & Residential</h1>
                                                    <div className="slide-brief animated">
                                                        <p>Discover a prime real estate opportunity in a sought-after location! This property offers the perfect blend of modern amenities and convenience, making it ideal for both residential and commercial purposes. Whether you're looking to build your dream home or establish a thriving business, this property provides ample space, excellent accessibility, and proximity to key facilities. Don't miss the chance to invest in a property that promises growth and high returns. Secure your future with this valuable asset!</p>
                                                    </div>
                                                    <div className="btn-wrapper animated">
                                                        <button onClick={this.handleOpenModal} className="theme-btn-1 btn btn-effect-1">Make An Enquiry</button>
                                                        <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
                                                            <i className="icon-play ltn__secondary-color" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-item-img">
                                                <img src='https://thumbs.dreamstime.com/z/modern-real-estate-house-building-city-construction-concept-evening-outdoor-urban-view-homes-40083842.jpg' alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Other slides... */}
                    </div>

                    {/* Modal for Enquiry Form */}
                    {this.state.showModal && (
                        <div style={modalStyle}>
                            <div style={modalContentStyle}>
                                <span style={closeButtonStyle} onClick={this.handleCloseModal}>&times;</span>
                                <EnquiryForm onClose={this.handleCloseModal} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BannerV2;
