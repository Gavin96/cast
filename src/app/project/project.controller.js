(function() {
	'use strict';

	angular
	// .module('forecastAngular',["ngTable","ngTableDemos"])
	.module('forecastAngular')
	.controller('ProjectController', ProjectController);

	// ProjectController.$inject = ["NgTableParams", "ngTableSimpleList"];
	ProjectController.$nginject = ["NgTableParams"];

	/** @ngInject */
	// function ProjectController(NgTableParams,simpleList) {
		function ProjectController(NgTableParams) {
		//TODO
		var self=this;
		var simpleList=[
			{name:'Nissim',sTime:'1/2/2016',eTime:'1/7/2016'},
			{name:'Mark',sTime:'3/3/2016',eTime:'8/8/2016'},
			{name:'Dustin',sTime:'2/3/2016',eTime:'9/9/2016'},
			{name:'Gzra',sTime:'1/4/2016',eTime:'4/5/2016'},
			{name:'Lydia',sTime:'5/2/2016',eTime:'11/11/2016'},
			{name:'Azra',sTime:'11/4/2016',eTime:'4/8/2016'},
			{name:'Bzra',sTime:'12/4/2016',eTime:'4/7/2016'},
			{name:'Czra',sTime:'13/4/2016',eTime:'4/6/2016'},
			{name:'Dzra',sTime:'14/4/2016',eTime:'4/9/2016'},
			{name:'Ezra',sTime:'15/4/2016',eTime:'4/10/2016'},
			{name:'Fzra',sTime:'16/4/2016',eTime:'4/11/2016'},
			{name:'Hzra',sTime:'15/4/2016',eTime:'4/12/2016'},
			{name:'Izra',sTime:'18/4/2016',eTime:'2/5/2016'},
			{name:'Jzra',sTime:'19/4/2016',eTime:'1/8/2016'},
			{name:'Kzra',sTime:'10/4/2016',eTime:'4/8/2016'},
			{name:'Lzra',sTime:'21/4/2016',eTime:'4/8/2016'},
			{name:'Mzra',sTime:'11/5/2016',eTime:'4/8/2016'},
			{name:'Nzra',sTime:'12/4/2016',eTime:'4/8/2016'},
			{name:'Ozra',sTime:'13/4/2016',eTime:'4/8/2016'},
			{name:'Pzra',sTime:'14/4/2016',eTime:'4/8/2016'},
			{name:'Qzra',sTime:'15/4/2016',eTime:'4/8/2016'},
			{name:'Rzra',sTime:'16/4/2016',eTime:'4/8/2016'},
			{name:'Szra',sTime:'17/4/2016',eTime:'4/8/2016'},
			{name:'Tzra',sTime:'18/4/2016',eTime:'4/8/2016'},
			{name:'Uzra',sTime:'19/4/2016',eTime:'4/8/2016'},
			{name:'Vzra',sTime:'10/4/2016',eTime:'4/8/2016'},
			{name:'Xzra',sTime:'12/5/2016',eTime:'4/8/2016'},
			{name:'Yzra',sTime:'11/5/2016',eTime:'4/8/2016'},
			{name:'Zzra',sTime:'13/5/2016',eTime:'4/8/2016'},
			{name:'AAzra',sTime:'14/5/2016',eTime:'4/8/2016'},
			{name:'ABzra',sTime:'15/5/2016',eTime:'4/8/2016'},
			{name:'ACzra',sTime:'16/5/2016',eTime:'4/8/2016'},
			{name:'ADzra',sTime:'17/4/2016',eTime:'4/8/2016'},
			{name:'AEzra',sTime:'18/4/2016',eTime:'4/8/2016'},
			{name:'AFzra',sTime:'19/4/2016',eTime:'4/8/2016'},
			{name:'AGzra',sTime:'10/4/2016',eTime:'4/8/2016'},
			{name:'AHzra',sTime:'20/4/2016',eTime:'4/8/2016'},
			{name:'AJzra',sTime:'21/4/2016',eTime:'4/8/2016'},
			{name:'AKzra',sTime:'22/4/2016',eTime:'4/9/2016'},
			{name:'ALzra',sTime:'23/4/2016',eTime:'4/9/2016'},
			{name:'AZzra',sTime:'24/4/2016',eTime:'4/10/2016'},
			{name:'AXzra',sTime:'25/4/2016',eTime:'4/11/2016'},
			{name:'ACzra',sTime:'26/4/2016',eTime:'4/12/2016'},
			{name:'AVzra',sTime:'27/4/2016',eTime:'4/7/2016'},
			{name:'AQzra',sTime:'28/4/2016',eTime:'4/8/2016'},
			{name:'AWzra',sTime:'29/4/2016',eTime:'4/6/2016'},
			{name:'ARzra',sTime:'30/4/2016',eTime:'4/9/2016'},
			{name:'AYzra',sTime:'1/6/2016',eTime:'4/7/2016'},
			{name:'AUzra',sTime:'2/6/2016',eTime:'4/8/2016'},

		];
		self.tableParams=new NgTableParams({},{ 
			dataset:simpleList
		});
	}
})();

