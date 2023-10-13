import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { logout } from '../../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  // Declare the functions before defining the options array
  function dashboard() {
    navigate('/dashboard');
  }

  function orders() {
    navigate('/orders');
  }

  function account() {
    navigate('/account');
  }

  function logoutUser() {
    dispatch(logout());
    alert.success('Logout Successfully');
  }

  const options = [
    {
      icon: <ListAltIcon />,
      name: 'Orders',
      func: orders,
    },
    {
      icon: <PersonIcon />,
      name: 'Profile',
      func: account,
    },
    {
      icon: <ExitToAppIcon />,
      name: 'Logout',
      func: logoutUser,
    },
  ];



  

  

  if (user?.role==="admin") {
    // Add this log statement
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
    <Fragment>
       <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="Speeddial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open} 
        direction="down"
        className='speedDial'
        icon={<img className='speedDialIcon' src={user?.avatar?.url || '/Profile.png'} alt="Profile" />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
