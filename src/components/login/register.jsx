import React from "react";
import loginImg from "../../login.svg";
import { register } from "../../serviceWorker";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

//Stores all passwords & username info
//const [usernameReg, setUsernameReg] = useState('')
//const [passwordReg, setPasswordReg] = useState('')

//const register = () => {
  //Axios.post ('https://localhost3000/register', { 
    //username: usernameReg, 
    //password: passwordReg,
//}).then((response)=> {
  //console.log(response);
//});
//}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
              //onChange={(e) => {setUsernameReg(e.target.value);}}//  
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" 
              //onChange={(e) => {setEmailReg(e.target.value);}}//  
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" 
              //onChange={(e) => {setPasswordReg(e.target.value);}}//  
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={register}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
