import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData';
import UserEngagement from '../../components/userEngagement/UserEngagement';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Link to={`/referrals`} className='Link'>
                <Chart data={userData} title='Total referrals per month (2021)' dataKey='Referrals' grid />
            </Link>
            <UserEngagement/>
        </div>
    )
}