<template>
    <v-container id="qqa">
        <v-row>
            <v-col cols="9">
                <form @submit.prevent="submit">
                    <CurrencyFormatter></CurrencyFormatter>
                    <v-text-field v-model="description" label="توضیحات"></v-text-field>
                    <v-select v-model="bank" :items="items" label="درگاه پرداخت"
                              data-vv-name="bank"></v-select>
                    <v-btn type="submit">
                        پرداخت
                    </v-btn>

                    <v-btn type="button" @click="snakeBar1">
                        تست
                    </v-btn>
                </form>
            </v-col>
            <v-col cols="3">
                <!--<v-img src="../../assets/investment.jpg"/>-->
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    #app{
        /*background: linear-gradient(to right, #01ffb7, #D76D77, #3A1C71);*/
        background-image: url("../../assets/bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
    }
</style>

<script>
    import Num2persian from 'num2persian';
    import CurrencyFormatter from "../main/CurrencyFormatter";
    import 'js-snackbar/snackbar.css';
    import {show, ACTION_TYPE} from 'js-snackbar';

    export default {
        components: {
            CurrencyFormatter,
        },
        data: () => ({
            name: '',
            price: '',
            num2persian: '',
            description: '',
            bank: null,
            items: [
                'بانک ملت',
                'بانک ملی',
                'آپ(آسان پرداخت)',
            ],
            checkbox: null,
        }),

        methods: {
            submit() {
                this.$refs.observer.validate()
            },
            processPrice(val) {
                let temp = val.match(/\d/g);
                temp = temp.join("");
                this.num2persian = Num2persian(temp / 10);
                this.price = currencyFormatter.format(val, {
                    symbol: 'ریال',
                    thousand: ',',
                    precision: 0,
                    format: '%v %s' // %s is the symbol and %v is the value
                })

            },
            snakeBar1() {
                show({
                    text: 'فیلدهای الزام اجباریست!',
                    pos: 'top-right',
                    customClass: 'custom-class',
                    notifyIcon: 'تست',
                    actionType: ACTION_TYPE.CLOSE,
                    backgroundColor: '#52ff7a'
                });
            }
        },
    }
</script>
