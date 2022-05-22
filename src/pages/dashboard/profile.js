import React from 'react'
import {auth} from '../../fiebase-config'
import ProfileContainer from './profile.styles';

const profile = () => {
  return (
    <ProfileContainer>
      <h2>Profile Setting</h2>
      <div className="imageDiv">
        <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
      </div>
      <div className="profile__content">
        <div className="profile__content__detailLeft">
          <h3>Name: {auth.currentUser.displayName}</h3>
          <p>Email:  {auth.currentUser.email}</p>
          

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