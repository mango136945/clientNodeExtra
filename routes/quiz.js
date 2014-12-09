var async = require("async") ;

/*var f1 = function () { console.log ("one...") ; }
var f2 = function () { console.log ("two...") ; }
var f3 = function () { console.log ("three...") ; }

async.series({
    two: function(c){
        setTimeout(function(){
            f1() ;
            c(null,1);
        }, 9000);
    },
    one: function(c){
        setTimeout(function(){
            f2() ;
            c(null,2);
        }, 10000);
    },
    three: function(c){
        setTimeout(function(){
            f3() ;
            c(null,3);
        }, 3000);
    }
},
function(err, results) {
    console.log( results ) ;
}
);*/


async.series([
	
function(callback){
		
		setTimeout(function()
				{
			console.log("first callback");
			
				},
				
				9000);
		callback(null,"one call");
	},

function(callback){
	
		setTimeout(function(){
			console.log("second callback");
			
		},10000);
		callback(null,"second call ");
},
function(callback){
	
	setTimeout(function(){console.log("third callback");},3000);
	callback(null,"third call ");
}
],
function(err,results){
	
	console.log(results);
	
}
)



/*async.waterfall([
	
	function (callback){
		
		console.log("first call");
		callback(null,"first call ");
	},
function(arg,callback){
	
	console.log("second call after  "+arg);
	callback(null,"second call ");
},
function(callback){
	
	console.log("third call ");
	callback(null,"third call ");
}
	
],function(err,results){
	console.log(err);
	console.log(results);
})*/



/*var async = require("async") ;

async.waterfall([
    function(c){
        c( null, "a" ) ;        
    },
    function(arg, c){
        console.log( arg ) ;
        c( "error", "b", "c" ) ;
    },
    function(arg1, arg2, c){
        console.log( arg1 ) ;
        console.log( arg2 ) ;
        c(null, "done") ;   
    }
],
function(err, results) {
    console.log( "err: " + err ) ;
    console.log( "results: " + results ) ;
}
);*/