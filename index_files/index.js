$(function () {

    // 大圖slider切換

    var $main_bg_img = $('.main_bg img');
    var _img_number = 0;
    var _img_length = $main_bg_img.length;

    function _img_slider() {
        $main_bg_img.eq(_img_number).addClass('active').siblings().removeClass();
        $('.main_text .content').eq(_img_number).addClass('active').siblings().removeClass('active');
        _img_number++;
        if (_img_number > _img_length - 1) {
            _img_number = 0;
        }
    }

    _img_slider();
    setInterval(_img_slider, 6000);

    // SVG動態

    new Vivus('feature1', {
        duration: 100
    });
    new Vivus('feature2', {
        duration: 100
    });
    new Vivus('feature3', {
        duration: 100
    });
    new Vivus('feature4', {
        duration: 100
    });
    new Vivus('feature5', {
        duration: 100
    });
    new Vivus('feature6', {
        duration: 100
    });
    new Vivus('feature7', {
        duration: 100
    });
    new Vivus('eye_desktop', {
        duration: 100
    });
    new Vivus('eye_mobile', {
        duration: 100
    });
    new Vivus('video_play1', {
        duration: 50
    });
    new Vivus('video_play2', {
        duration: 50
    });
    new Vivus('main_map', {
        duration: 100
    });

    // 貴金屬參考價格

    Highcharts.chart('gold', {
        title: {
            text: 'Historical London Fix Prices'
        },

        subtitle: {
            text: 'Source: http://www.kitco.com'
        },

        yAxis: {
            title: {
                text: 'LATEST PRICES (in USD)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },

        series: [{
            name: 'Gold',
            data: [1275.50, 1280.20, 1283.85, 1291.85, 1294.90, 1290.50, 1290.35, 1286.95, 1283.30, 1286.20, 1275.50, 1280.20, 1283.85, 1291.85, 1294.90, 1290.50, 1290.35, 1286.95, 1283.30, 1286.20]
        }, {
            name: 'Silver',
            data: [16.42, 16.57, 16.89, 17.07, 17.10, 17.05, 17.09, 16.96, 17.00, 17.05, 16.42, 16.57, 16.89, 17.07, 17.10, 17.05, 17.09, 16.96, 17.00, 17.05]
        }, {
            name: 'Platinum',
            data: [934.00, 940.00, 945.00, 955.00, 948.00, 935.00, 933.00, 938.00, 927.00, 935.00, 934.00, 940.00, 945.00, 955.00, 948.00, 935.00, 933.00, 938.00, 927.00, 935.00]
        }, {
            name: 'Palladium',
            data: [1016.00, 1010.00, 1014.00, 1013.00, 1012.00, 1001.00, 1005.00, 1001.00, 994.00, 1000.00, 1016.00, 1010.00, 1014.00, 1013.00, 1012.00, 1001.00, 1005.00, 1001.00, 994.00, 1000.00]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });






})