<template>
	<div id="one">
		<el-button icon="el-icon-edit" type="primary">{{text}}</el-button>
	</div>
</template>

<script>
	export default {
		name: 'one',
		props: {
			text: {
				type: String,
				default: '操作'
			}
		},
		data() {
			return {
				msg: 'I am one'
			}
		}
	}
</script>