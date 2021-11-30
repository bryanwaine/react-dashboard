import './user.css'
import { AlternateEmail, LocationOn, CalendarToday, Wc, MailOutline, People } from '@material-ui/icons'

export default function User() {
    return (
      <div className='user'>
        <section className='userTitleContainer'>
          <h1 className='userTitle'>User Profile</h1>
        </section>
        <section className='userContainer'>
          <div className='userShow'>
            <div className='userShowTop'>
              <img
                src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80'
                alt=''
                className='userShowImage'
              />
              <div className='userShowTopTitle'>
                <span className='userShowName'>Jon Snow</span>
                <div className="userShowUserNameParent">
                    <AlternateEmail className='userShowInfoIcon'/>
                    <span className='userShowUserName'>jonsnow</span>                                
                </div>
              </div>
            </div>
            <div className='userShowBottom'>
              <div className='userShowInfo'>
                <span className='userShowInfoTitle'>User Information</span>
              </div>
              <div className='userShowInfo'>
                <LocationOn className='userShowInfoIcon' />
                <span className='userShowInfoLocation'>New York, United States</span>
              </div>
              <div className='userShowInfo'>
                <CalendarToday className='userShowInfoIcon' />
                <span className='userShowInfoAddress'>November 8, 1992</span>
              </div>
              <div className='userShowInfo'>
                <Wc className='userShowInfoIcon' />
                <span className='userShowInfoGender'>Male</span>
              </div>
              <div className='userShowInfo'>
                <MailOutline className='userShowInfoIcon' />
                <span className='userShowInfoEmail'>jonsnow@example.com</span>
              </div>
              <div className='userShowInfo'>
                <People className='userShowInfoIcon' />
                <span className='userShowInfoFriends'>200 Friends</span>
              </div>
            </div>
          </div>
          <div className='userUpdate'></div>
        </section>
      </div>
    );
}