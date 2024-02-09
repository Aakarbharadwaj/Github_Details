import React, { useEffect, useState } from 'react'
import './Card.css'
// import User from '../User/User';
const Card = () => {
    const [data, setdata] = useState(null);
    const [updatename, setupdatename] = useState("");
    const [username, setusername] = useState("");
    useEffect(() => {

        const fetchdata = async () => {
            try {
                if (username) {
                    let res = await fetch(`https://api.github.com/users/${username}`);
                    let info = await res.json();
                    console.log(info);
                    setdata(info);
                }
            } catch (error) {
                console.log("Can not fetch :", error)
            }
        }

        fetchdata();

    }, [username]);

    let updateuser = (e) => {
        setupdatename(e.target.value);
    }

    let User = () => {
        setusername(updatename);
    }
    return (
        <div className='box'>
            <div className="container">
                <input
                    onChange={updateuser}
                    className="srch"
                    placeholder="User id eg.: Aakarbharadwaj" />
                <button onClick={User}>search</button>
            </div>

            {data &&
                <div className="card" style={{ width: '18rem' }}>
                    <img src={data.avatar_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text bg-primary text-light rounded Follower">Follower's {data.followers}</p>
                        <a href={data.html_url} className="btn btn-primary">Go to Git Profile</a>
                        <a href={data.html_url} className="btn border text-primary">Go to linkedIn Profile</a>
                    </div>
                </div>

            }

        </div>
    )
}

export default Card

// const Card = () => {
//     const [data, setData] = useState(null); // Initialize data as null
//     const [updateName, setUpdateName] = useState(""); // Use camelCase for variable names
//     const [username, setUsername] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 if (username) {
//                     const res = await fetch(`https://api.github.com/users/${username}`);
//                     const info = await res.json();
//                     setData(info);
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData(); // Fetch data on component mount

//     }, [username]); // Fetch data whenever username changes

//     const handleUpdateName = (e) => {
//         setUpdateName(e.target.value);
//     };

//     const handleUserSearch = () => {
//         setUsername(updateName);
//     };

//     return (
//         <div className='box'>
//             <div className="container">
//                 <input
//                     onChange={handleUpdateName}
//                     className="srch"
//                     placeholder="User id e.g.: Aakarbharadwaj" />
//                 <button onClick={handleUserSearch}>Search</button>
//             </div>

//             {data && ( // Render only if data is available
//                 <div className="card" style={{ width: '18rem' }}>
//                     <img src={data.avatar_url} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{data.name}</h5>
//                         <p className="card-text bg-primary text-light rounded Follower">Followers: {data.followers}</p>
//                         <a href={data.html_url} className="btn btn-primary">Go to GitHub Profile</a>
//                         {/* You might want to change the text and URLs for LinkedIn */}
//                         <a href={data.html_url} className="btn border text-primary">Go to LinkedIn Profile</a>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Card;