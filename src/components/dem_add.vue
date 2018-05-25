<template>
	<el-button @click="add" icon="el-icon-edit" type="primary">{{text}}</el-button>
</template>

<script>
	export default {
		name: 'dem_add',
		props: {
			text: {
				type: String,
				default: '操作'
			},

			custom_add: {
				type: Function
			}

		},
		data() {
			return {
				msg: 'I am one'
			}
		},
		methods: {
			add() {
				if(this.custom_add) {
					this.custom_add();
				} else {
					this.base_add();
				}
			},

			base_add() {
				alert('add');
			}
		}
	}
</script>