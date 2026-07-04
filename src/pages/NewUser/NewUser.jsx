import "./NewUser.css";
import { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export default function NewUser() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="newUser">
      <div className="newUserHeader">
        <div>
          <h1>Create New User</h1>
          <p>Manage your team and add a new member.</p>
        </div>

        <button type="button">Create User</button>
      </div>

      <div className="uploadCard">
        <div className="avatarSection">
          <div className="newUserAvatar">
            {preview ? <img src={preview} alt="avatar" /> : <span>S</span>}
          </div>

          <div className="uploadContent">
            <h3>Profile Photo</h3>

            <p>Upload a profile picture for this employee.</p>

            <label htmlFor="upload">
              <CloudUploadOutlinedIcon />
              Upload Image
            </label>

            <input
              type="file"
              id="upload"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        </div>
      </div>

      <div className="userForm">
        <div className="formGroup">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="formGroup">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" />
        </div>

        <div className="formGroup">
          <label>Username</label>
          <input type="text" placeholder="john_doe" />
        </div>

        <div className="formGroup">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>

        <div className="formGroup">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="formGroup">
          <label>Phone</label>
          <input type="text" placeholder="+1 234 567 890" />
        </div>

        <div className="formGroup">
          <label>Department</label>

          <select defaultValue="IT">
            <option>IT</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Support</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Role</label>

          <select defaultValue="Admin">
            <option>Admin</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Employee</option>
          </select>
        </div>
      </div>

      <div className="userOptions">
        <div className="optionCard">
          <h3>Gender</h3>

          <div className="radioGroup">
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>

            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>

            <label>
              <input type="radio" name="gender" value="other" />
              Other
            </label>
          </div>
        </div>

        <div className="optionCard">
          <h3>Status</h3>

          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>

          <span className="statusText">Active Account</span>
        </div>

        <div className="optionCard">
          <h3>Date of Birth</h3>
          <input className="dateInput" type="date" />
        </div>
      </div>
    </div>
  );
}
