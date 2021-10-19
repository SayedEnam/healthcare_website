import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactIteam = data.filter(hospital => hospital._id === id);


    return (
        <>
        <div className="">
            <h1>This is service Detail Page </h1>
            <img className="" src={ExactIteam[0]?.imageURL} alt="" />
            <h3 className="card-title">Name : {ExactIteam[0]?.name}</h3>

            <h3>description : {ExactIteam[0]?.description}</h3>
        </div>
        
        </>
    );
};

export default ServiceDetail;
