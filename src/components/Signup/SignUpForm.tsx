// import axios from "axios";
import React, { useRef, useState, FormEvent } from "react";
import styles from "./styling.module.scss";
import fbImg from "../assets/images/facebook-icon.jpeg";
import ggleImg from "../assets/images/google-icon.png";
import { IformData } from "../../utils/interface";
import useAxios from "axios-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUp: React.FC = (props) => {
  const firstNameTf = useRef<HTMLInputElement>(null);
  const lastNameTf = useRef<HTMLInputElement>(null);
  const emailTf = useRef<HTMLInputElement>(null);
  const passwordTf = useRef<HTMLInputElement>(null);

  const [{ data, loading, error }, executeSignUp] = useAxios(
    {
      url: "http://localhost:3050/api/v1/users/signup",
      method: "POST",
    },
    {
      manual: true,
      useCache: false,
    }
  );

  if (!loading && error) {
    console.log(error.response?.data);
    toast.error("Unable to signup", {
      toastId: "1",
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (!loading && !error && data) {
    toast.success("Signed up successfully", {
      toastId: "2",
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: IformData = {
      firstName: firstNameTf.current!.value,
      lastName: lastNameTf.current!.value,
      email: emailTf.current!.value,
      password: passwordTf.current!.value,
    };

    executeSignUp({
      data: formData,
    });
  };

  const [show, setShow] = useState(false);
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* homePage starts */}
      <div className={styles.bg}>
        <div className={`${styles.container}`}>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSignUp}>
              <div className={`${styles.row}`}>
                <input
                  className="firstname"
                  placeholder="firstname"
                  ref={firstNameTf}
                  required
                ></input>
              </div>

              <div className={`${styles.row}`}>
                <input
                  className="lastname"
                  placeholder="lastname"
                  ref={lastNameTf}
                  required
                ></input>
              </div>

              <div className={`${styles.row}`}>
                <input
                  className="email"
                  type="email"
                  placeholder="email"
                  ref={emailTf}
                  required
                ></input>
              </div>

              <div className={`${styles.row}`}>
                <input
                  className={`${styles.row}`}
                  type={show ? "text" : "password"}
                  placeholder="password"
                  ref={passwordTf}
                  required
                ></input>
              </div>

              {/* <p onClick={() => setShow(!show)}>
                Click me to {show ? 'hide' : 'show'} password
              </p> */}
              <p> or continue with these social profile</p>
              <div className={`${styles.iconWrapper}`}>
                <div className={styles.iconBox}>
                  <div>
                    {/* <Link to="http://localhost:3050/auth/google"><img src={ggleImg} alt="google icon" className={styles.googleIcon}></img>
                    </Link> */}
                    <a href="http://localhost:3050/auth/google">
                      <i>
                        <FcGoogle />
                      </i>
                    </a>
                  </div>
                  <div>
                    {" "}
                    <a href="http://localhost:3050/api/v1/users/profile">
                      <i>
                        <IoLogoFacebook />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <p>
                {" "}
                Already a member?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>{" "}
              </p>

              <button className={`${styles.btn}`}>SignUp</button>
            </form>
          </div>
        </div>
      </div>

      {/* homePage ends */}
    </div>
  );
};

export default SignUp;
