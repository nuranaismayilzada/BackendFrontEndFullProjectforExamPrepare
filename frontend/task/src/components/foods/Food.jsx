import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./food.css"

export const Food = () => {
  const [data, setData] = useState([])
  const getAllData = async () => {
      const res = await axios("http://localhost:3000/products");
      setData(res?.data);
    };
  
    useEffect(() => {
      getAllData();
    }, []);
  return (
    <>
    <section className='food'>
        <div className="container">
            <div className="foodSection">
                <div className="foodText">
                    <h6>OUR OFFERS</h6>
                    <h1>Our Offer This Summer</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="foods">
                  {
                    data.map((elem)=>{
                      return <div className='card'>
                        <img src={elem.imgSrc} alt="" />
                        <p>{elem.price}</p>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>

                      </div>
                    })
                  }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
