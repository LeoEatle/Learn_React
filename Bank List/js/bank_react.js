
var data = {
    "banks":
    [
    {bankname: "中国工商银行", "card": "借记卡/信用卡"},
    {bankname: "中国农业银行", "card": "借记卡/信用卡"},
    {bankname: "中国建设银行", "card": "信用卡"},
    {bankname: "中国工商银行", "card": "借记卡/信用卡"},
    {bankname: "中国工商银行", "card": "借记卡/信用卡"},
    {bankname: "中国工商银行", "card": "借记卡/信用卡"}
]};


var BankBox = React.createClass({
    render: function() {
        console.log(this.props.data);
        return (
            <div className="bankBox">
                <BankList data= {this.props.data} />
            </div>
        );
    }
});

var BankList = React.createClass({
    render: function() {
        console.log("type of this data  " + typeof this.props.data.banks)
        var showdata = this.props.data.banks;
        console.log(showdata);
        var index = 0;
        var bankNodes = this.props.data.banks.map(function (bank,index) {
            //这个地方必须给每一个<ul>赋予一个唯一的key属性,不然会出现warning
            //是否还有其他方案来赋予key值?
            index = index + 1
            return (
                <ul key = {index} >
                    <li key = "name" >{bank.bankname}</li>
                    <li key = "card">{bank.card}</li>
                </ul>
            );
        });
        return (        
            <div className="bankList">
                {bankNodes}
            </div>
        );
    }
});
//var Bank = React.createClass({
//    render: function () {
//        console.log("begin to render this bank");
//    }
//})


ReactDOM.render(
    <BankBox data={data}/>,
    document.getElementById('bank_content')
);
