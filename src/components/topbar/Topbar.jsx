import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
    return (
      <div className='topbar'>
        <main className='topbarWrapper'>
          <section className='topLeft'>
            <span className='logo'>PiChat Admin</span>
          </section>
          <section className='topRight'>
            <div className='topbarIconContainer'>
              <NotificationsNone />
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
              <Language />
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
              <Settings />
            </div>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              alt=''
              className='topAvatar'
            />
          </section>
        </main>
      </div>
    );
}
