import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import './Header.styles.scss';

import {auth} from '../firebase/firebase_utils';
import {selectCurrentUser} from '../../redux/user/user.selector'

const Header = ({currentUser}) => (
  <div className='header'>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
