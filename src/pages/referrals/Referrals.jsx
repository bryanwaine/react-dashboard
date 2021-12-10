import './referral.css'
import Chart from '../../components/chart/Chart';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { referralsRows } from '../../dummyData';
import { userData } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    BarChart,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';


export default function Referrals() {
    const [data, setData] = useState(referralsRows);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
      { field: 'id', headerName: 'ID', type: 'number', width: 90 },
      { field: 'country', headerName: 'Country', width: 160 },
      {
        field: 'referrals',
        headerName: 'Total Referrals',
        type: 'number',
        width: 180,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 130,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/countries/${params.row.country}`}>
                <button className='referralsView'>View</button>
              </Link>
              <DeleteOutline
                className='referralsDelete'
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];

    return (
      <div className='referrals'>
        <main className='referralsWrapper'>
          <h3 className='referralsTitle'>Referrals</h3>
            <Chart
              data={userData}
              title='Total referrals per month (2021)'
              dataKey='Referrals'
              grid
            />
          <section className='referralsBar'>
            <h3 className='referralsBarTitle'>Total referrals by country</h3>
            <BarChart width={900} height={250} data={referralsRows}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='country' />
              <Tooltip />
              <Legend />
              <Bar dataKey='referrals' fill='#8884d8' />
            </BarChart>
          </section>
          <section className='referralsTable'>
            <div style={{ height: 400, width: '100%' }} className='referrals'>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </section>
        </main>
      </div>
    );
}
