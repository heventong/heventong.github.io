var pageIndex="";                          // 页码索引
var ss="";
var pageNum="";               // 每页条数
var kind="";                                   // 焦点页码标签
var sj="";                                   // 焦点页码标签
var maxK="";                                   // 最大K值 
var minK="";                                   // 最小K值
var num="";
var kt="";
var ks="";
var keyword="";

//功能描述：加载内容条数
//创建日期：2016年9月9日
//创建人：DJM
function listPageNum(id) {
    $.ajax({
        type: "POST",
        dataType: "text",
        url: '/js/ashx/JPage.ashx',      //提交到一般处理程序请求数据
        data: { k: kind, maxK: maxK, minK: minK, pageNum: pageNum, ss: ss, sj: sj, kt: kt, keyword: keyword, ks: ks },
        success: function (data) {
            num = Number(data);

            $("#" + id + "").empty();

            var str = "";
            if (num > 0) {
                if (num > 1) {
                    //str += "<a href=\"javascript:goToPage(1)\"><span class=\"fy-prve1\"></span></a>"
                    //str += "<a href=\"javascript:previous()\"><span class=\"fy-prve2\"></span></a>";
                    //str += "<li class=\"prev no-page\"><a href=\"javascript:previous()\">上一页</a></li>";

                    str += "<a href=\"javascript:previous();\" class=\"left" + (pageIndex > 1 ? " on" : "") + "\">上一页</a>";
                    str += "<span>" + pageIndex + "/" + num + "</span>";
                    str += "<a href=\"javascript:next();\" class=\"right" + (pageIndex < num ? " on" : "") + "\">下一页</a>";

                    //str += "<li class=\"next\"><a href=\"javascript:next()\">下一页</a></li>";
                    //str += "<a href=\"javascript:next()\"><span class=\"fy-next1\"></span></a>";
                    //str += "<a href=\"javascript:goToPage(" + num + ")\"><span class=\"fy-next2\"></span></a>"

                    $("#" + id + "").append(str);
                }
            }
            else {
                $("#" + id + "").append("暂无内容……");
            }
        }
    });
}

//功能描述：加载下一页
//创建日期：2016年9月9日
//创建人：DJM
function next() {
    pageIndex = ++pageIndex > num ? num : pageIndex;
    otherPage();
}
//功能描述：加载上一页
//创建日期：2016年9月9日
//创建人：DJM
function previous() {
    pageIndex = --pageIndex < 1 ? 1 : pageIndex;
    otherPage();
}
//功能描述：到某一页
//创建日期：2016年9月9日
//创建人：DJM
function goToPage(n) {
    pageIndex = Number(n);
    otherPage();
}

