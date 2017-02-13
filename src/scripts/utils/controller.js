
angular.module("mapp")
    .controller("guideCtrl", function () {
        new Swiper(".swiper-container");
    })
    .controller("appCtrl", function ($state) {
        $state.go("app.home");
    })
    .controller("homeCtrl", function ($state) {
        $state.go("app.home.hot");
    })
    .controller("hotCtrl", function ($http,$scope,$timeout) {
        $(".hot-slide").width($("#content").width()*2);
        init();
        function init(){
            data();
            myswiper();
            iscroll();
        }
        function data(){
            $http.get("./livelist.json")
                .success(function (data) {
                    $scope.data=data.data;
                })
        }
        function myswiper(){
            var mySwiper = new Swiper(".swiper-container",{
                onSlideChangeStart:function(swiper) {
                    var $el=$("#nav li").eq(swiper.activeIndex);
                    $el.addClass("active").siblings().removeClass();
                }
            });
            $("#nav li").click(function () {
                var ind = $(this).index();
                $(this).addClass("active").siblings().removeClass();
                mySwiper.slideTo(ind);
            });
        }
        function iscroll(){
            var h=$("#content").height();
            $('#wrapper').height(h);
            $timeout(function () {
                new IScroll("#wrapper");
            },200);
        }

    });