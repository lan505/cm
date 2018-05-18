<template>
    <div class="login">
        <div class="logo">
            <img src="../../assets/images/logo.jpg" width="400">
        </div>
        <div class="content">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="username">
                    <Input type="text" v-model="formInline.username" placeholder="用户名">
                    <Icon type="person" slot="prepend" size="22"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="locked" slot="prepend" size="22"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="ajbh">
                    <Input type="text" v-model="ajbh" placeholder="案件编号">
                    <Icon type="person" slot="prepend" size="22"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="xqmc">
                    <Input type="text" v-model="xqmc" placeholder="需求名称">
                    <Icon type="person" slot="prepend" size="22"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Upload :before-upload="handleUpload" multiple action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
                    </Upload>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            ajbh: "A44030600005032008050001",
            xqmc: "调查手机号码：18011114444",
            file: null,
            formInline: {
                username: "",
                password: ""
            },
            ruleInline: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        handleUpload(file) {
            this.file = file;
            console.log(this.file);
            console.log(this.file.length);
            return false;
        },
        handleSubmit(name) {
            console.log(this.formInline);
            return;
            var formData = new FormData();
            console.log(this.file);
            formData.append("ajbh", this.ajbh);
            formData.append("xqmc", this.xqmc);
            formData.append("files", this.file);
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            axios
                .post(
                    "http://localhost:8888/cidyth-web/demand/insert",
                    formData,
                    config
                )
                .then(res => {
                    console.log(res);
                })
                .catch(res => {
                    console.log(res);
                });



            // this.$refs[name].validate(valid => {
            //     if (valid) {
            //         axios.post('login', {
            //             username: this.formInline.username,
            //             password: this.formInline.password,
            //         }).then(response => {
            //             if(response.data.result == 0){
            //                 this.$router.push({
            //                     path: 'index'
            //                 })
            //             }else{
            //                 this.$Modal.error({
            //                     title: '提示信息',
            //                     content: response.data.message
            //                 });
            //             }
            //         }).catch(response => {
            //             this.$Modal.error({
            //                 title: '请求异常',
            //                 content: response.data.message
            //             });
            //         })
            //     }
            // });
        }
    }
};
</script>

<style scoped>
.login {
    width: 100%;
}
.logo {
    width: 400px;
    margin: auto;
}
.content {
    width: 200px;
    margin: auto;
}
</style>
