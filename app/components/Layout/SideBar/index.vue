<template>

    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">


            <Submenu v-for="item in menu" name="_">

                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{item.name}}
                </template>

                <Submenu v-if="item2.children.length>0" v-for="item2 in item.children"  name="__">

                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{item2.name}}
                    </template>

                    <MenuItem v-for="item3 in item2.children" name="___">{{item3.name}}</MenuItem>



                </Submenu>
                <MenuItem v-if="item4.children.length<1" v-for="item4 in item.children"  name="__">{{item4.name}}


                </MenuItem>


            </Submenu>


        </Menu>
    </Sider>
</template>

<script>
    const appConfig = require('config/app')

    export default {
        data() {
            return {
                isCollapsed: false,
                menu: appConfig.menu
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
    }
</script>