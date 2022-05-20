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
          <h3>Name:</h3>
          <p>John Doe</p>
          <h3>Email:</h3>
          

          </div>
          <div className="profile__content__detailRight">
          <h3>Name:</h3>
          <p>John Doe</p>

          </div>
      </div>
     

    </ProfileContainer>
  )
}

export default profile