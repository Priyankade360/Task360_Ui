import { useState } from "react";
import "./styles/LoginForm.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({ uname: "", psw: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          name="uname" 
          value={formData.uname} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="psw" 
          value={formData.psw} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Login</button>
        <label>
          <input 
            type="checkbox" 
            name="remember" 
            checked={formData.remember} 
            onChange={handleChange} 
          /> Remember me
        </label>
      </div>
      
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  );
}
