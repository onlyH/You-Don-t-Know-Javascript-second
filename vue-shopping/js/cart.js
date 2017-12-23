new Vue({
    //需要监听的范围对象
    el: "#app",
    //模型
    data: {
        productList: [],
        totalMoney: 0,
        checkAll: false,
        delFlag: false,
        curProduct: ''
    },
    filters: {
        //金额格式化
        formatMoney: function (value) {
            return "$" + value.toFixed(2);   //局部
        }
    },
    mounted: function () {  //生命周期mounted
        this.cartView();
    },
    methods: {   //所有事件的绑定都需要methods的方法
        cartView: function () {
            var _this = this;
            this.$http.get("data/cartData.json", {"id": 123}).then(function (res) {
                _this.productList = res.body.result.list;
                // _this.totalMoney = res.body.result.totalMoney;
            })
        },
        changeMoney: function (produce, way) {
            if (way > 0) {
                produce.productQuentity++;
            } else {
                produce.productQuentity--;
                if (produce.productQuentity < 1) {
                    produce.productQuentity = 1;
                }
            }
            this.calcTotalPrice();
        },
        selectProduct: function (item) {
            if (typeof item.checked == "undefined") {
                Vue.set(item, "checked", true);
                // this.$set(item,"checked",true);    //局部
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        selectAllFlag: function (flag) {
            this.checkAll = flag;
            var _this = this;
            this.productList.forEach(function (item, index) {
                if (typeof item.checked == 'undefined') {
                    _this.$set(item, "checked", _this.checkAll);
                } else {
                    item.checked = _this.checkAll;
                }
            });
            this.calcTotalPrice();

        },
        calcTotalPrice: function () {
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuentity;
                }
            });
        },
        delConfirm: function (item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct: function () {
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    }
});
//全局filter：
Vue.filter("Money", function (value, type) {
    return "$" + value.toFixed(2) + type;
});

