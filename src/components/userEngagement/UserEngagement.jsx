import './userEngagement.css';
import { DataGrid } from '@material-ui/data-grid';
import { Visibility } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';


export default function UserEngagement() {  

  const columns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
      field: 'user',
      headerName: 'User',
      width: 180,
      renderCell: (params) => {
        return (
          <div className='userEngagementUser'>
            <img src={params.row.avatar} alt='' className='userListImage' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'userName', headerName: 'Username', width: 150 },
    { field: 'date', headerName: 'Date', width: 130 },
    {
      field: 'time_spent',
      headerName: 'Time Spent',
      type: 'number',
      width: 150,
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`} className='Link'>
              <button className={`userEngagementButton`}>
                <Visibility className='userEngagementIcon' />
                Display
              </button>
            </Link>
          </>
        );
      },
    },
  ];

    return (
      <div className='userEngagementWrapper'>
        <h3 className='userEngagementTitle'>Daily app usage time per user</h3>
        <div style={{ height: 400, width: '100%' }} className='userEngagement'>
          <DataGrid
            rows={userRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
}
