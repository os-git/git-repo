/* START Analytics - conversion events and goals */
// Скрипт состоит из двух частей:
var ConEvents = {

	goal_1 : function(){
		ga('send', 'event','forms','feedback');
		yaCounter00000000.reachGoal('feedback');
		console.log('feedback event');
	},

	goal_2 : function(){
		ga('send', 'event','forms','coupon');
		yaCounter00000000.reachGoal('coupon');
		console.log('coupon event');
	}
};
