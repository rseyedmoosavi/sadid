<template>
    <div id="app">
        <v-app>
            <v-container>
                <v-row>
                    <v-col cols="3" class="rounded">
                        <ListBar name="سیدروح الله سیدموسوی" email="rseyedmoosavi@gmail.com" lastVisited="29 خرداد ماه 1400"/>
                    </v-col>
                    <v-col cols="9">
                        <v-card>
                            <router-view/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row  >
                    <Footer></Footer>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import ListBar from "./components/main/ListBar";
    import Footer from "./views/footer";
    export default {
        components: {ListBar,Footer},
        data: () => ({
            drawer: false,
            group: null,
        }),
    }
</script>


<style>
    @import './assets/fonts/yekan/yekan.css';
</style>
