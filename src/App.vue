<template>
	<div id="app">

		<el-select v-model="selected" placeholder="请选择" @change="changeType">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>

		<ol>
			<li v-for="item in tableData">
				<el-button @click="startHacking" icon="el-icon-edit" type="primary">{{item.name}}</el-button>
			</li>
		</ol>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180" header-align="center">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" header-align="center">
			</el-table-column>
		</el-table>
		<pagenation :current="2" :total="40" @currentChange="whenChange"></pagenation>

		<ul>
			<li v-show="item.isShow" v-for="item in options">
				{{item.label}}
			</li>
		</ul>
		<component v-bind:is="which_to_show" icon="el-icon-edit" type="primary" keep-alive>测试按钮</component>

		<ul>
			<li v-for="item in options" style="display: inline-block;">
				<component :is='currentView' v-on:btnClickEvent='startHacking' keep-alive>{{item.label}}</component>
			</li>
		</ul>

	</div>
</template>

<script>
	import one from './components/one.vue'
	export default {
		components: {
			'one': one
		},

		data() {
			return {
				msg: 'hello work',
				which_to_show: 'el-button',
				currentView: 'one',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				options: [{
					isShow: false,
					value: '选项1',
					label: '黄金糕'

				}, {
					isShow: false,
					value: '选项2',
					label: '双皮奶'

				}, {
					isShow: false,
					value: '选项3',
					label: '蚵仔煎'

				}, {
					isShow: false,
					value: '选项4',
					label: '龙须面'

				}, {
					isShow: false,
					value: '选项5',
					label: '北京烤鸭'
				}],
				selected: '',
			}
		},
		methods: {
			startHacking() {
				this.$notify({
					title: 'It works!',
					type: 'success',
					message: 'hahah',
					duration: 5000
				})
			},
			changeType(e) {
				this.selected = e;
				this.options.forEach(function(item, i) {

					item.isShow = false;
					if(item.value == e) {
						item.isShow = true;
					}
				});
			},
			whenChange(item) {

			}
		}

	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
	
	ol li {
		display: inline-block;
		margin-left: 6px;
	}
</style>