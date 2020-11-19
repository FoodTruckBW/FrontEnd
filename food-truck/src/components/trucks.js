import React, { useEffect , useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


function FoodTruck () {
    const [trucks, setTrucks] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get("/trucks")
        .then((res) => {
            console.log(res)
            setTrucks(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    },[]);

    return (
        <div>
            {trucks.map((e) => {
                return (
                    <div key={e.id}>
                    <h2>{e.Name}</h2>
                    <img alt="truck" src ={e.imageURL}/>
                    <h2>{e.cuisineType}</h2>
                  </div>
                )
            })}
        </div>
    )
};

export default FoodTruck;