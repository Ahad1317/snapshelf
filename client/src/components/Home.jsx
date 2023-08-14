import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../public/animation.json';
import '../App.css'

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
  return (
    <div>
        <section id="home">
            <div className="comtainer">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <h1 className="display-4  custom-margin-top fw-bolder mb-4 text-center text-white custom-margin-left">Welcome to the SNAP SHELF</h1>
                        <p className="lead fs-3 mb-5 text-white custom-margin-left">Introducing SnapShelf: Your all-in-one solution for:
                        <ul><li>Image management.</li>
                        <li>Upload to AWS S3.</li>
                        <li>APIs integrate with leading clouds for secure storage</li>
                        <li>Secured with Auth.</li>
                            </ul></p>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Post your snap</button>
                            </div>
                    </div>
                    <div className="col-md-4 mt-5">
            <Lottie options={defaultOptions} />
          </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home