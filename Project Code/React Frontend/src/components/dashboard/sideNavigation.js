import React from 'react';
import logo from "../../Images/Logo_Dark.svg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="sidebar-fixed ">

            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default SideNavigation;