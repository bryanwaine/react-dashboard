import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'
import { Link } from 'react-router-dom';

export default function FeaturedInfo() {

    return (
      <div className='featured'>
        <Link to={`/newUsers`} className='Link featuredItem'>
          <main className=''>
            <span className='featuredTitle'>New Users</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>50,415</span>
              <span className='featuredMoneyRate'>
                11.4%
                <ArrowUpward className='featuredIcon positive' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
        </Link>
        <Link to={`/activeUsers`} className='Link featuredItem'>
          <main className=''>
            <span className='featuredTitle'>Active Users</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>30,153</span>
              <span className='featuredMoneyRate'>
                -1.4%
                <ArrowDownward className='featuredIcon negative' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
        </Link>
        <Link to={`/referrals`} className='Link featuredItem'>
          <main className=''>
            <span className='featuredTitle'>Referrals</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>40,415</span>
              <span className='featuredMoneyRate'>
                2.4%
                <ArrowUpward className='featuredIcon positive' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
        </Link>
      </div>
    );
}
