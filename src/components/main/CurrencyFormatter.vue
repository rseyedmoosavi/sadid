<template>
    <div>
        <v-text-field v-model="price" @input="processPrice" :counter="15" label="مبلغ" required></v-text-field>
        <label v-if="price">(معادل {{num2persian}} تومان )</label>
    </div>
</template>

<!--<v-text-field v-model="price" @input="processPrice" :counter="15" :error-messages="errors"-->
<!--label="مبلغ"-->
<!--required></v-text-field>-->
<!--<label v-if="price">(معادل {{num2persian}} تومان )</label>-->

<script>
    import currencyFormatter from 'currency-formatter'
    import Num2persian from 'num2persian';

    export default {
        data: () => ({
            price: '',
            num2persian: '',
        }),

        methods: {
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

            }
        },
    }
</script>