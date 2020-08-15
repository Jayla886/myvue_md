<template>
  <div>

     
	  <myheader></myheader>
		
	
		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品检索</h3>
				<div class="row">
					<div v-for="(item,index) in goodslist" :key="index" class="col-sm-6 col-md-3 col-product"> 
						<figure>
							<img class="rounded-corners img-fluid" :src="'http://localhost:8000/static/upload/'+item.img" width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="'http://localhost:8080/item/?id='+item.id">
					
						<div v-html="$options.filters.myfilter(item.name)"></div>
						
						
						</a></h4>
						<p><span class="emphasis">${{item.price}}</span></p>
					</div>
				</div>
				<div>
					<!-- heyui分页 -->
					<Pagination layout="pager,jumper" small v-model="pagination" @change="get_goods"></Pagination>
				</div>
				
				
				
			</div>
			
		</section>
		
		<div>
						
						</div>
		<div class="divider"></div>
		
		
		
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
		text:'',
	  //分页器便量
	  pagination:{
		  //当前页
		  page:1,
		  // 每页数量
		  size:2,
		  //总数据量
		  total:4,
	  }	,
	  msg: "这是一个变量",
	  goodslist:[],
	  
	  
    }
  },
  //注册组件标签
  components:{

	  'myheader':myheader,
	

  },
  mounted:function(){
	  //传递公共变量
	  window.that = this;
		//接收参数
		var text = this.$route.query.text;
		console.log(text); 
		this.text = text;
		//判断 查找下标
		if(text.indexOf(' ')){
			text = text.split(" ");
			//格式转换
			text = JSON.stringify(text);
		}
		this.text = text;
		console.log(text);
		
		this.get_goods();
		
    },

	//自定义过滤器
	filters:{
		myfilter:function(value){
			console.log(window.that);
			// value = value.replace(
			// new RegExp(window.that.text,'g'),'<span class="highlight">'+window.that.text+'</span>');
			return value;
		}
	},
  methods:{
	 
      //获取商品
  	get_goods:function(){

      //发送请求
      this.axios.get('http://localhost:8000/search/',{params:{
		  page:this.pagination.page,size:this.pagination.size,text:this.text }
		  }).then((result) =>{

		console.log(result.data.data);
		// for(let i=0;i<result.data.data.lenth;i++){
			// result.data.data[i]['name'] = result.data.data[i]['name'].replace(
			// new RegExp(this.text,'g'),'<span class="highlight">'+this.text+'</span>');
		// }
		// console.log(result.data.data);

		this.goodslist = result.data.data;
		//商品总页数
		this.pagination.total = result.data.total;
		

      });

	},
	  
  }
	  
}


</script>
 
<style>
.highlight{
	color:red;
}


</style>