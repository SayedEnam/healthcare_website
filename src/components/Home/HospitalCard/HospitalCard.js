import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './HospitalCard.css'

const HospitalCard = (props) => {
    const { name, imageURL, description, _id } = props.hospital;

    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded hospitalCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                
                    <div className="text-center">

                        <Link to={`/ServiceDetail/${_id}`}>
                            <button type="button" className="btn btn-primary m-2">Services Details</button>
                        </Link>
                    </div>
                
            </div>
        </div>
    );
};

export default HospitalCard;