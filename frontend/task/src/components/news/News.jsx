import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./news.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export const News = () => {
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
                    <h6>NEWS</h6>
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
                    <Button className='buton' variant="danger">Delete</Button>{' '}

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
