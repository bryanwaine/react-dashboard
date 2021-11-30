import './newUser.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function NewUser() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='newUserName'>
            <img src={params.row.avatar} alt='' className='newUserImage' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'userName', headerName: 'Username', width: 160 },
    { field: 'country', headerName: 'Country', width: 160 },
    { field: 'email', headerName: 'Email', type: 'number', width: 180 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className='newUserView'>View</button>
            </Link>
            <DeleteOutline
              className='newUserDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <h3 className='userListTitle'>New Users</h3>
      <div style={{ height: 500, width: '100%' }} className='userList'>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
