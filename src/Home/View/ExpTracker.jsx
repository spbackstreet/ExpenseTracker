import React, { Component } from 'react';
import { FixedHeader } from '../../Common/JS/FixedHeader';
import Spinner from 'react-spinner-material';
import CanvasJSReact from './assets/canvasjs.react';
import data from '../../Data/data'
import { confirmAlert } from 'react-confirm-alert';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MultiSeriesAreaChart extends Component {
    componentDidMount() {
        let d = new Date();
        let n = d.getMonth();
        this.setState({
            currentMonth: n,
            options: data[n]
        })
    }

    goToPreviousMonth = () => {
        if (this.state.currentMonth >= 1) {
            this.setState({
                options: data[this.state.currentMonth - 1],
                currentMonth: this.state.currentMonth - 1
            })
        }
        else {
            confirmAlert({
                title: "Information",
                message: 'Can not go beyond this.',
                buttons: [
                    {
                        label: 'Ok'
                    }

                ]
            });
        }

    }
    goToNextMonth = () => {
        let d = new Date();
        let n = d.getMonth();
        if (this.state.currentMonth < n) {
            this.setState({
                options: data[this.state.currentMonth + 1],
                currentMonth: this.state.currentMonth + 1
            })
        }
        else {
            confirmAlert({
                title: "Information",
                message: 'Can not go beyond this.',
                buttons: [
                    {
                        label: 'Ok'
                    }

                ]
            });
        }

    }
    state = {
        loading: false,
        currentMonth: 0,
        options: {
            animationEnabled: true,
            title: {
                text: ""
            },
            subtitles: [{
                text: "",
                amount: 50000,
                verticalAlign: "",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "", y: 10 }
                ]
            }]
        }
    }
    render() {
        return (
            <div class="my_app_container">
                <div class="rechargehome_wrapper">
                    <div>
                        <div class="container">
                            <div class="">
                                <div class="row">
                                    <div class="col">
                                        {FixedHeader()}
                                        <section class="card-view-sm mt-3">
                                            <div class="card shadow-sm">
                                                <div class="card-body">
                                                    <div className="spin">
                                                        <Spinner visible={this.state.loading}
                                                            spinnerColor={"rgba(0, 0, 0, 0.3)"} />
                                                    </div>
                                                    <div class="row no-gutters">
                                                        <div class="col-12">
                                                            <form action="" class="">
                                                                <div class="login">
                                                                    <div >
                                                                        <b>Customer Name : </b>
                                                                        Sameer Shekhar Patkar</div>
                                                                    <div >
                                                                        <b>Bank Name : </b>
                                                                        Axis Bank</div>                                                                    <div >
                                                                        <b>IFSC Code : </b>
                                                                        IFSCD0006</div>                                                                    <div >
                                                                        <b>Credit Card No : </b>
                                                                        xxxxxxxxxx345</div>
                                                                    <div class="form-group">
                                                                        <b>Total Expense of {this.state.options.subtitles[0].text} Month :</b>
                                                                        {this.state.options.subtitles[0].amount}                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <CanvasJSChart options={this.state.options} />
                                                            <div className="mb-5" />
                                                            {
                                                                this.state.options.data[0].dataPoints.map((item, index) => {
                                                                    return (
                                                                        <div class="form-group" key={index}>
                                                                            <b>{item.name} : </b>
                                                                            {this.state.options.subtitles[0].amount * item.y / 100}</div>
                                                                    )
                                                                })
                                                            }
                                                            <div className="row" style={{ marginTop: "25px" }}>
                                                                <div className="col-6 col-sm-6">
                                                                    <button type="button" className="jio-btn jio-btn jio-btn-primary bg-transparent primary-c1 w-100 mb-2 mr-1"
                                                                        onClick={() => this.goToPreviousMonth()}
                                                                    >Previous</button>
                                                                </div>
                                                                <div className="col-6 col-sm-6">
                                                                    <button type="button" className="jio-btn jio-btn jio-btn-primary w-100 mb-2 ml-1"
                                                                        onClick={() => this.goToNextMonth()}
                                                                    >Next</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >);
    }
}

export default MultiSeriesAreaChart;