//惰性实例化
var singleton = (function(){
    function init(){
        var privateVar = 'private';
        return {
            prop : 'value',
            method : function(){
                console.log(privateVar);
            }
        }
    }

    var instance = null;

    return {
        getInstance : function(){
            if(!instance){
                instance = init();
            }

            return instance;
        }
    }
})();

//惰性加载实现单例模式
var dateTimeHelper = (function(){
    function init(){
        return {
            now : function(){
                return new Date();
            },

            format : function(date){
                return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            }
        }
    }

    var instance = null;

    return {
        getInstance : function(){
            if(!instance){
                instance = init();
            }

            return instance;
        }
    }
})();


console.log(dateTimeHelper.getInstance().now());
