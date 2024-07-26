import React from 'react'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>

    <div class="sidebar">
        <NavLink to="#" class="logo">
            <i class='bx bx-code-alt'></i>
            <div class="logo-name"><span>Asmr</span>Prog</div>
        </NavLink>
        <ul class="side-menu">
            <li><NavLink to="#"><i class='bx bxs-dashboard'></i>Dashboard</NavLink></li>
            <li><NavLink to="#"><i class='bx bx-store-alt'></i>Shop</NavLink></li>
            <li class="active"><NavLink to="#"><i class='bx bx-analyse'></i>Analytics</NavLink></li>
            <li><NavLink to="#"><i class='bx bx-message-square-dots'></i>Tickets</NavLink></li>
            <li><NavLink to="#"><i class='bx bx-group'></i>Users</NavLink></li>
            <li><NavLink to="#"><i class='bx bx-cog'></i>Settings</NavLink></li>
        </ul>
        <ul class="side-menu">
            <li>
                <NavLink to="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    Logout
                </NavLink>
            </li>
        </ul>
    </div>

    <div class="content">
        <nav>
            <i class='bx bx-menu'></i>
            <form action="#">
                <div class="form-input">
                    <input type="search" placeholder="Search..." />
                    <button class="search-btn" type="submit"><i class='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden />
            <label for="theme-toggle" class="theme-toggle"></label>
            <NavLink to="#" class="notif">
                <i class='bx bx-bell'></i>
                <span class="count">12</span>
            </NavLink>
            <NavLink to="#" class="profile">
                <img src="/assets/img/logo.png" />
            </NavLink>
        </nav>


        <main>
            <div class="header">
                <div class="left">
                    <h1>Dashboard</h1>
                    <ul class="breadcrumb">
                        <li><NavLink to="#">
                                Analytics
                            </NavLink></li>
                        /
                        <li><NavLink to="#" class="active">Shop</NavLink></li>
                    </ul>
                </div>
                <NavLink to="#" class="report">
                    <i class='bx bx-cloud-download'></i>
                    <span>Download CSV</span>
                </NavLink>
            </div>

            <ul class="insights">
                <li>
                    <i class='bx bx-calendar-check'></i>
                    <span class="info">
                        <h3>
                            1,074
                        </h3>
                        <p>Paid Order</p>
                    </span>
                </li>
                <li><i class='bx bx-show-alt'></i>
                    <span class="info">
                        <h3>
                            3,944
                        </h3>
                        <p>Site Visit</p>
                    </span>
                </li>
                <li><i class='bx bx-line-chart'></i>
                    <span class="info">
                        <h3>
                            14,721
                        </h3>
                        <p>Searches</p>
                    </span>
                </li>
                <li><i class='bx bx-dollar-circle'></i>
                    <span class="info">
                        <h3>
                            $6,742
                        </h3>
                        <p>Total Sales</p>
                    </span>
                </li>
            </ul>

            <div class="bottom-data">
                <div class="orders">
                    <div class="header">
                        <i class='bx bx-receipt'></i>
                        <h3>Recent Orders</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-search'></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span class="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/assets/img//profile-1.jpg" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span class="status process">Processing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="reminders">
                    <div class="header">
                        <i class='bx bx-note'></i>
                        <h3>Remiders</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-plus'></i>
                    </div>
                    <ul class="task-list">
                        <li class="completed">
                            <div class="task-title">
                                <i class='bx bx-check-circle'></i>
                                <p>Start Our Meeting</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="completed">
                            <div class="task-title">
                                <i class='bx bx-check-circle'></i>
                                <p>Analyse Our Site</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li class="not-completed">
                            <div class="task-title">
                                <i class='bx bx-x-circle'></i>
                                <p>Play Footbal</p>
                            </div>
                            <i class='bx bx-dots-vertical-rounded'></i>
                        </li>
                    </ul>
                </div>


            </div>

        </main>

    </div>
</>
  )
}

export default Dashboard