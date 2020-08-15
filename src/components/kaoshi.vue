<template>
    <div>
        <div v-for="(item,index) in goodslist" :key="index">
            &emsp;&emsp;&emsp;&emsp;&emsp;
            
            <table>
                <tr>
                    <td>{{item.name}}--{{item.price}}--{{item.desc}}</td>
                </tr>
                
            </table>
        </div>
        <div>
            <!-- heyui分页 -->
				<Pagination layout="pager,jumper" small v-model="pagination" @change="get_goods"></Pagination>
        </div>	
        &nbsp;&nbsp;&nbsp;&nbsp;
            搜索：<input type="text" v-model="text" @search="search">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                text:'',
                goodslist:[],
                //分页器便量
	    pagination:{
		  //当前页
		  page:1,
		  // 每页数量
		  size:2,
		  //总数据量
		  total:4,
      }	,
      
            }
        },
        mounted(){
            this.get_goods();
            this.search()
        },
        
        methods:{
            // 检索方法
			search(){
				//获取输入的关键词
				console.log(this.text);
				this.axios({
                    url:'http://localhost:8000/shop/',
                    params:{text:this.text}
                }).then()
                    

			},
            get_goods:function(){

      //发送请求
      this.axios.get('http://localhost:8000/shop/',{params:{
		  page:this.pagination.page,size:this.pagination.size}
		  }).then((result) =>{

        console.log(result);

		this.goodslist = result.data.data;
		//商品总页数
		this.pagination.total = result.data.total;
		

      });

	},
        }
    }
</script>

<style>
.input{
    color:greenyellow
}

</style>