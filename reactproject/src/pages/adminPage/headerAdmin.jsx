import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class headerAdmin extends Component {
    render() {
        return (
            <div>
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <img src="../../img/logo2.png" alt="Logo" img-fluid="true" />
                        <Link to="/admin/admindashboard" className="nav-link">
                            <strong>myEDU</strong>ADMIN
                        </Link>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="nav nav-pills list-unstyled navbar__list d-block">
                                <li className="nav-item has-sub">
                                    <Link to="/admin/admindashboard">Trang chủ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/amdincourse"  >Quản lí khóa học</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/adminuser" >Quản lí người dùng</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
    }
}

export default headerAdmin;