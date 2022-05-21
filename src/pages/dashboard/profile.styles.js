import styled from "styled-components";

const ProfileContainer = styled.div`
    max-width: 100%;
    height: 100vh;

    & img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 2rem;
    }
    & .profile__content{
        /* border: 1px solid red; */
        width:700px;
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-top: 2rem;
        padding:1rem;

        & .profile__content__detailLeft{
            margin-top: 0;
        }

    }


`;

export default ProfileContainer;