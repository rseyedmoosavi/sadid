<template>
    <v-card class="mx-auto rounded" width="256" tile>
        <v-navigation-drawer permanent id="ListBar">
            <!--<v-system-bar></v-system-bar>-->
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-list-item-avatar>
                                <v-img src="../../assets/srsm.webp"></v-img>
                            </v-list-item-avatar>
                            {{name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>بازدید قبلی: {{lastVisited}}
                            <router-link to="/lastLogin"><v-icon color="green" title="نمایش کامل تاریخچه ورود">mdi-clipboard-list-outline</v-icon></router-link>
                        </v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <template>
            <div class="pa-2">
                <v-btn block>
                    خروج
                </v-btn>
            </div>
        </template>
    </v-card>
</template>

<style>
    #ListBar {
        background: rgba(255, 255, 255, 0.4);
    }

    .v-list-item__icon {
        margin-left: 8px !important;
    }

    .v-list-item__subtitle {
        /*text-align: right !important;*/
        /*direction: rtl !important;*/
        color: red !important;
    }

    .v-list-item__avatar {
        margin-left: 8px !important;
    }
</style>

<script>
    export default {
        props: {
            name: String,
            email: String,
            icon: String,
            lastVisited: String
        },
        data: () => ({
            selectedItem: 0,
            items: [
                {text: 'داشبورد', icon: 'mdi-view-dashboard', link: '/'},
                {text: 'واریز وجه', icon: 'mdi-cash-plus', link: '/deposit'},
                {text: 'برداشت وجه', icon: 'mdi-cash-minus', link: '/about'},
                {text: 'گردش حساب', icon: 'mdi-credit-card-settings',link:'/news'},
                {text: 'تماس با ما', icon: 'mdi-card-account-phone',link:'/about-us'},
            ],
        }),
        methods: {}
    }
</script>
