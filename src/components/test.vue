// template定义页面骨架 模板
<template>
    <div>
        <table width="50%">
            <tr><td>名称</td><td>数量</td><td>价格</td></tr>
            <tr v-for="(item,index) in tlist" :key="index">
                <td>{{item.text}}</td>
                <td>
                    <!-- //index 确定加减的具体行 -->
                    <button @click="minus(index,'-')" style="width:40px">-</button> 
                    
                    <input type="text" v-model="item.num" style="20px">
                    <button @click="minus(index,'+')" style="width:40px">+</button>
                </td>
                <td>{{item.price}}</td>
            </tr>
        </table>
        总数量：{{ totalcount(0) }}
        <br>
        总价格:{{totalcount(1) }}
        <br><br>
        {{counter}}
        <button @click="counter++">点我就加1</button>
        <br><br>
        {{reverse_msg2()}}
        {{reverse_msg}}
        <ul>
            <li v-for="(item,index) in tlist" :key="index" :class="{on:index%2==0,off:index%2!=0}">
                {{item.text}}
            </li>
        </ul>
        <div v-if="type == 'A'">A</div>
        <div v-else-if="type == 'B'">B</div>
        <div v-else>既不是A 页不是B</div>

        <h2 v-if="true">Hello World</h2>
        <h2 v-show="ok">Hello World</h2>

        <div v-html="msg"></div>
        {{ msg }}
        
    </div>
</template>

// script 定义页面行为 写一些属性和方法
<script>
    export default {
        // data 定义数据
        data(){
            return{
                msg:'<h1>这是一个变量</h1>',
                ok:1,
                type:'C',
                tlist:[{text:'汽车',num:1,price:10},{text:'化妆品',num:1,price:8},{text:'衣服',num:1,price:1},{text:'牛奶',num:1,price:5}],
                counter:0,
                
            }
        },
        // 监听属性
        match:{
            counter(nval,oval){
                console.log('计数器由'+oval+'变换为新的'+nval)
            }
        },
        //计算属性
        computed:{
            reverse_msg(){
                console.log(this.msg.split(''))
                return this.msg.split('').reverse().join('');
            }
        },
        // 钩子方法 created 数据加载之前
        // 模板渲染之前
        mounted(){

        },
        // 自定义方法
        methods:{
            // 汇总数量
            totalcount(type){

				//默认数量
                let total = 0;
                
                // 默认价格
                let total_price = 0
				//遍历
				for(let i=0,l=this.tlist.length;i<l;i++){

					//总数量累加
					total += parseInt(this.tlist[i].num);

                    // 总价格累加
                    total_price += (this.tlist[i].price * this.tlist[i].num);

				}
                if(type==0){
                    return total;
                }else{
                    return total_price;
                }
				
			},
            reverse_msg2(){
                console.log(this.msg.split(''))
                return this.msg.split('').reverse().join('');
            },
            // 购物车减法
            minus(index,mid){
                if(mid=='-'){
                    if(this.tlist[index].num>1){
                        this.tlist[index].num--
                    }
                    
                }else{
                    this.tlist[index].num++
                }
                
            },
            // 购物车加法
            add(index){
                
                    this.tlist[index].num++;
                
            },
            
        },
        
    }
</script>

// 定义样式
<style>
.on{
    background: rebeccapurple;
    color:white;
}
.off{
    background: red;
    color:black;
}
</style>