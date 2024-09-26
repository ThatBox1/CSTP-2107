import React from 'react'
import './Banner.css'

const userImg = "https://plus.unsplash.com/premium_photo-1720970650017-e39447272615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Banner = () => {
  return (
    <section className='banner-container'>
        <img src={userImg} alt="" className='banner-img' />
        <div className='banner-content'>
            <h1 className='banner-title'> Join our team! </h1>
            <p className='banner-subtitle'>Sign up anytime! it's FREE</p>

        </div>

    </section>
  )
}

export default Banner