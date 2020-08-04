import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import moons from '../../media/bluemoons.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'



export default class OfferingsModal extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            showModal: this.props.showModal,
            chosenOffering: this.props.chosenOffering,
            offeringsObject: this.props.offeringsObject
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log("in modal", this.props.chosenOffering)
    }

    render() {

        const { offeringsObject, chosenOffering } = this.props;
        const prevModal = offeringsObject[chosenOffering - 1]
        const thisModal = offeringsObject[chosenOffering];
        const nextModal = offeringsObject[chosenOffering + 1]
        console.log(prevModal)
        console.log(nextModal)

        console.log(offeringsObject.length)


        return (

            <div className="offerings-modal">
                {prevModal ? (
                    <div className="prev-modal">
                        <div className="prev-modal-box">
                            <Image className="off-image" src={prevModal.image} />
                            <h1 className="primaryTextColor rob">{prevModal.title}</h1>
                            <hr style={{ width: `50%` }}></hr>
                            <p className="modal-description">{prevModal.description}
                            </p>
                            <Button className="offerings-btn" style={{ margin: `15px` }} variant="basic">Book for ${prevModal.price}</Button>
                            <a><p className="primaryTextColor">Learn More</p></a>
                        </div>
                    </div>
                ): (<div></div>)}

                <FontAwesomeIcon className="exit-btn" icon={faTimes} onClick={this.props.closeModal}></FontAwesomeIcon>
                {/* CURRENT MODAL */}
                <div className="modal-box">
                    <Image className="off-image" src={thisModal.image} />
                    <h1 className="primaryTextColor rob">{thisModal.title}</h1>
                    <hr style={{ width: `50%` }}></hr>
                    <p className="modal-description">{thisModal.description}
                    </p>
                    <Button className="offerings-btn" style={{ margin: `15px` }} variant="basic">Book for ${thisModal.price}</Button>
                    <a><p className="primaryTextColor">Learn More</p></a>
                </div>
                {nextModal ? (
                    <div className="next-modal">
                        <div className="next-modal-box">
                            <Image className="off-image" src={nextModal.image} />
                            <h1 className="primaryTextColor rob">{nextModal.title}</h1>
                            <hr style={{ width: `50%` }}></hr>
                            <p className="modal-description">{nextModal.description}
                            </p>
                            <Button className="offerings-btn" style={{ margin: `15px` }} variant="basic">Book for ${nextModal.price}</Button>
                            <a><p className="primaryTextColor">Learn More</p></a>
                        </div>
                    </div>
                ): (<div></div>)}
                {chosenOffering > 0 ? (
                    <FontAwesomeIcon onClick={() => this.props.decOffering(chosenOffering)} className="arrow-left" icon={faArrowLeft}></FontAwesomeIcon>
                ) : (<div></div>)}
                {chosenOffering == offeringsObject.length - 1 ? (
                    <div></div>
                ) : (
                        <FontAwesomeIcon onClick={() => this.props.incOffering(chosenOffering)} className="arrow-right" icon={faArrowRight}></FontAwesomeIcon>
                    )}

            </div>


            // <div className="off-page">
            //     <div className="off-boxparent">
            //         <div className="off-textbox">
            //             <h1 className="off-page-title primaryTextColor libre"><i>Offerings</i></h1>
            //             <br></br>
            //             <p className="off-page-subtitle">What interests you most?</p>
            //         </div>
            //     </div>

            //     <div className="off-box-parent">
            //         <div className="off-box-container">
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>

            //             </div>
            //             <div className="off">
            //                 <a onClick={this.openModal}>
            //                     <Image className="off-image" src={moons} />
            //                     <div className="off-description">
            //                         <p className="off-title primaryTextColor">Shadow Work</p>
            //                         <p className="off-price primaryTextColor"><b>$400</b></p>
            //                     </div>

            //                 </a>
            //             </div>
            //         </div>
            //     </div>


            // </div>

        )

    }
}