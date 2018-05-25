<template>
	<div id="app">

		<el-row type="flex" class="row-bg" justify="space-between">
			<el-col :span="12" style="text-align:left;">
				<el-select v-model="selected" placeholder="请选择" @change="changeType">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>

			<el-col :span="12" style="text-align:right;">
				<ul style="margin: 0px; padding: 0px;">
					<li v-for="item in options" style="display: inline-block;margin-left: 10px;">
						<component :is='dynamic_ctl' :text="item.label" :custom_add='customAdd' keep-alive></component>
					</li>
				</ul>
			</el-col>
		</el-row>

		<table>
			<tr>
				<td>

				</td>
				<td>
					<component v-bind:is="which_to_show" icon="el-icon-edit" type="primary" keep-alive>测试按钮</component>
				</td>
				<td>
					<ul>
						<li v-show="item.isShow" v-for="item in options">
							{{item.label}}
						</li>
					</ul>
				</td>
				<td>

				</td>
			</tr>
		</table>

		<table>
			<tr>
				<td>
					<ol style="text-align: left;">
						<li v-for="item in tableData">
							<el-button @click="startHacking" icon="el-icon-edit" type="primary">{{item.name}}</el-button>
						</li>
					</ol>
				</td>
				<td>
					<pagenation :current="2" :total="40" @currentChange="whenChange"></pagenation>
				</td>
			</tr>
		</table>

		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180" header-align="center">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" header-align="center">
			</el-table-column>
		</el-table>
		<br/>
		<el-table :data="tGridData" border style="width: 100%">
			<el-table-column prop="channel_id" label="日期" width="180" header-align="center">
			</el-table-column>
			<el-table-column prop="word" label="姓名" width="180">
			</el-table-column>
		</el-table>

		<el-table :data="tGridData" border style="width: 100%">
			<el-table-column v-for="item in tcolumn" :prop="item.name" :label="item.title" width="180" header-align="center">
			</el-table-column>
		</el-table>
	</div>

</template>

<script>
	import dadd from './components/dem_add.vue';
	import page from './components/page/page.vue';
	export default {
		components: {
			'dem_add': dadd,
			'pagenation': page
		},

		data() {
			return {
				msg: 'hello work',
				which_to_show: 'el-button',
				dynamic_ctl: 'dem_add',
				tcolumn: [{
						order: '1',
						name: 'channel_id',
						title: '编号'
					}, {
						order: '2',
						name: 'word',
						title: '标题'
					}

				],

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
				tGridData: []
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

				this.tcolumn.push({
					order: '3',
					name: 'sex',
					title: '性别'

				});
			},
			customAdd() {
				alert('parent');
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
				var that = this;
				this.$ajax({
						method: 'get',
						url: 'http://localhost/vue/data.json',
						data: {
							name: 'wise',
							info: 'wrong'
						}
					}).then(function(res) {
						debugger;
						that.tGridData = res.data;
					})
					.catch(function(err) {
						console.log(err)
					})

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
	
	.el-row {
		margin: 4px;
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		margin: 0px;
		padding: 0px 4px 0px 4px;
		padding-top: 6px;
		padding-bottom: 6px;
		background-color: #f9fafc;
	}
</style>