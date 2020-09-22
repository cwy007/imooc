# note

1.open() 方法：open() 有三个参数。第一个参数定义发送请求所使用的方法,第二个参数规定服务器端脚本的URL，第三个参数规定应当对请求进行异步地处理。xmlHttp.open("GET","test.php",true);

2.send() 方法：send() 方法将请求送往服务器，当使用get时，open中的url拼好参数，send中不传参数，那么代码是这样的：xmlHttp.send(null); 当使用post时，open中不带参数，send中传入参数
