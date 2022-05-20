import styled from "styled-components";

const ProfileContainer = styled.div`
    max-width: 100%;
    height: 100vh;

    & img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    & .profile__content{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }


`;

export default ProfileContainer;