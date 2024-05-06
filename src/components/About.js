import React from 'react'

const About = () => {
  return (
    <div className='w-[90%] m-auto p-3 shadow-2xl'>
      <>
  {/* ======= About Section ======= */}
  <section id="about" className="about-mf sect-pt4 route">
  <h5 className="title-left text-3xl font-bold p-3 text-center">About me</h5>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="box-shadow-full">
                <div className="row my-auto">
                    <div className="col-sm-6 col-md-5 my-auto">
                        <div className="about-img">
                            <img
                                src={require('../assets/img/kuldeep-misra.jpg')}
                                className="img-fluid rounded b-shadow-a w-full"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7 py-3">
                        <div className="about-info flex flex-col gap-4">
                            <p>
                                <span className="title-s font-bold text-lg">Name: </span>
                                <span>Kuldeep Mishra</span>
                            </p>
                            <p>
                                <span className="title-s font-bold text-lg">Profile: </span>
                                <span>MERN Stack Developer</span>
                            </p>
                            <p>
                                <span className="title-s font-bold text-lg">Email: </span>
                                <span>kmmishra009@gmail.com</span>
                            </p>
                            <p>
                                <span className="title-s font-bold text-lg">Phone: </span>
                                <span>9340428832</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="box-shadow-full">
                <div className="about-me pt-4 pt-md-0">
                <div className="skill-mf my-2">
                  <p className="title-s font-bold text-lg my-2">Skills</p>
                  <span>HTML</span> <span className="pull-right">95%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "95%", backgroundColor:"red" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>CSS3</span> <span className="pull-right">90%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%",backgroundColor:"magenta" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>JAVASCRIPT</span>
                  <span className="pull-right">90%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%",backgroundColor:"lime" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>BOOTSTRAP</span> <span className="pull-right">90%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%",backgroundColor:"orange" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>REACT JS</span> <span className="pull-right">90%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%",backgroundColor:"green" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>NODE JS</span> <span className="pull-right">70%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%",backgroundColor:"cyan" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span>MONGO DB</span> <span className="pull-right">70%</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </section>
</>

    </div>
  )
}

export default About
