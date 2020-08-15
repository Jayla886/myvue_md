<template>
  <div>

	<myheader></myheader>
	

	<section class="featured-block text-center">
		<div class="container">
			
			<div>
				
				<Breadcrumb :datas="datas"></Breadcrumb>


			</div>


			<div>
				
				<table>
					
					<tr>
						
						<td>

							用户名:
							
						</td>

						<td>

							<input type="text" v-model="username" placeholder="请输入用户名" />
							
						</td>


					</tr>
					<tr>
						
						<td>

							手机号:
							
						</td>

						<td>

							<input type="text" v-model="phone" placeholder="请输入手机号" />
							
						</td>


					</tr>


					<tr>
						
						<td>

							密 码:
							
						</td>

						<td>

							<input type="password" v-model="password" placeholder="请输入密码"/>
							
						</td>


					</tr>

					<tr>

						<td></td>
						
						<td> <Button @click="submit" color="blue">提 交</Button> </td>

					</tr>




				</table>


			</div>



		</div>
	</section>
	

	
	<footer class="footer">

		<div class="container">
			@v3u.cn
		</div>
		
		
	</footer>
    
  </div>
  
</template>


 
<script>

//导入组件
import myheader from './myheader.vue'

export default {
  data () {
    return {
      msg: "这是一个变量",
      //表单数据
      username:'',
	  password:'',
	  phone:'',
      //面包屑导航变量
      datas:[{title:'首页',route:{name:'index'}},{title:'注册页面'}]
    }
  },
  //注册组件标签
  components:{

  	'myheader':myheader

  },
  mounted:function(){

   
  
},
  methods:{

  	//定义提交事件
  	submit:function(){


  		//非空验证
  		if(this.username == ''){

  			this.$Message('您没有输入用户名');
  			return false;

  		} 

  		//请求后台接口
  		this.axios.get('http://localhost:8000/register/',{params:{username:this.username,password:this.password,phone:this.phone}}).then((result) =>{


  			console.log(result);

  			this.$Message(result.data.message);


  		});


  	}

     
  }
}


</script>
 
<style>

td {
	padding:10px;
}

</style>