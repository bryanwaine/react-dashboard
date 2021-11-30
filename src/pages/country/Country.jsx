import React from 'react';
import Chart from '../../components/chart/Chart';
import { countryData, countryData1, countryData2 } from '../../dummyData';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './country.css';

export default function Country() {
    return (
      <div className='country'>
        <div className='countryTitleWrapper'>
          <div className='countryTitle'>Country Data: PAKISTAN</div>
          <div className='countryTotal'>Total Users: 8,100</div>
        </div>
        <div className='featured'>
          <main className='featuredItem'>
            <span className='featuredTitle'>New Users</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>5,100</span>
              <span className='featuredMoneyRate'>
                6.3%
                <ArrowUpward className='featuredIcon positive' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
          <main className='featuredItem'>
            <span className='featuredTitle'>Active Users</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>3,153</span>
              <span className='featuredMoneyRate'>
                -0.7%
                <ArrowDownward className='featuredIcon negative' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
          <main className='featuredItem'>
            <span className='featuredTitle'>Referrals</span>
            <section className='featuredMoneyContainer'>
              <span className='featuredMoney'>4,415</span>
              <span className='featuredMoneyRate'>
                4.4%
                <ArrowUpward className='featuredIcon positive' />
              </span>
            </section>
            <span className='featuredSub'>Compared to last month</span>
          </main>
        </div>        
          <Chart
            data={countryData}
            title='Total new users per month (2021)'
            dataKey='Referrals'
            grid
          />
          <Chart
            data={countryData1}
            title='Total active users per month (2021)'
            dataKey='Referrals'
            grid
          />
          <Chart
            data={countryData2}
            title='Total referrals per month (2021)'
            dataKey='Referrals'
            grid
          />
      </div>
    );
}
