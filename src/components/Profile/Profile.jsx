import style from './Profile.module.css';

export default function Profile({ userInfo }) {

    return (
        <div className={style.profile_container}>
            <img className={style.user_image} src="https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg?w=996" alt="user image" />
            <p>Welcome!</p>

            <div className={style.user_info}>
                <p><span>Name: </span> {userInfo.name}</p>
                <p><span>Email: </span> {userInfo.email}</p>
                <p><span>Date Of Birth: </span> {userInfo.dob}</p>
            </div>


        </div>
    )
}