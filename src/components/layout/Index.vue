<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider ref="sider" collapsible :collapsed-width="0" v-model="isCollapsed" @on-collapse="collapseStatus">
                <Menu ref="menu" :open-names="openNames" :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu ref="subMenu" name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 1</span>
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            <span>Item 2</span>
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            <span>Item 3</span>
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', padding: 0, boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="height: 600px">Content</div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
            isCollapsed: false,
            openNames: ['1'],
            activeName: '1-2'
        };
    },
    computed: {
        menuitemClasses: function() {
            return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
        },
        rotateIcon() {
            return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
        }
    },
    methods: {
        collapseStatus(status) {
            $(".ivu-layout-sider-zero-width-trigger").remove();
            //this.collapsedSider();
            //收缩菜单
            // if(status) {
            //    console.log($('.ivu-menu-submenu-title').find('i:last').css('display', 'none'));
            //     $('.menu-item ul').css('display', 'none');
            // }else{
            //    console.log($('.ivu-menu-submenu-title').find('i:last').css('display', 'block'));
            //     $('.menu-item ul').css('display', 'block');
            // }
        },
        collapsedSider() {
            this.$refs.sider.toggleCollapse();
        }
    }
};
</script>

<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-con {
    height: 100%;
    width: 100%;
}
.menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
}
.menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: left;
    font-size: 16px;
}
.collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
}
.collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: left;
    font-size: 22px;
}
.rotate-icon {
    transform: rotate(-90deg);
}
.ivu-layout-sider-zero-width-trigger {
    display: none !important;
}
</style>
