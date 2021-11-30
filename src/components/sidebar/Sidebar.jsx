import React from 'react'
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { LineStyle, Timeline, PermIdentity, Share, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, Computer } from '@material-ui/icons';

export default function Sidebar() {
    return (
      <div className='sidebar'>
        <main className='sidebarWrapper'>
          <section className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
              <li className=''>
                <NavLink
                  to={`/`}
                  className='Link sidebarListItem'
                  activeClassName='active'
                  exact
                >
                  <LineStyle className='sidebarIcon' />
                  Home
                </NavLink>
              </li>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Analytics
              </li>
            </ul>
          </section>
          <section className='sidebarMenu'>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
              <li className=''>
                <NavLink
                  to={`/users`}
                  className='Link sidebarListItem'
                  activeClassName='active'
                >
                  <PermIdentity className='sidebarIcon' />
                  Users
                </NavLink>
              </li>
              <li className=''>
                <NavLink to={`/activeUsers`} className='Link sidebarListItem'>
                  <Computer className='sidebarIcon' />
                  Engagement
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  to={`/referrals`}
                  className='Link sidebarListItem'
                  activeClassName='active'
                >
                  <Share className='sidebarIcon' />
                  Referrals
                </NavLink>
              </li>
              <li className='sidebarListItem'>
                <BarChart className='sidebarIcon' />
                Reports
              </li>
            </ul>
          </section>
          <section className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MailOutline className='sidebarIcon' />
                Mail
              </li>
              <li className='sidebarListItem'>
                <DynamicFeed className='sidebarIcon' />
                Feedback
              </li>
              <li className='sidebarListItem'>
                <ChatBubbleOutline className='sidebarIcon' />
                Messages
              </li>
            </ul>
          </section>
          <section className='sidebarMenu'>
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <WorkOutline className='sidebarIcon' />
                Manage
              </li>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Analytics
              </li>
              <li className='sidebarListItem'>
                <Report className='sidebarIcon' />
                Reports
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
}
