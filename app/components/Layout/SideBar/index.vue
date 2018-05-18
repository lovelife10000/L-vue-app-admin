<template>

    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">


            <Submenu v-for="(item,index) in menu" :name="'_'+index">

                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{item.name}}
                </template>

                <Submenu v-if="item2.children.length>0" v-for="(item2,index2) in item.children" :name="'__'+index2">

                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{item2.name}}
                    </template>

                    <MenuItem v-for="(item3,index3) in item2.children" :name="index2+'___'+index3">
                        <router-link :to="item3.url">{{item3.name}}</router-link>
                    </MenuItem>


                </Submenu>
                <MenuItem v-if="item4.children.length<1" v-for="(item4,index4) in item.children" :name="index+'____'+index4">
                    <router-link :to="item4.url">{{item4.name}}</router-link>

                </MenuItem>


            </Submenu>


        </Menu>
    </Sider>
</template>

<script>
    const appConfig = require('config/app');

    export default {
        data() {
            return {
                isCollapsed: false,
                menu: appConfig.menu,
            };
        },
        computed: {
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : '',
                ];
            },
        },
    };
</script>

<style>

    .ivu-menu-item a {
        color: #fff;
        background: 0 0 !important;
    }
</style>
