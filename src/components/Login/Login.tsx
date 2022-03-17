import React, { useState, useRef, useEffect, useContext } from "react";
import { BsWhatsapp, BsTwitter, BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { BsCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import styles from "./Login.module.scss";
import { UserData, LoginProps } from "./Login.interface";
import { Link, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalState";

const url: string = "http://localhost:3050/api/v1/user/login";

const Login: React.FC<LoginProps> = ({ spinner }) => {
  const [isLight, setIsLight] = useState(true);
  const [form, setForm] = useState<UserData>({ email: "", password: "" });
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { getUser } = useContext(GlobalStateContext);
  // const [rememberMe, setRememberMe] = useState(true);
  let navigate = useNavigate();

  const focusPoint = useRef<HTMLInputElement>(null);
  const focusPoint2 = useRef<HTMLInputElement>(null);
  const setLightMode = () => {
    setIsLight(!isLight);
    // return document.body.classList.toggle(styles.darkMode);
    return document.body.classList.toggle(`${styles.darkMode}`);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.email) {
      focusPoint.current!.style.border = "1.5px solid red";
      setTimeout(
        () => (focusPoint.current!.style.border = "1px solid #bdbdbd"),
        3000
      );
    }
    if (!form.password) {
      focusPoint2.current!.style.border = "1.5px solid red";
      setTimeout(
        () => (focusPoint2.current!.style.border = "1px solid #bdbdbd"),
        3000
      );
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.status === 201) {
        const data = await response.json();

        spinner(true);

        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("user", JSON.stringify(data.user));
        getUser!({ user: data.user, accessToken: data.accessToken });

        setTimeout(() => {
          spinner(false);
          navigate("/chat");
        }, 3000);
      }
      if (response.status === 400) {
        const data = await response.text();
        setErrorMsg(data);
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
      if (response.status === 403) {
        const data = await response.json();
        setErrorMsg(data.message);
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name: string = e.currentTarget.name;
    let value: string = e.currentTarget.value;
    const newData = { ...form, [name]: value };
    setForm(newData);
  };

  useEffect(() => {
    if (focusPoint.current) {
      focusPoint.current.focus();
      return;
    }
  }, [focusPoint]);

  return (
    <div className={styles["box-container"]}>
      {!isLight && (
        <BsCloudSunFill
          className={`${styles.sun} ${styles.fillsun}`}
          onClick={setLightMode}
        />
      )}
      {isLight && (
        <BsFillCloudMoonFill
          className={`${styles.sun} ${styles.fillmoon}`}
          onClick={setLightMode}
        />
      )}
      <div className={styles["logo-head"]}>
        <BsWhatsapp />
        <h4>Whatsapp</h4>
      </div>
      <h2>Login</h2>
      {showError && <p className={styles["error-class"]}>{errorMsg}</p>}
      <div className={styles.form}>

          <div className={styles["format-box"]}>
            <MdEmail className={styles["email-icon"]} />
            <input
              type="email"
              value={form.email}
              ref={focusPoint}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className={styles["format-box"]}>
            <IoIosLock className={styles["lock-pass"]} />
            <input
              type="password"
              value={form.password}
              ref={focusPoint2}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" onClick={handleSubmit}> Login </button>
      </div>

      <p>or continue with these social profile</p>
      <div className={styles["social-logins"]}>
        <div className={styles["social-circle"]}>
          <i className={styles.google}>
            <a href="http://localhost:3050/auth/google">
              <FaGoogle />
            </a>
          </i>
        </div>

        <div className={`${styles["social-circle"]} ${styles.b}`}>
          <i className={styles.fb}>
            <a href="http://localhost:3050/api/v1/users/profile">
              <CgFacebook />
            </a>
          </i>
        </div>

        <div className={styles["social-circle"]}>
          <i className={styles.twitter}>
            <BsTwitter />
          </i>
        </div>

        <div className={styles["social-circle"]}>
          <i className={styles.git}>
            <BsGithub />
          </i>
        </div>
      </div>
      <p>
        Dont't have an account yet? <Link to="/signup">Register </Link>
      </p>
      <p className={styles["forgot-password"]}>
        <a href="/forgotPassword">Forgot Password ?</a>
      </p>
    </div>
  );
};

export default Login;
