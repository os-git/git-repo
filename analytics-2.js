/* START Analytics - conversion events and goals */

// Скрипт состоит из двух частей:
// Часть 1. Задаются настройки для целей.
// Часть 2. Указывается местоположение и имя элемента взаимодействие с которым будет отслеживаться.

// Часть 1
var ConEvents = {

	// Описание структуры Части 1
	//
	// В [ квадратных скобках ] указаны переменные значения
	//
	// [ название цели в скрипте ] : function(){
	// Настройка для Google Analytics (GA) >  ga('send', 'event','[ категория цели в GA ]','[ действие цели в GA ]');
	// Настройка для Яндекс Метрики (ЯМ) >  yaCounter[ номер счётчика ЯМ ].reachGoal('[ идентификатор цели в ЯМ ]');
	// действие цели в GA = идентификатор цели в ЯМ
	// Информация для вывода в консоли > console.log('[ идентификатор цели в ЯМ ] event');
	// },
	//
	// Пример ниже

	// Цель 1
	goal_1 : function(){
		ga('send', 'event','forms','feedback');
		yaCounter00000000.reachGoal('feedback');
		console.log('feedback event');
	},

	// Цель 2
	goal_2 : function(){
		ga('send', 'event','forms','coupon');
		yaCounter00000000.reachGoal('coupon');
		console.log('coupon event');
	}
};
