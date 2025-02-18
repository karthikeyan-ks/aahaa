const Modal = () => {
    return (
        <div
            className="modal fade col-11"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered w-100 col-11"> {/* Added w-75 class */}
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Digital Marketing Advertising
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <section className="d-flex flex-column gap-3 w-100">
                            <div className="col-12 ">
                                <h3
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        margin: '10px',
                                    }}
                                >
                                    Digital Marketing Advertising
                                </h3>
                                <p
                                    style={{
                                        padding: '5px',
                                        margin: '5px',
                                        color: 'black',
                                    }}
                                >
                                    Stories have always been at the heart of human connection. In today’s
                                    fast-paced digital world, this timeless tradition evolves through
                                    engaging, content-driven storytelling. At
                                    <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend
                                    emotional narratives with modern media to create captivating content.
                                    <br />
                                    From social media to video production and influencer marketing, we
                                    craft stories that resonate deeply, bridging the gap between brands and
                                    their audiences. No matter how media changes, the human desire for
                                    meaningful stories remains, and we are here to tell them in the most
                                    engaging ways.
                                </p>
                            </div>
                            <div
                                className="col-11 ratio-1x1"
                                style={{
                                    backgroundColor: 'gray',
                                    margin: '10px',
                                    aspectRatio: '1/1',
                                }}
                            ></div>
                            <div
                                className="col-11  ratio-1x1"
                                style={{
                                    backgroundColor: 'gray',
                                    margin: '10px',
                                    aspectRatio: '1/1',
                                }}
                            ></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal