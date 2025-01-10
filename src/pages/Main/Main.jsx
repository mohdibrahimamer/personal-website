import React from "react";
import "./main.css";
import MyPhoto from "../../assets/profile-photo.png";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="bio">
          <img src={MyPhoto} alt="my-photo" className="photo" />
          <button type="button" className="download">
            download cv
          </button>
        </div>

        <div className="details">
          <p className="name">mohammed ibrahim amer</p>
          <p className="title">FULL STACK WEB AND APPLICATION DEVELOPER</p>

          <p className="summary">
            My role is a fullstack web and application developer and i am
            responsible for building the layout and functionality of FRONTEND
            and BACKEND of a website and application by using various
            technologies like
            HTML,CSS,JAVASCRIPT,REACT.JS,REACT-NATIVE,NODE.JS,MONGODB in
            collaboration with DESIGNERS and MANAGERS of various departments.
          </p>
        </div>

        <div className="personal">
          <p>personal-info</p>
        </div>

        <table className="info" cellSpacing={17}>
          <tbody>
            <tr>
              <td className="row-title">name</td>
              <td>:mohammed ibrahim amer</td>
            </tr>

            <tr>
              <td className="row-title">date of birth</td>
              <td>:21-06-1998</td>
            </tr>

            <tr>
              <td className="row-title">address</td>
              <td>:charminar hyderabad</td>
            </tr>

            <tr>
              <td className="row-title">phone number</td>
              <td>:7386756518</td>
            </tr>

            <tr>
              <td className="row-title">email</td>
              <td>:mohdibrahimamer9@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
