import React, { useEffect, useState } from 'react'
import './Card.css'
const Card = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            let res = await fetch("https://api.github.com/users/aakarbharadwaj");
            let info = await res.json();
            console.log(info)
            setdata(info);
        }
        fetchdata();
    }, [])
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={data.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text bg-primary text-light rounded Follower">Follower's {data.followers}</p>
                <a href={data.html_url} className="btn btn-primary">Go to Git Profile</a>
                <a href={data.html_url} className="btn border text-primary">Go to linkedIn Profile</a>
            </div>
        </div>
    )
}

export default Card