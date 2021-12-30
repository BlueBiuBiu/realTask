<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			wx.cloud.init({
				// env: "99115760-f034-48b4-8a75-cdd5d5200e23",
				traceUser: true
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
