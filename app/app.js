// 入口文件
var app=angular.module("myapp",['ngRoute']);
app.controller("mainctrl",function($scope){
	$scope.user={"name":"别无所求","rander":"IT大牛","address":"河北，石家庄","fans":250};
	$scope.fans=[
	{'name' : '小王','job' : '设计师，博客','imgnum' : 'a1','id':3},
	{'name' : '张琳','job' : '作家，杂志编辑','imgnum' : 'a2','id':4},
	{'name' : '李晓明','job' : '艺术总监，电影编辑','imgnum' : 'a3','id':1},
	{'name' : '赵大成','job' : '音乐家，运动员','imgnum' : 'a4','id':2}
	];
	$scope.navarr=["设置栏目","更多设置","分割线"];
	$scope.navhead=[{'icon':'home','name':'首页'},
					{'icon':'file','name':'简介'},
					{'icon':'envelope','name':'信息'}
					];
	$scope.show = false;
});