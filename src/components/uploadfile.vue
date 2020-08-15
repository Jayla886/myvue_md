<template>
    <div>
        <div>
            <h1>文件上传页</h1>
            <div>
                <img :src="src" height="300px">
                <div>
                <table>
                    <tr>
                        <td>
                            用户头像：
                        </td>
                        <td>
                            <input type="file" @change="upload"/>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                src:''
            }
        },
        methods:{
            //定义上传头像事件
  	        upload:function(e){

            // 获取文件
            let file = e.target.files[0];

            //声明表单参数
            let param = new FormData();
            param.append('file',file,file.name);
            
            // 声明请求头
            let config = {headers:{'Content-Type':'multipart/form-data'}}

            //请求后台接口
            this.axios.post('http://localhost:8000/uploadfile/',param,config).then((result) =>{


                console.log(result);
                this.src = "http://localhost:8000/static/upload/"+result.data.filename;
                


            });


        }

        
    }
        }
    
</script>

<style scoped>

</style>