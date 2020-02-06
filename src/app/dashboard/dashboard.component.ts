import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { tileLayer, latLng } from 'leaflet';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router, private dashboardService: DashboardService) { }

    tableData;

    getDataFromService() {
        this.dashboardService.getTableData().subscribe(
            res => {
                this.tableData = res;
                console.log(res);
            }
        )
    };
    
    dashboardMenus = [{
        name: 'Dashboard',
        icons: 'fa-chart-line'
    }, {
        name: 'Products',
        icons: 'fa-info-circle'
    }, {
        name: 'Customers',
        icons: 'fa-people-carry'
    }, {
        name: 'Reports',
        icons: 'fa-print'
    }, {
        name: 'Integrations',
        icons: 'fa-info-circle'
    }];

    chart = new Chart({
        chart: {
            type: 'areaspline',
            height: 250
        },
        title: {
            text: ''
        },
        xAxis: {

            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            // plotBands: [{ // visualize the weekend
            //     from: 4.5,
            //     to: 6.5,
            //     color: 'rgba(68, 170, 213, .2)'
            // }]

        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0,
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12],
            type: undefined
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4],
            type: undefined
        }]
    });


    pie = new Chart({

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        }, credits: {
            enabled: false
        },
        series: [{
            name: 'Browsers',
            data: [["Firefox", 6], ["MSIE", 4], ["Chrome", 7]],
            size: '70%',
            innerSize: '70%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            },
            type: undefined
        }]

    });

    bar = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0,
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: undefined
        }]
    });



    // -------------------------------------Map Coad Start --------------------------------------

    map;
    options = {
        layers: [
            tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png')
        ],
        zoom: 2,
        center: latLng(20.5937, 78.9629)
    };


    onMapReady(map) {
        this.map = map;
        this.map.scrollWheelZoom.disable();
    };

    // -------------------------------------Map Coad End --------------------------------------


    askUser = "Do You Want To SignOut";

    signOut() {
        if (confirm(this.askUser)) {
            this.router.navigate(['/login']);
        }
    };

    ngOnInit() {
        this.getDataFromService();
    }

}
