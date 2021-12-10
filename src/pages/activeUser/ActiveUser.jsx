import './activeUser.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { activeUserRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BarChart, XAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import UserEngagement from '../../components/userEngagement/UserEngagement';

export default function ActiveUser() {
    const [data, setData] = useState(activeUserRows);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
      { field: 'id', headerName: 'ID', type: 'number', width: 90 },
      { field: 'country', headerName: 'Country', width: 160 },
      {
        field: 'activeUsers',
        headerName: 'Active Users',
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
                <button className='activeUserView'>View</button>
              </Link>
              <DeleteOutline
                className='activeUserDelete'
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
    return (
      <div className='activeUser'>
        <main className='activeUserWrapper'>
          <h3 className='activeUserTitle'>User Engagement</h3>
          <section className='activeUserBar'>
            <h3 className='activeUserBarTitle'>
              Total active users by country
            </h3>
            <BarChart width={900} height={250} data={activeUserRows}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='country' />
              <Tooltip />
              <Bar dataKey='activeUsers' fill='#8884d8' />
            </BarChart>
          </section>
          <section className='activeUserTable'>
            <h3 className='activeUserTableTitle'>
              Total active users by country
            </h3>
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
            <UserEngagement/>
        </main>
      </div>
    );
}
