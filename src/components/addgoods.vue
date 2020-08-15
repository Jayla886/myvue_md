<template>
  <div>

	<myheader></myheader>
	

	<section class="featured-block text-center">
		<div class="container">
			
			<div>
				
				<Breadcrumb :datas="datas" v-model="selected"></Breadcrumb>


			</div>

			


			<div>
				
				<table>
                    <tr>
                        <td>商品分类：</td>
                        <td>
                            <Select :datas="category" v-model="selected">

                            </Select>
                        </td>
                    </tr>
					
					<tr>
						
						<td>

						商品名称:
							
						</td>

						<td>

							<input type="text" v-model="name" placeholder="请输入商品名称">
							
						</td>


					</tr>


					<tr>
						
						<td>

							商品价格:
							
						</td>

						<td>

							<input type="number" v-model="price">
							
						</td>


					</tr>


					<tr>
						
						<td>

							商品颜色：
						</td>

						<td>

						<input type="text" v-model="color"/>

						
							
						</td>
					</tr>
                    <tr>
						
						<td>

							商品号码：
						</td>

						<td>

						<input type="text" v-model="size"/>

						
							
						</td>
					</tr>
                    <tr>
						
						<td>

							商品季节：
						</td>

						<td>

						<input type="text" v-model="season"/>

						
							
						</td>
					</tr>
					
                    <tr>
                        <td></td>
                        <td @click="submit"><Button color="green">添加商品</Button>

                        </td>
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

//导入文件
import {config,formatXml} from '../config.js';

export default {
  data () {
    return {
      //商品id和name
      goods_dict:{},
        //商品分类
        category:['衣服','手机','电脑'],
        //分类默认选中
        selected:'衣服',
      msg: "这是一个变量",
      name:'',
      price:0,
      color:'',
      size:'',
      season:'',
      
      //面包屑导航变量
      datas:[{title:'首页',route:{name:'addgoods'}},{title:'添加商品'}]
    }
    
  },
  //注册组件标签
  components:{

  	'myheader':myheader

  },
  //钩子方法（调用函数）
  mounted:function(){
	  this.get_category()

  
},
  methods:{
       //获取商品分类
      get_category(){
          this.axios({
            url:'http://localhost:8000/categorylist/',

        }).then(result=>{
            console.log(result);
            var mycate = [];
          //二次处理
          for(let i=0;i<result.data.length;i++){
              mycate.push(result.data[i]['name']);
              // 反向赋值
              this.goods_dict[result.data[i]['name']] = result.data[i]['id']
          }

            //赋值
            this.category = mycate;
        })  
      },

    //   商品添加
    submit(){
        console.log(this.selected)
        console.log(this.goods_dict[this.selected]); 
        
        var param = {};
        param['color'] = this.color;
        param['size'] = this.size;
        param['season'] = this.season;
        console.log(param)
        // 把param字符串
        param = JSON.stringify(param);
        console.log(param);
        this.axios.get('http://localhost:8000/insertgoods/',{params:{name:this.name,price:this.price,params:param,cid:this.goods_dict[this.selected]}}).then((result) =>{

        console.log(result);

        this.$Message(result.data.message);


        })
    },

     
  }
}


</script>
 
<style>





</style>