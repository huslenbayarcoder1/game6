//object -> OOP/
var phone ={
    name :"ip15",
    color:"black",
    year:2023,
    isBroken: false,
    call: function(){
        console.log("calling..");
    }
}
console.log(phone);
console.log(phone.name);
console.log(phone.year);
console.log(phone["color"]);
phone.call();
var hun = {
    name:"BAT",
    age:13,
    gender: "male" ,
    lives:"Ulaanbaatar",
    from:"Mongolia",
    shcool:{
        went: "to 28 high shcool",
    },
    hello : function (){
        console.log("Hello, My name is" +this .name);
        console.log("i am" + this. age+ "nastai");
        console.log("I live in" +this .lives);
     }
}
console.log(hun.shcool.went) ;  
hun.hello();.3
var huuhed={
    name:"Boldoo",
    ovog :hun.name,
    shcool:hun.shcool
}
console.log(huuhed.shcool.went);
var animeSite={
    anime1:{
        name:"Darlin in franx",
        angi:26,     
        uzsen:true
    },
    anime2:{
        name:"HxH",
        angi:148,     
        uzsen:true
    },
    anime3:{
        name:"One punch man",
        angi:30,     
        uzsen:false
    },
    anime4:{
        name:"vanland saga",
        angi:25,     
        uzsen:true
    },
    anime5:{
        name:"solo levling",
        angi:7,     
        uzsen:false
    }
}
for(key in animeSite){
    // console.log(animeSite[key].name);
    // console.log(animeSite[key].angi);
    if(animeSite[key].uzsen==false && animeSite[key].angi<100){
        console.log(animeSite[key].name);
    
    }

}
var kompan ={
    ajilchan1:{
        name:"dorj",
        age:27,
        phone:99121415,
        gender:"female",
        gmail:"dorj@gmail.com",
    },
    ajilchan2:{
        name:"bataa",
        age:27,
        phone:86060259,
        gender:"male",
        gmail:"bataa@gmail.com",
    },
    ajilchan3:{
        name:"ireedui",
        age:35,
        phone:75555555,
        gender:"transgender",
        gmail:"ireedui@gmail.com",
    },
    ajilchan4:{
        name:"dulam",
        age:20,
        phone:90121515,
        gender:"male",
        gmail:"dulam@gmail.com",
    },
    ajilchan5:{
        name:"tsetsgee",
        age:30,
        phone:86161312,
        gender:"male",
        gmail:"tsetsgee@gmail.com",
    },
    ajilchan6:{
        name:"enhee",
        age:40,
        phone:80084006,
        gender:"female",
        gmail:"enhee@gmail.com",
    },
    ajilchan7:{
        name:"ariuk",
        age:31,
        phone:96141083,
        gender:"male" ,
        gmail:"ariuk@gmail.com",
    },
    ajilchan8:{
        name:"monhoo",
        age:39,
        phone:70354555,
        gender:"female",
        gmail:"monhoo@gmail.com",
    },
    ajilchan9:{
        name:"tsooj",
        age:26,
        phone:80202525,
        gender:"female",
        gmail:"tsooj@gmail.com",
    },
    ajilchan10:{
        name:"bandihuu",
        age:45,
        phone:94960039,
        gender:"female",
        gmail:"bandihuu@gmail.com",
    }
}
for(key in kompan){
   // console.log(kompan[key].name);
    if(kompan[key].gender=="female" && kompan[key].age>25 ){
        console.log(kompan[key].name)
   }
    if((kompan[key].phone<99000000 && kompan[key].phone>90000000)  || (kompan[key].phone<94000000 && kompan[key].phone>94000000)){
        console.log(kompan[key].phone)
    }
    if(kompan[key].gender=="female" && kompan[key].gender=="male"){
        console.log(kompan[key].gender)
    }
}
