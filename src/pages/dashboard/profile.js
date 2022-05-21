import React from 'react'
import ProfileContainer from './profile.styles';

const profile = () => {
  return (
    <ProfileContainer>
      <h2>Profile Setting</h2>
      <div className="imageDiv">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile" />
      </div>
      <div className="profile__content">
        <div className="profile__content__detailLeft">
          <h3>Name: John Doe</h3>
          <p>Email: john@gmail.com</p>
          

          </div>
          <div className="profile__content__detailRight">
          <h3>Class: SS 2</h3>
          <h4>Subjects offered:</h4>
          <ol>
            <li>Mathematics</li>
            <li>Chemistry</li>
          </ol>

          </div>
      </div>
     

    </ProfileContainer>
  )
}

export default profile