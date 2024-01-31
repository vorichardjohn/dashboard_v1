Highcharts.chart('market_share', {
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        borderColor: '#fff',
        borderRadius: 6,
        borderWidth: 2,
        styledMode: false,
        dataLabels: {
            style: {
                textOutline: 'none'
            }
        },
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Nord-Norge',
            color: '#50FFB1'
        }, {
            id: 'B',
            name: 'Trøndelag',
            color: '#F5FBEF'
        }, {
            id: 'C',
            name: 'Vestlandet',
            color: '#A09FA8'
        }, {
            id: 'D',
            name: 'Østlandet',
            color: '#E7ECEF'
        }, {
            id: 'E',
            name: 'Sørlandet',
            color: '#A9B4C2'
        }, {
            name: 'Troms og Finnmark',
            parent: 'A',
            value: 70923
        }, {
            name: 'Nordland',
            parent: 'A',
            value: 35759
        }, {
            name: 'Trøndelag',
            parent: 'B',
            value: 39494
        }, {
            name: 'Møre og Romsdal',
            parent: 'C',
            value: 13840
        }, {
            name: 'Vestland',
            parent: 'C',
            value: 31969
        }, {
            name: 'Rogaland',
            parent: 'C',
            value: 8576
        }, {
            name: 'Viken',
            parent: 'D',
            value: 22768
        }, {
            name: 'Innlandet',
            parent: 'D',
            value: 49391
        },
        {
            name: 'Oslo',
            parent: 'D',
            value: 454
        },
        {
            name: 'Vestfold og Telemark',
            parent: 'D',
            value: 15925
        },
        {
            name: 'Agder',
            parent: 'E',
            value: 14981
        }]
    }],
    title: {
        text: 'Norwegian regions and counties by area',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a href="https://snl.no/Norge" target="_blank">SNL</a>',
        align: 'left'
    },
    tooltip: {
        useHTML: true,
        pointFormat:
            'The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>'
    }
});

Highcharts.chart('revenue_and_earnings', {
    chart: {
        type: 'waterfall'
    },

    title: {
        text: 'Revenue &amp; Earnings'
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'USD'
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<b>${point.y:,.2f}</b> USD'
    },

    series: [{
        upColor: Highcharts.getOptions().colors[2],
        color: Highcharts.getOptions().colors[3],
        data: [{
            name: 'Start',
            y: 120000
        }, {
            name: 'Product Revenue',
            y: 569000
        }, {
            name: 'Service Revenue',
            y: 231000
        }, {
            name: 'Positive Balance',
            isIntermediateSum: true,
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'Fixed Costs',
            y: -342000
        }, {
            name: 'Variable Costs',
            y: -233000
        }, {
            name: 'Balance',
            isSum: true,
            color: Highcharts.getOptions().colors[1]
        }],
        dataLabels: {
            enabled: true,
            format: '{divide y 1000}k'
        },
        pointPadding: 0
    }]
});

Highcharts.chart('revenue-ttm', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Revenue, Trailing 12 Months (TTM)',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        }
    ]
});

Highcharts.chart('net_income-ttm', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Net Income, Trailing 12 Months (TTM)',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        }
    ]
});

Highcharts.chart('pe_vs_peers', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    accessibility: {
        description: 'Image description: A column range chart compares the monthly temperature variations throughout 2021 in Vik i Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in February at minus 16.7 Celsius. The lowest range of temperatures is found in March ranging from a low of minus 4.7 to a high of 11.6 Celsius. The highest temperature is found in June at 29.4 Celsius. May has the highest range of temperatures from minus 2.5 to 27.2 Celsius. The broadest range of temperatures is also found in May ranging from a low of minus 2.1 to a high of 27.2 Celsius.'
    },

    title: {
        text: 'P/E'
    },

    subtitle: {
        text: 'Observed in Vik i Sogn, Norway, 2021 | ' +
            'Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'Temperature ( °C )'
        }
    },

    tooltip: {
        valueSuffix: '°C'
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                format: '{y}°C'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Temperatures',
        data: [
            [-13.9, 5.2],
            [-16.7, 10.6],
            [-4.7, 11.6],
            [-4.4, 16.8],
            [-2.1, 27.2],
            [5.9, 29.4],
            [6.5, 29.1],
            [4.7, 25.4],
            [4.3, 21.6],
            [-3.5, 15.1],
            [-9.8, 12.5],
            [-11.5, 8.4]
        ]
    }]

});

Highcharts.chart('ps_vs_peers', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    accessibility: {
        description: 'Image description: A column range chart compares the monthly temperature variations throughout 2021 in Vik i Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in February at minus 16.7 Celsius. The lowest range of temperatures is found in March ranging from a low of minus 4.7 to a high of 11.6 Celsius. The highest temperature is found in June at 29.4 Celsius. May has the highest range of temperatures from minus 2.5 to 27.2 Celsius. The broadest range of temperatures is also found in May ranging from a low of minus 2.1 to a high of 27.2 Celsius.'
    },

    title: {
        text: 'P/S'
    },

    subtitle: {
        text: 'Observed in Vik i Sogn, Norway, 2021 | ' +
            'Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'Temperature ( °C )'
        }
    },

    tooltip: {
        valueSuffix: '°C'
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                format: '{y}°C'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Temperatures',
        data: [
            [-13.9, 5.2],
            [-16.7, 10.6],
            [-4.7, 11.6],
            [-4.4, 16.8],
            [-2.1, 27.2],
            [5.9, 29.4],
            [6.5, 29.1],
            [4.7, 25.4],
            [4.3, 21.6],
            [-3.5, 15.1],
            [-9.8, 12.5],
            [-11.5, 8.4]
        ]
    }]

});

Highcharts.chart('net_margin_vs_peers', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    accessibility: {
        description: 'Image description: A column range chart compares the monthly temperature variations throughout 2021 in Vik i Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in February at minus 16.7 Celsius. The lowest range of temperatures is found in March ranging from a low of minus 4.7 to a high of 11.6 Celsius. The highest temperature is found in June at 29.4 Celsius. May has the highest range of temperatures from minus 2.5 to 27.2 Celsius. The broadest range of temperatures is also found in May ranging from a low of minus 2.1 to a high of 27.2 Celsius.'
    },

    title: {
        text: 'Net Margin'
    },

    subtitle: {
        text: 'Observed in Vik i Sogn, Norway, 2021 | ' +
            'Source: <a href="https://www.vikjavev.no/ver/" target="_blank">Vikjavev</a>'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'Temperature ( °C )'
        }
    },

    tooltip: {
        valueSuffix: '°C'
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                format: '{y}°C'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Temperatures',
        data: [
            [-13.9, 5.2],
            [-16.7, 10.6],
            [-4.7, 11.6],
            [-4.4, 16.8],
            [-2.1, 27.2],
            [5.9, 29.4],
            [6.5, 29.1],
            [4.7, 25.4],
            [4.3, 21.6],
            [-3.5, 15.1],
            [-9.8, 12.5],
            [-11.5, 8.4]
        ]
    }]

});

Highcharts.chart('revenue_and_earnings_forecast', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Revenue & Earnings',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
            ' target="_blank">SSB</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
            'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
    },
    yAxis: {
        title: {
            text: 'TWh'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total production',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }, {
        name: 'Gross consumption',
        data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
        ]
    }, {
        name: 'Trade surplus',
        data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
    }]
});

Highcharts.chart('revenue_by_segment', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Revenue & Earnings',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
            ' target="_blank">SSB</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
            'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
    },
    yAxis: {
        title: {
            text: 'TWh'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total production',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }, {
        name: 'Gross consumption',
        data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
        ]
    }, {
        name: 'Trade surplus',
        data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
    }]
});

Highcharts.chart('profit_by_segment', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Revenue & Earnings',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
            ' target="_blank">SSB</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
            'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
    },
    yAxis: {
        title: {
            text: 'TWh'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total production',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }, {
        name: 'Gross consumption',
        data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
        ]
    }, {
        name: 'Trade surplus',
        data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
    }]
});

Highcharts.chart('balance_sheet', {
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        borderColor: '#fff',
        borderRadius: 6,
        borderWidth: 2,
        styledMode: true,
        dataLabels: {
            style: {
                textOutline: 'none'
            }
        },
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Nord-Norge',
            color: '#50FFB1'
        }, {
            id: 'B',
            name: 'Trøndelag',
            color: '#F5FBEF'
        }, {
            id: 'C',
            name: 'Vestlandet',
            color: '#A09FA8'
        }, {
            id: 'D',
            name: 'Østlandet',
            color: '#E7ECEF'
        }, {
            id: 'E',
            name: 'Sørlandet',
            color: '#A9B4C2'
        }, {
            name: 'Troms og Finnmark',
            parent: 'A',
            value: 70923
        }, {
            name: 'Nordland',
            parent: 'A',
            value: 35759
        }, {
            name: 'Trøndelag',
            parent: 'B',
            value: 39494
        }, {
            name: 'Møre og Romsdal',
            parent: 'C',
            value: 13840
        }, {
            name: 'Vestland',
            parent: 'C',
            value: 31969
        }, {
            name: 'Rogaland',
            parent: 'C',
            value: 8576
        }, {
            name: 'Viken',
            parent: 'D',
            value: 22768
        }, {
            name: 'Innlandet',
            parent: 'D',
            value: 49391
        },
        {
            name: 'Oslo',
            parent: 'D',
            value: 454
        },
        {
            name: 'Vestfold og Telemark',
            parent: 'D',
            value: 15925
        },
        {
            name: 'Agder',
            parent: 'E',
            value: 14981
        }]
    }],
    title: {
        text: 'Norwegian regions and counties by area',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a href="https://snl.no/Norge" target="_blank">SNL</a>',
        align: 'left'
    },
    tooltip: {
        useHTML: true,
        pointFormat:
            'The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>'
    }
});

Highcharts.chart('balance_sheet_over_time', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Revenue & Earnings',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
            ' target="_blank">SSB</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
            'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
    },
    yAxis: {
        title: {
            text: 'TWh'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total production',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }, {
        name: 'Gross consumption',
        data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
        ]
    }, {
        name: 'Trade surplus',
        data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
    }]
});

const colors = Highcharts.getOptions().colors;

Highcharts.chart('revenue_prognosis', {
    chart: {
        type: 'arearange',
        zoomType: 'x'
    },
    title: {
        text: 'Revenue'
    },
    subtitle: {
        text: '<a href="https://economy-finance.ec.europa.eu/system/files/2023-05/SF_2023_Statistical%20Annex.pdf" target="_blank">European Economic Forecast, Spring 2023</a>'
    },
    xAxis: {
        type: 'category',
        accessibility: {
            rangeDescription: 'Range: 2022 to 2024.'
        },
        min: 1,
        max: 12,
        endOnTick: false,
        plotBands: [{
            color: 'rgba(255, 75, 66, 0.07)',
            from: 5.5,
            to: 99,
            label: {
                text: 'Forecast'
            }
        }],
        plotLines: [{
            dashStyle: 'dash',
            color: colors[4],
            width: 2,
            value: 5.5
        }]
    },
    yAxis: {
        opposite: true,
        title: {
            text: 'GDP change<br/>on preceding year'
        },
        labels: {
            format: '{value}%'
        },
        max: 30
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '%',
        valuePrefix: '+'
    },
    responsive: {
        rules: [{
            chartOptions: {
                xAxis: {
                    labels: {
                        staggerLines: 2
                    }
                }
            },
            condition: {
                minWidth: 540
            }
        }]
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        arearange: {
            enableMouseTracking: false,
            states: {
                inactive: {
                    enabled: false
                }
            },
            color: colors[7],
            fillOpacity: 1 / 3,
            lineWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'EU GDP',
        type: 'line',
        data: [
            ['2021', 5.4],
            ['Q1.2022', 5.7],
            ['Q2.2022', 4.4],
            ['Q3.2022', 2.6],
            ['Q4.2022', 1.7],
            ['Q1.2023', 1.3],
            ['Q2.2023', 0.6],
            ['Q3.2023', 0.6],
            ['Q4.2023', 1.1],
            ['Q1.2024', 1.3],
            ['Q2.2024', 1.5],
            ['Q3.2024', 1.6],
            ['Q4.2024', 1.7],
            ['2025', 1.7]
        ],
        zIndex: 2,
        color: colors[7],
        lineWidth: 4
    }, {
        name: '1σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -3.4, 4.6],
            ['Q3.2023', -3.4, 4.6],
            ['Q4.2023', -2.9, 5.1],
            ['Q1.2024', -2.7, 5.3],
            ['Q2.2024', -2.5, 5.5],
            ['Q3.2024', -2.4, 5.6],
            ['Q4.2024', -2.3, 5.7],
            ['2025', -2.3, 5.7]
        ]
    }, {
        name: '2σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -7.4, 8.6],
            ['Q3.2023', -7.4, 8.6],
            ['Q4.2023', -6.9, 9.1],
            ['Q1.2024', -6.7, 9.3],
            ['Q2.2024', -6.5, 9.5],
            ['Q3.2024', -6.4, 9.6],
            ['Q4.2024', -6.3, 9.7],
            ['2025', -6.3, 9.7]
        ]
    }, {
        name: '3σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -11.4, 12.6],
            ['Q3.2023', -11.4, 12.6],
            ['Q4.2023', -10.9, 13.1],
            ['Q1.2024', -10.7, 13.3],
            ['Q2.2024', -10.5, 13.5],
            ['Q3.2024', -10.4, 13.6],
            ['Q4.2024', -10.3, 13.7],
            ['2025', -10.3, 13.7]
        ]
    }]
});

Highcharts.chart('net_income_prognosis', {
    chart: {
        type: 'arearange',
        zoomType: 'x'
    },
    title: {
        text: 'Net Income'
    },
    subtitle: {
        text: '<a href="https://economy-finance.ec.europa.eu/system/files/2023-05/SF_2023_Statistical%20Annex.pdf" target="_blank">European Economic Forecast, Spring 2023</a>'
    },
    xAxis: {
        type: 'category',
        accessibility: {
            rangeDescription: 'Range: 2022 to 2024.'
        },
        min: 1,
        max: 12,
        endOnTick: false,
        plotBands: [{
            color: 'rgba(255, 75, 66, 0.07)',
            from: 5.5,
            to: 99,
            label: {
                text: 'Forecast'
            }
        }],
        plotLines: [{
            dashStyle: 'dash',
            color: colors[4],
            width: 2,
            value: 5.5
        }]
    },
    yAxis: {
        opposite: true,
        title: {
            text: 'GDP change<br/>on preceding year'
        },
        labels: {
            format: '{value}%'
        },
        max: 30
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '%',
        valuePrefix: '+'
    },
    responsive: {
        rules: [{
            chartOptions: {
                xAxis: {
                    labels: {
                        staggerLines: 2
                    }
                }
            },
            condition: {
                minWidth: 540
            }
        }]
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        arearange: {
            enableMouseTracking: false,
            states: {
                inactive: {
                    enabled: false
                }
            },
            color: colors[7],
            fillOpacity: 1 / 3,
            lineWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'EU GDP',
        type: 'line',
        data: [
            ['2021', 5.4],
            ['Q1.2022', 5.7],
            ['Q2.2022', 4.4],
            ['Q3.2022', 2.6],
            ['Q4.2022', 1.7],
            ['Q1.2023', 1.3],
            ['Q2.2023', 0.6],
            ['Q3.2023', 0.6],
            ['Q4.2023', 1.1],
            ['Q1.2024', 1.3],
            ['Q2.2024', 1.5],
            ['Q3.2024', 1.6],
            ['Q4.2024', 1.7],
            ['2025', 1.7]
        ],
        zIndex: 2,
        color: colors[7],
        lineWidth: 4
    }, {
        name: '1σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -3.4, 4.6],
            ['Q3.2023', -3.4, 4.6],
            ['Q4.2023', -2.9, 5.1],
            ['Q1.2024', -2.7, 5.3],
            ['Q2.2024', -2.5, 5.5],
            ['Q3.2024', -2.4, 5.6],
            ['Q4.2024', -2.3, 5.7],
            ['2025', -2.3, 5.7]
        ]
    }, {
        name: '2σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -7.4, 8.6],
            ['Q3.2023', -7.4, 8.6],
            ['Q4.2023', -6.9, 9.1],
            ['Q1.2024', -6.7, 9.3],
            ['Q2.2024', -6.5, 9.5],
            ['Q3.2024', -6.4, 9.6],
            ['Q4.2024', -6.3, 9.7],
            ['2025', -6.3, 9.7]
        ]
    }, {
        name: '3σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -11.4, 12.6],
            ['Q3.2023', -11.4, 12.6],
            ['Q4.2023', -10.9, 13.1],
            ['Q1.2024', -10.7, 13.3],
            ['Q2.2024', -10.5, 13.5],
            ['Q3.2024', -10.4, 13.6],
            ['Q4.2024', -10.3, 13.7],
            ['2025', -10.3, 13.7]
        ]
    }]
});

Highcharts.chart('eps_prognosis', {
    chart: {
        type: 'arearange',
        zoomType: 'x'
    },
    title: {
        text: 'Earnings Per Share (EPS)'
    },
    subtitle: {
        text: '<a href="https://economy-finance.ec.europa.eu/system/files/2023-05/SF_2023_Statistical%20Annex.pdf" target="_blank">European Economic Forecast, Spring 2023</a>'
    },
    xAxis: {
        type: 'category',
        accessibility: {
            rangeDescription: 'Range: 2022 to 2024.'
        },
        min: 1,
        max: 12,
        endOnTick: false,
        plotBands: [{
            color: 'rgba(255, 75, 66, 0.07)',
            from: 5.5,
            to: 99,
            label: {
                text: 'Forecast'
            }
        }],
        plotLines: [{
            dashStyle: 'dash',
            color: colors[4],
            width: 2,
            value: 5.5
        }]
    },
    yAxis: {
        opposite: true,
        title: {
            text: 'GDP change<br/>on preceding year'
        },
        labels: {
            format: '{value}%'
        },
        max: 30
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '%',
        valuePrefix: '+'
    },
    responsive: {
        rules: [{
            chartOptions: {
                xAxis: {
                    labels: {
                        staggerLines: 2
                    }
                }
            },
            condition: {
                minWidth: 540
            }
        }]
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        arearange: {
            enableMouseTracking: false,
            states: {
                inactive: {
                    enabled: false
                }
            },
            color: colors[7],
            fillOpacity: 1 / 3,
            lineWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'EU GDP',
        type: 'line',
        data: [
            ['2021', 5.4],
            ['Q1.2022', 5.7],
            ['Q2.2022', 4.4],
            ['Q3.2022', 2.6],
            ['Q4.2022', 1.7],
            ['Q1.2023', 1.3],
            ['Q2.2023', 0.6],
            ['Q3.2023', 0.6],
            ['Q4.2023', 1.1],
            ['Q1.2024', 1.3],
            ['Q2.2024', 1.5],
            ['Q3.2024', 1.6],
            ['Q4.2024', 1.7],
            ['2025', 1.7]
        ],
        zIndex: 2,
        color: colors[7],
        lineWidth: 4
    }, {
        name: '1σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -3.4, 4.6],
            ['Q3.2023', -3.4, 4.6],
            ['Q4.2023', -2.9, 5.1],
            ['Q1.2024', -2.7, 5.3],
            ['Q2.2024', -2.5, 5.5],
            ['Q3.2024', -2.4, 5.6],
            ['Q4.2024', -2.3, 5.7],
            ['2025', -2.3, 5.7]
        ]
    }, {
        name: '2σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -7.4, 8.6],
            ['Q3.2023', -7.4, 8.6],
            ['Q4.2023', -6.9, 9.1],
            ['Q1.2024', -6.7, 9.3],
            ['Q2.2024', -6.5, 9.5],
            ['Q3.2024', -6.4, 9.6],
            ['Q4.2024', -6.3, 9.7],
            ['2025', -6.3, 9.7]
        ]
    }, {
        name: '3σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -11.4, 12.6],
            ['Q3.2023', -11.4, 12.6],
            ['Q4.2023', -10.9, 13.1],
            ['Q1.2024', -10.7, 13.3],
            ['Q2.2024', -10.5, 13.5],
            ['Q3.2024', -10.4, 13.6],
            ['Q4.2024', -10.3, 13.7],
            ['2025', -10.3, 13.7]
        ]
    }]
});

Highcharts.chart('share_count_prognosis', {
    chart: {
        type: 'arearange',
        zoomType: 'x'
    },
    title: {
        text: 'Share Count'
    },
    subtitle: {
        text: '<a href="https://economy-finance.ec.europa.eu/system/files/2023-05/SF_2023_Statistical%20Annex.pdf" target="_blank">European Economic Forecast, Spring 2023</a>'
    },
    xAxis: {
        type: 'category',
        accessibility: {
            rangeDescription: 'Range: 2022 to 2024.'
        },
        min: 1,
        max: 12,
        endOnTick: false,
        plotBands: [{
            color: 'rgba(255, 75, 66, 0.07)',
            from: 5.5,
            to: 99,
            label: {
                text: 'Forecast'
            }
        }],
        plotLines: [{
            dashStyle: 'dash',
            color: colors[4],
            width: 2,
            value: 5.5
        }]
    },
    yAxis: {
        opposite: true,
        title: {
            text: 'GDP change<br/>on preceding year'
        },
        labels: {
            format: '{value}%'
        },
        max: 30
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '%',
        valuePrefix: '+'
    },
    responsive: {
        rules: [{
            chartOptions: {
                xAxis: {
                    labels: {
                        staggerLines: 2
                    }
                }
            },
            condition: {
                minWidth: 540
            }
        }]
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        },
        arearange: {
            enableMouseTracking: false,
            states: {
                inactive: {
                    enabled: false
                }
            },
            color: colors[7],
            fillOpacity: 1 / 3,
            lineWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'EU GDP',
        type: 'line',
        data: [
            ['2021', 5.4],
            ['Q1.2022', 5.7],
            ['Q2.2022', 4.4],
            ['Q3.2022', 2.6],
            ['Q4.2022', 1.7],
            ['Q1.2023', 1.3],
            ['Q2.2023', 0.6],
            ['Q3.2023', 0.6],
            ['Q4.2023', 1.1],
            ['Q1.2024', 1.3],
            ['Q2.2024', 1.5],
            ['Q3.2024', 1.6],
            ['Q4.2024', 1.7],
            ['2025', 1.7]
        ],
        zIndex: 2,
        color: colors[7],
        lineWidth: 4
    }, {
        name: '1σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -3.4, 4.6],
            ['Q3.2023', -3.4, 4.6],
            ['Q4.2023', -2.9, 5.1],
            ['Q1.2024', -2.7, 5.3],
            ['Q2.2024', -2.5, 5.5],
            ['Q3.2024', -2.4, 5.6],
            ['Q4.2024', -2.3, 5.7],
            ['2025', -2.3, 5.7]
        ]
    }, {
        name: '2σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -7.4, 8.6],
            ['Q3.2023', -7.4, 8.6],
            ['Q4.2023', -6.9, 9.1],
            ['Q1.2024', -6.7, 9.3],
            ['Q2.2024', -6.5, 9.5],
            ['Q3.2024', -6.4, 9.6],
            ['Q4.2024', -6.3, 9.7],
            ['2025', -6.3, 9.7]
        ]
    }, {
        name: '3σ',
        data: [
            ['Q1.2023', 1.3, 1.3],
            ['Q2.2023', -11.4, 12.6],
            ['Q3.2023', -11.4, 12.6],
            ['Q4.2023', -10.9, 13.1],
            ['Q1.2024', -10.7, 13.3],
            ['Q2.2024', -10.5, 13.5],
            ['Q3.2024', -10.4, 13.6],
            ['Q4.2024', -10.3, 13.7],
            ['2025', -10.3, 13.7]
        ]
    }]
});

