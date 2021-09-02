<template>
    <div>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    import apexchart from 'vue-apexcharts'

    export default {
        components: {
            apexchart
        },
        data() {
            return {
                series: [
                    {
                        name: 'پارسال',
                        data: [44, 55, 41, 64, 22, 43, 21,65,23,34,87,90]
                    },
                    {
                        name: 'امسال',
                        data: [53, 32, 33, 52, 13, 44, 32,12,98,34,34,98]
                    }
                ],
                options: {
                    chart: {
                        width: "100%",
                        fontFamily: 'yekan',
                        height: 380,
                        type: "bar",
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        style: {
                            colors: ['#fff'],
                        },
                    },
                    stroke: {
                        width: 1,
                        colors: ["#fff"]
                    },
                    xaxis: {
                        labels: {
                            show: true,
                            rotate: 45,
                            rotateAlways: false,
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                        },
                        categories: [
                            "فروردین",
                            "اردیبهشت",
                            "خرداد",
                            "تیر",
                            "مرداد",
                            "شهریور",
                            "مهر",
                            "آبان",
                            "آذر",
                            "دی",
                            "بهمن",
                            "اسفند",
                        ],
                    },


                    yaxis: {
                        show: true,
                        showAlways: true,
                        showForNullSeries: true,
                        opposite:false,
                        seriesName: 'میلیون',
                        labels: {
                            show: true,
                            align: 'center',
                            minWidth: 0,
                            maxWidth: 160,
                            offsetX: 0,
                            offsetY: 0,
                            rotate: 0,
                        },
                        axisBorder: {
                            show: true,
                            color: '#78909C',
                            offsetX: 0,
                            offsetY: 0
                        },
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#78909C',
                            width: 6,
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            text: 'میلیون تومان',
                            rotate: 90,
                            offsetX: -50,
                            offsetY: 0,
                        },
                    },


                    legend: {
                        // position: "left",
                        verticalAlign: "top",
                        containerMargin: {
                            left: 35,
                            right: 60
                        }
                    },
                    responsive: [
                        {
                            breakpoint: 1000,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: true
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                }
            }
        }

    }
</script>