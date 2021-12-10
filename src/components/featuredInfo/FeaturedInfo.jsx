import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'
import { Link } from 'react-router-dom';

export default function FeaturedInfo() {

    return (
      <div className='featuredWrapper'>
        <div className='featured'>
          <Link to={`/Users`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>Total Users</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>50,415</span>
                <span className='featuredDataRate'>
                  11.4%
                  <ArrowUpward className='featuredIcon positive' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
          <Link to={`/newUsers`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>New Users</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>30,153</span>
                <span className='featuredDataRate'>
                  -1.4%
                  <ArrowDownward className='featuredIcon negative' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
          <Link to={`/activeUsers`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>Active Users</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>40,123</span>
                <span className='featuredDataRate'>
                  -0.9%
                  <ArrowDownward className='featuredIcon negative' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
        </div>
        <div className='featured'>
          <Link to={`/referrals`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>Referrals</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>40,415</span>
                <span className='featuredDataRate'>
                  2.4%
                  <ArrowUpward className='featuredIcon positive' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
          <Link to={`/activeUsers`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>Avg. Daily App Usage Time</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>50m 10s</span>
                <span className='featuredDataRate'>
                  4.4%
                  <ArrowUpward className='featuredIcon positive' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
          <Link to={`/ads`} className='Link featuredItem'>
            <main className=''>
              <span className='featuredTitle'>Ads Revenue</span>
              <section className='featuredDataContainer'>
                <span className='featuredData'>$510,530</span>
                <span className='featuredDataRate'>
                  20.5%
                  <ArrowUpward className='featuredIcon positive' />
                </span>
              </section>
              <span className='featuredSub'>Compared to last month</span>
            </main>
          </Link>
        </div>
      </div>
    );
}
