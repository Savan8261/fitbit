import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';


function Sidebar() {
    return (
        <div>
            <div style={{ position: "", display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                            Sidebar
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <Link to="" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </Link>
                            <Link to="tables" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
                            </Link>
                            <Link to="profile" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                            </Link>
                            <Link exact to="/analytics" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                            </Link>

                            <Link exact to="/hero404" target="_blank" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                            </Link>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        </div>
    )
}

export default Sidebar
