import React from 'react';
import { connect } from "react-redux";
import { MDBCol, MDBCard, MDBCardBody, MDBRow } from 'mdbreact';
import { Bar } from 'react-chartjs-2';
import { adminActions } from "../../../redux/_actions";

class Chart extends React.Component {


    componentDidMount() {

        var admin = JSON.parse(localStorage.getItem('admin'));
        if (admin) {
            this.props.dispatch(adminActions.MonthlyReport());
        }
        else {

            window.location.href = '/admin/Login';
        }
    }

  


    render() {

        const { reportdata, reportdataloaded } = this.props;

        var x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      
        if (reportdataloaded) {
            reportdata.map(report => (
                x[report.Month] = report.MonthlyProfit
            ))
        }
       

        const dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Admin Share',
                    data: x,
                    backgroundColor: 'rgba(245, 74, 85, 0.5)',
                    borderWidth: 1
                }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    gridLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        return (

            
            <MDBRow className="mb-4">
                <MDBCol md="8" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>>
            </MDBRow>
        )
    }
}

function mapStateToProps(state) {
    const { reportdata, reportdataloaded } = state.adminReports;
    return {
        reportdata,
        reportdataloaded
    };
}

const connectedAdminDashboard = connect(mapStateToProps)(Chart);
export { connectedAdminDashboard as Chart };
