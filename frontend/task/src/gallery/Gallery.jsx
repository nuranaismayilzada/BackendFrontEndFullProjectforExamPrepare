import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./gallery.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export const Gallery = () => {
    const [data, setData] = useState([])
    const getAllData = async () => {
        const res = await axios("http://localhost:3000/gallery");
        setData(res?.data);
    };

    useEffect(() => {
        getAllData();
    }, []);
    return (
        <section className='food'>
            <div className="container">
                <div className="foodSection">
    
                    <div className="foods">
                        {
                            data.map((elem) => {
                                return <div className='card'>
                                    <img src={elem.imgSrc} alt="" />
                                    <Button className='buton' variant="danger">Delete</Button>{' '}
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
