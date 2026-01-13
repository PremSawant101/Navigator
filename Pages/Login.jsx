import React from "react";

const Login = () => {
    return (
        <div className="login-page">

            {/* LEFT IMAGE */}
            <div className="login-image"></div>

            {/* RIGHT FORM */}
            <div className="login-form-wrapper">
                <div className="login-form">

                    <h1>WELCOME BACK</h1>
                    <p>Sign in to continue your RUNWAY experience</p>

                    <form>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className="login-btn">
                            SIGN IN
                        </button>
                    </form>

                    <div className="login-footer">
                        <span>Don’t have an account?</span>
                        <a href="/Register">Create one</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
