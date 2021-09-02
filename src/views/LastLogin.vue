<template>
    <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
    >
        <template v-slot:item.status="{ item }">
            <v-chip
                    :color="getColor(item.status)"
                    dark
            >
                {{ item.status }}
            </v-chip>
        </template>
    </v-data-table>
</template>

<style>
    .text-start{
        text-align: center !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                headers: [
                    {text: 'ردیف', value: 'no',align:'center'},
                    {text: 'روز', value: 'day',align:'center'},
                    {text: 'تاریخ',align: 'center',sortable: true,value: 'date',},
                    {text: 'IP', value: 'ip',align:'center'},
                    {text: 'وضعیت', value: 'status',align:'center'},
                ],
                desserts: [
                    {
                        no: 1,
                        date: '1400-01-12',
                        day: 'شنبه',
                        ip: '172.15.14.102',
                        status: 'موفق',
                    },
                    {
                        no: 2,
                        date: '1400-01-15',
                        day: 'دوشنبه',
                        ip: '172.15.14.102',
                        status: 'موفق',
                    },
                    {
                        no: 3,
                        date: '1400-01-18',
                        day: 'چهار',
                        ip: '172.15.14.102',
                        status: 'موفق',
                    },
                    {
                        no: 4,
                        date: '1400-01-19',
                        day: 'جمعه',
                        ip: '172.15.14.102',
                        status: 'ناموفق',
                    },
                    {
                        no: 5,
                        date: '1400-01-23',
                        day: 'پنجشنبه',
                        ip: '172.15.14.102',
                        status: 'موفق',
                    },
                    {
                        no: 6,
                        date: '1400-01-28',
                        day: 'شنبه',
                        ip: '5.200.1.65',
                        status: 'موفق',
                    },
                    {
                        no: 7,
                        date: '1400-02-12',
                        day: 'سه شنبه',
                        ip: '5.200.1.65',
                        status: 'موفق',
                    },
                    {
                        no: 8,
                        date: '1400-02-15',
                        day: 'چهار شنبه',
                        ip: '5.200.1.65',
                        status: 'موفق',
                    },
                    {
                        no: 9,
                        date: '1400-02-18',
                        day: 'دو شنبه',
                        ip: '5.200.1.65',
                        status: 'موفق',
                    },
                    {
                        no: 10,
                        date: '1400-02-21',
                        day: 'شنبه',
                        ip: '5.200.1.65',
                        status: 'ناموفق',
                    },
                    {
                        no: 11,
                        date: '1400-02-25',
                        day: 'سه شنبه',
                        ip: '5.200.1.65',
                        status: 'موفق',
                    },
                ],
            }
        },
        methods: {
            getColor(status) {
                if (status === 'موفق')
                    return 'green';
                else
                    return 'red';
            },
        },
    }
</script>