import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="/assets/h3.jpg" class="card-img" alt="Background"
                    height="550px" />

                <div class="card-img-overlay d-flex flex-column 
                                justify-content-center ">
                    <div className='container'>
                        <h5 class="card-tittle display-3 fw-bolder mb-0"> NEW SEASON ARRIVALS</h5>
                        <p class="card-text">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Product/>
        </div>
    )
}
export default Home
