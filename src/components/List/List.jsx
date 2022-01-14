import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const List = (props) => {
    const { setStartRoute } = props;


    return (
            <section className="main-section">
            <main className="app-main">
                <section className="summary-content m-scroll">
                    <div className="container-fluid">
                        <div className="summary-line">
                            <div className="detail-list">
                                <div className="row detail-line">
                                    <label className="col-4 col-sm-3 col-lg-4 col-xl-3 detail-label"> Popeye </label>
                                    <span className="col">Routes</span>
                                </div>
                            </div>
                        </div>
                        <div className="summary-line">
                            <p style={{display: "flex"}}>
                                <span className="order-status">house <span> {" -> "} </span> office </span>
                                <button 
                                  type="button" 
                                  class="btn btn-success btn-sm"
                                  onClick = {() => setStartRoute({route: 'office'})}> START</button>
                            </p>
                            <div className={`status-leveller level-1 mb-3`}>
                                <div className="leveller-circle leveller-1"><i className="fas fa-home"></i></div>
                                <div className="leveller-circle leveller-2"><i className="fas fa-building"></i></div>
                            </div>
                        </div>
                        <div className="summary-line">
                            <p>
                                <span className="order-status">office <span> {"->"} </span> lunch </span>
                                <button 
                                  type="button" 
                                  class="btn btn-success btn-sm"
                                  onClick = {() => setStartRoute({route: 'lunch'})}> START </button>
                            </p>
                            <div className={`status-leveller level-1 mb-3`}>
                                <div className="leveller-circle leveller-1"><i className="fas fa-building"></i></div>
                                <div className="leveller-circle leveller-2"><i className="fas fa-utensils"></i></div>
                            </div>
                        </div>
                        <div className="summary-line">
                            <p>
                                <span className="order-status">office <span> {"->"} </span> house</span>
                                <button 
                                  type="button" 
                                  class="btn btn-success btn-sm"
                                  onClick = {() => setStartRoute({route: 'home'})}> START </button>
                            </p>
                            <div className={`status-leveller level-1 mb-3`}>
                                <div className="leveller-circle leveller-1"><i className="fas fa-building"></i></div>
                                <div className="leveller-circle leveller-4"><i className="fas fa-home"></i></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
};

export default List;
