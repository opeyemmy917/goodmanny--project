import React from 'react'
import './Home.css'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className='background'>
        <h3>Unleash your <br /> brand's potential</h3>
        <p>Let us help you make a lasting impact and take your business<br /> to the next level.</p>
        <button>Get started</button>
        <div className='amazon'>
          <img src='./amazon.png'></img>
          <img src='./gpay.png'></img>
          <img src='./microsoft.png'></img>
          <img src='./youtube.png'></img>
          <img src='./spotify.png'></img>
        </div>
      </div>
      <div style={{ height: "630px", }} className='btn bg-dark w-100 d-flex justify-content-between align-items-center '>
        <div style={{ height: "400px", width: "30%" }}>
          <div style={{ width: "300px", height: "3px", margin: "0px 90px 0px" }} className='line'></div>
          <p style={{ marginRight: "40px" }} className='btn text-light fs-5 mb-5   '>Why Goodmanny</p>
          <img src='./pix.png' style={{ height: "300px", margin: "0px 0px 0px 20px" }}></img>
        </div >
        <div style={{ width: "70%", margin: "35px 70px 0px " }} >
          <div style={{ color: "rgb(203,203,203)", textAlign: "start", margin: "0px 10px" }}>
            <h3>Welcome to goodmanny, a creative agency<br /> that specializes in bringing your<br /> ideas to life!</h3>
          </div>
          <div style={{ color: "rgb(110,110,110)", gap: "28px", lineHeight: "30px", }} className='btn d-flex justify-content-between align-items-center text-start fs-6' >
            <p style={{ width: "50%" }}>Our team of talented designers, developers, and marketers are passionate about creating visually stunning and effective solutions for your business. From branding and website design to social media marketing and content creation, we have the skills and expertise to help you stand out in a crowded market.<br />
              We believe that every project is unique and deserves a personalized approach, which is why we work closely with our clients to </p>
            <p style={{ width: "50%" }}>understand their goals and vision. Our collaborative process ensures that every detail is taken care of, resulting in a final product that exceeds expectations.<br /><br />
              At Goodmanny, we are committed to providing exceptional service and delivering results that make a real impact on your business. Let us help you elevate your brand and achieve your goals. Contact us today to get started!</p>

          </div>
        </div>

      </div>
      <div style={{ width: "100%", height: "1000px", backgroundColor: "rgb(19,19,19)" }} className='  text-light'>
        <div>
          <div style={{ width: "300px", height: "3px", margin: "0px 50px 0px" }} className='line'></div>
          <h5 className='fs-2 ms-5 me-5'>Our Services</h5>
          <p style={{ color: "#626262", fontSize: "16px", fontWeight: "100", margin: "0px 50px 0px" }}>offers a wide range of services to help businesses grow and succeed.</p>
        </div>
        <div >
          <div style={{width:"100%" ,display:"flex",justifyContent:"space-around",alignItems:"center",margin:"30px 0px" }} >
            <div style={{ height: "330px", width: "351px", borderRadius: "10px", backgroundColor: "rgb(33,33,33)" }}>
              <div >
                <img src='./brand.png' className='mx-5 mt-5 mb-4'>
                </img>
                <div style={{ margin: "3px 45px" }}>
                  <h5>Branding</h5>
                  <span style={{ fontSize: "12px" }}>Transform your brand with Goodmanny's expert<br /> branding service. Stand out from the competition<br /> and make a lasting impression.</span>

                </div>

                <h5>Explore <FaArrowRight /></h5>

              </div>


            </div>
            <div style={{ height: "330px", width: "351px", borderRadius: "10px", backgroundColor: "rgb(33,33,33)" }}>
              <div >
                <img src='./brand.png' className='mx-5 mt-5 mb-4'>
                </img>
                <div style={{ margin: "3px 45px" }}>
                  <h5>Branding</h5>
                  <span style={{ fontSize: "12px" }}>Transform your brand with Goodmanny's expert<br /> branding service. Stand out from the competition<br /> and make a lasting impression.</span>

                </div>

                <h5>Explore</h5>

              </div>


            </div>
            <div style={{ height: "330px", width: "351px", borderRadius: "10px", backgroundColor: "rgb(33,33,33)" }}>
              <div >
                <img src='./brand.png' className='mx-5 mt-5 mb-4'>
                </img>
                <div style={{ margin: "3px 45px" }}>
                  <h5>Branding</h5>
                  <span style={{ fontSize: "12px" }}>Transform your brand with Goodmanny's expert<br /> branding service. Stand out from the competition<br /> and make a lasting impression.</span>

                </div>

                <h5>Explore</h5>

              </div>


            </div>
          </div>

        
        </div>

      </div>


    </>


  )
}

export default Home