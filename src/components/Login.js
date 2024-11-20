import React from "react";
import './Login.css';

const Login = () => {
    return(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <form>
                                    <div className="form mb-3">
                                        <input type="email" id="email"></input>
                                        <label for="email">Email address</label>
                                    </div>
                                    <div className="form mb-3">
                                        <input type="password" id="password"></input>
                                        <label for="password">Password</label>
                                    </div>
                                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                    <button data-button-init data-ripple-init class="btn btn-outline-light btn-lg px-5 mx-4" type="submit">Login</button>
                                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" class="text-white"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" class="text-white"><i class="fa-brands fa-twitter mx-4 px-2"></i></a>
                                        <a href="#!" class="text-white"><i class="fa-brands fa-google fa-lg"></i></a>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
    )
}

export default Login;