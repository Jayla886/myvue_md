<template>
  <div>

     
	  <myheader></myheader>
		
		<div id="carousel" class="carousel slide" data-ride="carousel">
		
	
			<ul class="carousel-indicators">
				<li data-target="#carousel" data-slide-to="0" class="active"></li>
				<li data-target="#carousel" data-slide-to="1"></li>
				<li data-target="#carousel" data-slide-to="2"></li>
			</ul>
	
			<div class="carousel-inner">
				
				<!-- 轮播图 -->
				<carousel @click="clickimg" @change="changeimg" pageTheme="circle" :datas="imgs"></carousel>
				<!--Text only with background image-->
				<div class="carousel-item active">
					<div class="container slide-textonly">
						<div>
							<h1>York &amp; Smith</h1>
							<p class="lead">Spring/Summer 2018 Collection</p>
							<a href="#" class="btn btn-outline-secondary">View Collection</a>
						</div>
					</div>
				</div>
				
				
			
			</div>
		</div>
		<section class="collections text-center ">
			<div class="container-fluid">
				<div class="row">
					<div class="collection col-md-6 alt-background">
						<div class="container container-right text-center">
							<div>
								<h1>Women's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-secondary">Browse Women's</a>
							</div>
						</div>
					</div>
					<div class="collection col-md-6 bg-secondary inverted">
						<div class="container container-left text-center">
							<div>
								<h1>Men's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-white">Browse Men's</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
    
		<section class="featured-block text-center">
			<div class="container">
				<div class="row justify-center">
					<div class="col-md-6 text-center">
						<img class="mt-4 mb-4 img-fluid" src="../assets/images/placeholder-jacket.png" style="width: 100%;">
					</div>
					<div class="col-md-6 text-center text-md-left">
						<h2 class="mb-3">Spring/Summer Collection 2018</h2>
						<p class="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
						<a href="#" class="btn btn-md btn-outline-primary mt-3">Shop Now</a>
					</div>
				</div>
			</div>
		</section>
		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品列表</h3>
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
						<h4><a href="'http://localhost:8080/item/?id='item.id">{{ item.name }}</a></h4>
						<p><span class="emphasis">${{item.price}}</span></p>
					</div>
				</div>
				<div>
					<!-- heyui分页 -->
					<Pagination layout="pager,jumper" small v-model="pagination" @change="get_goods"></Pagination>
				</div>
				<div class="row">
					<div v-for="(item,index) in goodslist_self" :key="index" class="col-sm-6 col-md-3 col-product"> 
						<figure>
							<img class="rounded-corners img-fluid" :src="'http://localhost:8000/static/upload/'+item.img" width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="'http://localhost:8080/item/?id='item.id">{{ item.name }}</a></h4>
						<p><span class="emphasis">${{item.price}}</span></p>
					</div>
				</div>
				<div>
					<!-- 自主分页 -->
					<a @click="get_goods_self(1)" v-show="lastpage">首页</a>
					<Button v-show="lastpage" @click="get_goods_self(lastpage)">上一页</Button>
					&emsp;&emsp;
					<span v-for="(index1,index) in allpage" :key="index">
						<a @click="get_goods_self(index1)">{{index1}}</a>
						&emsp;&emsp;
					</span>
					

					<Button v-show="nextpage" @click="get_goods_self(nextpage)">下一页</Button>
					<a @click="get_goods_self(allpage)" v-show="nextpage">尾页</a>
					<input type="text" @input="jump_page($event)" style="width:50">
				</div>
				<div>
					<Button color="green">按照价格排序</Button>
					<Button color="green">按照id排序</Button>
				</div>
			</div>
			
		</section>
		
		<div>
						
						</div>
		<div class="divider"></div>
		
		<section class="cta text-center">
			<div class="container">
				<h3 class="mt-0 mb-4">Sign up now to save 10% on your first order</h3>
				<form class="subscribe">
					<div class="form-group row pt-3">
						<div class="col-sm-8 mb-3">
							<input type="text" class="form-control" id="inputName" placeholder="Your Name">
						</div>
						<div class="col-sm-4">
							<button type="submit" class="btn btn-lg btn-outline-primary">Sign me up</button>
						</div>
					</div>
				</form>
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
	  // 自主分页
	  goodslist_self:[],
	  total_self:0,
	  //上一页
	  lastpage:0,
	  //下一页
	  nextpage:0,
	  //当前页
	  page:1,
	  //总页数
	  allpage:0,
	  // 每页展示的数量
	  size:2,
	  //轮播图
	  imgs:[
		  {
			  title:'广告活动页',
			  link:'http://www.baidu.com/',
			  image:'http://localhost:8080/static/img/placeholder-jacket.f5996c6.png'
		  },
		  {
			  title:'促销活动页',
			  link:'http://www.baidu.com/',
			  image:'http://localhost:8080/static/img/placeholder-product.1011f1b.jpg'
		  },
	  ]
    }
  },
  //注册组件标签
  components:{

	  'myheader':myheader,
	

  },
  mounted:function(){
	  	this.get_carousel();
		this.change_back();
		this.get_goods();
		 this.get_goods_self(1);
    },


  methods:{
	  //页面跳转
	  jump_page(e){
		  var val = e.target.value;
		  console.log(val);
		  if(val > this.allpage){
			  this.$Message('您输入的页码有误');
			  return false;
		  }
		  	
	  },
      //获取商品
  	get_goods:function(){

      //发送请求
      this.axios.get('http://localhost:8000/goodslist/',{params:{
		  page:this.pagination.page,size:this.pagination.size}
		  }).then((result) =>{

        console.log(result);

		this.goodslist = result.data.data;
		//商品总页数
		this.pagination.total = result.data.total;
		

      });

	},
	  //自主获取商品
  	get_goods_self:function(page){
		  this.page = page;
      //发送请求
      this.axios.get('http://localhost:8000/goodslist/',{params:{
		  page:page,size:this.size}
		  }).then((result) =>{

        console.log(result);

		this.goodslist_self = result.data.data;
		this.total_self = result.data.total;
			// 判断上一页
			if(page==1){
				this.lastpage = 0;
			}else{
				this.lastpage = page - 1;
			}
			//计算总页数
			this.allpage = Math.ceil(this.total_self / this.size);
			//判断下一页
			if(page==this.allpage){
				this.nextpage = 0;
			}else{
				this.nextpage = page + 1;
			}
			

      });

    },

	  // 切换主题颜色
	  change_back(){
		  //获取样式表
		  var style = getComputedStyle(document.documentElement);
		  //动态更改
		  document.documentElement.style.setProperty("--bg-color","#292a2d");
		  document.documentElement.style.setProperty("--a-color","white");
	  },
	  //获取轮播图接口
	  get_carousel(){
		  this.axios.get('http://localhost:8000/getcarousel/').then((result) =>{
			  console.log(result);
			  var mylist = [];
			//   遍历数组
			for(let i=0,l=result.data.length;i<l;i++){
				console.log(result.data[i]);
				mylist.push({title:result.data[i].name,link:result.data[i].src,image:result.data[i].img})
				
				}
				console.log(mylist);
				this.img = mylist; 
  		});
	  },
	  //点击轮播图
	  clickimg(index,data){
		//   console.log(data);
		// alert(data.link);
		window.location.href = data.link;


	  },
	  //切换轮播图
	  changeimg(index,data){
		//   console.log(data);


	  },
     
  }
}


</script>
 
<style>



</style>