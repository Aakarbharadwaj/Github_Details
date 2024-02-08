import React, { useEffect, useState } from 'react'
import './Card.css'
// import User from '../User/User';
const Card = () => {
    const [data, setdata] = useState([]);
    let user = "aakarbharadwaj";
    useEffect(() => {
        const fetchdata = async () => {
            let res = await fetch(`https://api.github.com/users/${user}`);
            let info = await res.json();
            console.log(info)
            setdata(info);
        }
        fetchdata();
    }, [])

    const [username, setusername] = useState("");
    let updateuser = (e) => {
        console.log(e.target.value);
    }


    return (
        <div className='box'>
            <div classname="container">
                <input
                    onChange={updateuser}
                    classname="srch"
                    placeholder="User id eg.: Aakarbharadwaj" />
                <button>search</button>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={data.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text bg-primary text-light rounded Follower">Follower's {data.followers}</p>
                    <a href={data.html_url} className="btn btn-primary">Go to Git Profile</a>
                    <a href={data.html_url} className="btn border text-primary">Go to linkedIn Profile</a>
                </div>
            </div>

        </div>
    )
}

export default Card