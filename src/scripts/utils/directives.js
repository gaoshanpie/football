
angular.module("mapp")
    .directive("head", function () {
        return {
            restrict:"A",
            replace:true,
            template:`<header>
                        <ul>
                            <li><i class="iconfont">&#xe790;</i></li>
                            <li>
                            <p>
                                <span ui-sref="app.home.hot" ui-sref-active="active">热点</span>
                                <span ui-sref="app.home.follow" ui-sref-active="active">关注</span>
                            </p>
                            </li>
                            <li><i class="iconfont">&#xe60c;</i></li>
                        </ul>
                    </header>`
        }
    })
    .directive("foot", function () {
        return {
            restrict:"A",
            replace:true,
            template:`<footer>
                        <ul>
                            <li ui-sref="app.home" ui-sref-active="active" ng-click="moren()"><i class="iconfont">&#xe751;</i><b>首页</b></li>
                            <li ui-sref="app.find" ui-sref-active="active"><i class="iconfont">&#xe752;</i><b>发现</b></li>
                            <li ui-sref="app.carme" ui-sref-active="active"><i class="iconfont">&#xe771;</i><b></b></li>
                            <li ui-sref="app.my" ui-sref-active="active"><i class="iconfont">&#xe788;</i><b>我的</b></li>
                            <li ui-sref="app.exit" ui-sref-active="active"><i class="iconfont">&#xe734;</i><b>退出</b></li>
                        </ul>
                    </footer>`
    }
    })