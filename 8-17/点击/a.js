/**
 * Created by Administrator on 2016/8/17 0017.
 */
(function () {
    function Student(name,age,gender) {

    var self={name:name,age:age,gender:gender};
    
        self.getNode=function () {
            return self.htmlNode;
        };
        self.toString=function () {
            return "名字："+self.name+"\n年龄："+self.age+"\n性别："+self.gender ;
        };
        function createHtmlNode() {

            self.htmlNode=document.createElement("div");
            self.htmlNode.style.backgroundColor = "red";
            self.htmlNode.style.marginTop = "5px";
            var a=document.createElement("a");
            a.innerHTML=self.name;
            a.href="#";
            // a.onclick=function () {
            //     alert(self);
            //
            // };
            self.htmlNode.appendChild(a);
            var closeBtn=document.createElement("button");
            closeBtn.innerHTML="Close";
            self.htmlNode.appendChild(closeBtn);
            closeBtn.onclick = function () {
                self.htmlNode.parentNode.removeChild(self.htmlNode);
            }
        }

            function init() {
               createHtmlNode();
            }
            init();

         return self;
    }
    
    
    function BoyStudent(name,age) {
        var self=Student(name,age,"男");
        self.sayHello=function () {
            alert(self.name + "说:你好");
        };
        self.htmlNode.onclick=function () {
            self.sayHello();
        };
        return self;
    }
    
    function GirlStudent(name,age) {
        var self = Student(name, age, "女");
        return self;
    }
    
    var students=[
        BoyStudent("张三", 10, "男"),
        BoyStudent("李四", 12, "男"),
        GirlStudent("丽丽", 9, "女")
    ];
    for(var i=0;i<students.length;i++){
        var student = students[i];
        document.body.appendChild(student.getNode());
    }
    
    
    
})();