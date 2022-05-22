import React from 'react'
import ProfileContainer from './profile.styles';

const profile = () => {
  return (
    <ProfileContainer>
      <h2>Profile Setting</h2>
      <div className="imageDiv">
        <img src={localStorage.getItem("photoURL")} alt={localStorage.getItem("displayName")} />
      </div>
      <div className="profile__content">
        <div className="profile__content__detailLeft">
          <h3>Name: {localStorage.getItem("displayName")}</h3>
          <p>Email:  {localStorage.getItem("displayEmail")}</p>
          

          </div>
          <div className="profile__content__detailRight">
          <h3>Class: SS 2</h3>
          <h4>Subjects offered:</h4>
          <ol>
            <li>Mathematics</li>
            <li>Chemistry</li>
            <li>English Language</li>
            <li>Biology</li>
            <li>Physics</li>
          </ol>

          </div>
      </div>
     

    </ProfileContainer>
  )
}

export default profile