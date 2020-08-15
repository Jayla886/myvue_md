<template>	
<div>

			<input type="file" @change="upload_upyun" />

			<div class="upload">
					拖拽上传
				      </div>
		
	</div>
</template>

<script>
	
	export default{

		data(){

			return{

			}
		},
		//监听属性
		watch:{


		},
		//计算属性
		computed:{


		},
		mounted () {
			let upload = document.querySelector('.upload');
    upload.addEventListener('dragenter', this.onDrag, false);
    upload.addEventListener('dragover', this.onDrag, false);
    upload.addEventListener('drop', this.onDrop, false);
		},
		//自定义方法
		methods:{

			onDrag (e) {
      e.stopPropagation();
      e.preventDefault();
    },
    onDrop (e) {
      e.stopPropagation();
      e.preventDefault();
      this.upload_upyun(e.dataTransfer.files);
    },
			//上传又拍云
			upload_upyun:function(files){


				//获取文件对象
				//let file = e.target.files[0];
				let file = files[0];

				//声明参数
				let param = new FormData();
				param.append('file',file);

				const config = {

				headers: { 'Content-Type': 'multipart/form-data' }

				} 

				this.axios.post('http://localhost:8000/ypyun/', param, config)// 上传图片

				.then(function(response) {

					console.log(response)

				});

						

}
			

		}


	}

</script>

<style>


.upload {
  margin: 100px auto;
  width: 300px;
  height: 150px;
  border: 2px dashed #f00;
}

</style>