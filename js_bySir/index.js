/***************
              pattern
	 *****************************************/
		/*for loop */
		
		// for(i=1;i<=no;i++){
		//   for(j=1;j<=no;j++){
		//     document.write(i);
		//   }
		//   document.write("<br>");
		// }

		// for(i=1;i<=no;i++){
		// 	for(j=1;j<=i;j++){
		//     document.write(i);
		//   }
		//   document.write("<br>");
		// }

    /***************
         largest no of given 3 nos
	 *****************************************/

		// let num1=parseInt(prompt ("enter a 1st no"));
		// let num2=parseInt(prompt ("enter a 2nd no"));
		// let num3=parseInt(prompt ("enter a 3rd no"));

		// if(num1>num2)
		// {
		//   if(num1>num3){
		//     document.write(num1+" -1st is larger than others");
		//     }
		//   else{
		//     document.write(num3+" -3rd is larger than others");
		//   }
		// }
		// else
		// {
		// 	 if(num2>num3){
		// 	 document.write(num2+" -2nd is larger than others");
		// 	}
		// 	else  {
		// 	 document.write(num3+" -3rd is larger than others");
		// 	}
		// }
             /***************
         largest no of given 4 nos
	 *****************************************/
        // let num1 = parseInt(prompt("enter the number"));
		// let num2 = parseInt(prompt("enter the number"));
		// let num3 = parseInt(prompt("enter the number"));
		// let num4 = parseInt(prompt("enter the number"));
		// if (num1 > num2) {
		// 	if (num1 > num3) {
		// 		if (num1 > num4) {
		// 			document.write(num1 + " 1st no is larger than others");
		// 		}
		// 		else {
		// 			document.write(num4 + " 4th no is larger than others");
		// 		}
		// 	}
		// 	else {
		// 		if (num3 > num4) {
		// 			document.write("(" + num3 + ")" + " 3rd no is larger than others");
		// 		}
		// 		else {
		// 			document.write("(" + num4 + ")" + " 4th no is larger than others");
		// 		}
		// 	}
		// }
		// else if (num2 > num3) {
		// 	if (num2 > num4) {
		// 		document.write("(" + num2 + ")" + " 2nd no is larger than others");
		// 	}
		// 	else {
		// 		document.write("(" + num4 + ")" + " 4th no is larger than others");
		// 	}

		// }
		// else {
		// 	if (num3 > num4) {
		// 		document.write("(" + num3 + ")" + " 3rd no is larger than others");
		// 	}
		// 	else {
		// 		document.write("(" + num4 + ")" + " 4th no is larger than others");
		// 	}
		// }
            /***************
           Array Methods
	 *****************************************/
		// const a = [1,2,3,4,5,6];
		// const b=[];
		// for(i=0;i<a.length;i++){
		// 	b[i]=a[i];
		// }
		// console.log(b);
        
		// for(i=0;i<a.length;i++){
		// 	function redo (){
		// 		let c= a[i];
		// 		return c;
		// 	}
		// 	b[i]=redo();
		// }
		// console.log(b);

		// let length=parseInt(prompt("Enter a length of a array"));
		// let array=[];
		// for(i=0;i<length;i++){
		// 	let value = parseInt(prompt("enter a value"));
		// 	array[i]=value;
		// 	//array.push(value);
		// }
		// console.log(array);

     /***************
	    Array of Array with conditions
	 *****************************************/
		// var a=[];
		// let x=parseInt(prompt("enter  main array length"));
		// 	var b ;
		// 	for(i=0;i<x;i++){
		// 	let y =parseInt(prompt("enter  sub array length"));
		// 	doit(y);
		//     } 
		// 	console.log(a);


			/*****function*****/

            // function doit(z){
			// 	if(z==0){
			// 		b=parseInt(prompt("enter a value"));
			// 		a[i]=b;
			// 		}
			// 	else{
			// 		b=[];
			// 		for(j=0;j<z;j++){
			// 				b[j]=parseInt(prompt("enter  values"));
			// 			}
			// 		a[i]=b;
			// 	}
			// 	return a;
			// 	}
				
		   
	    
       /***************
	    objects in 
	 *****************************************/
		// let students=[
		// 	{
		// 	name:"guru",
		// 	age:25,
		// 	degree:"civil"
		//     },
		// 	{
		// 	name:"vel",
		// 	age:26,
		// 	degree:"mech"	
		// 	},
		// 	{
		//     name:"raji",
		// 	age:21,
		// 	degree:"cse"
		// 	}]

		//  students.forEach(e=>{
		// 	console.log("student name:"+e.name+" age : "+e.age+ " degree: "+e.degree);
		//  });

        /***************
	    console by functions
	 *****************************************/
	    // function print(a){
		// 	console.log(a);
		// }

		// let students=[
		// 	{
		// 	name:"guru",
		// 	age:25,
		// 	degree:"civil"
		//     },
		// 	{
		// 	name:"vel",
		// 	age:26,
		// 	degree:"mech"	
		// 	},
		// 	{
		//     name:"raji",
		// 	age:21,
		// 	degree:"cse"
		// 	}]
        //     let f=students[0].name;
		//     print(f);
        
		  /***************
	      creating Objects by user
	 *****************************************/
	// 	function createObject(nos){
	// 		for(i=0;i<nos;i++){
	// 			var object={Name:"",Age:"",Dept:""};
	// 			let Name=prompt("Enter your name");
	// 			let Age=parseInt(prompt("Enter your age"));
	// 			let Dept=prompt("Qualification");
	// 			object.Name=Name;
	// 			object.Age=Age;
	// 			object.Dept=Dept;
	// 			Array[i]=object;
	// 		}
	// 		console.log(Array);
	// 	}
		
	//    let length = parseInt(prompt("enter a no of object"));
	//    let Array=[];
	//    createObject(length);

	     /***************
		  Array create and read by index
	 *****************************************/


    //  function doit(a,z){
	// 			if(z==0){
	// 				b=parseInt(prompt("enter a value"));
	// 				a[i]=b;
	// 				}
	// 			else{
	// 				b=[];
	// 				for(j=0;j<z;j++){
	// 						b[j]=parseInt(prompt("enter  values"));
	// 					}
	// 				a[i]=b;
	// 			}
	// 		 	}


	// 			function read(a,main){	
	// 			if(a.length-1 < main){
	// 				alert("enter vaild index");
				
	// 			}
	// 			else{
	// 				if(a[main]!=[]){
	// 					console.log(a[main]);
	// 				}
	// 				else{
	// 				var sub=parseInt(prompt("enter element index"));
	// 			    console.log(a[main][sub]);
	// 				}
				  
	// 			}
	// 	    }

	// 		function updates(a,main){
				
	// 			if(a.length-1 < main){
	// 				alert("enter vaild index");
				
	// 			}
	// 			else{

    //                 var sub=parseInt(prompt("enter element index"));
	// 			    console.log(a[main][sub]);
	// 			}
    //             var neww=prompt("enter a new value");
	// 			a[main][sub]=neww;
	// 			console.log(a);
	// 		}

	// 	function deleteElement(a,main){

	// 		if(a.length-1 < main){

	// 				alert("enter vaild index");
				
	// 			}
	// 			else{

    //                 var sub=parseInt(prompt("enter delet element index"));
	// 				for(i=0;i<=a.length-1;i++){
	// 					if (a[main][i]==a[main][sub]){
	// 						for(j=sub;j<a.length-1;j++){

	// 							a[main][j]=a[main][++j];
								
	// 						}
	// 					}
	// 					else{

	// 					}
	// 				}
				    
	// 			}
	// 	}


	// 	var a=[];
	// 	let x=parseInt(prompt("enter  main array length"));
	// 		var b ;
	// 		for(i=0;i<x;i++){
	// 		let y =parseInt(prompt("enter  sub array length"));

	// 		doit(a,y);
	// 	    } 
	// 		console.log(a);	
    //     var main=parseInt(prompt("enter array index"));
	// 	   deleteElement(a,main);
		  	
		//  updates(a,main);
		 

		 

		

		//  read(a,main);


		 /***************
		  object create and read by index
	 *****************************************/
	
	//  function createObject(Array,nos){
	// 		for(i=0;i<nos;i++){
				// var object={Name:"",Age:"",Dept:""};
	// 			function man (name,age,dept){
	// 				this.Name=name;
	// 				this.Age=age;
	// 				this.Dept=dept;
	// 			}
	// 			let name=prompt("Enter name");
	// 			let age=parseInt(prompt("Enter  age"));
	// 			let dept=prompt("Qualification");
	// 			const students=new man(name,age,dept);
				// object.Name=Name;
				// object.Age=Age;
				// object.Dept=Dept;
	// 			Array[i]=students;
	// 		}
	// 		console.log(Array);
	// 	}
        
	// 	function readObject (Array,w){
	// 		    const ans = new man(name,age,dept);
	// 		    ans= Array[w];
	// 			key=prompt("Enter a key Name/Age/Dept");
	// 		    console.log(ans[key]);
	//    }
		
	//    let length = parseInt(prompt("enter a no of object"));

	//    let Array=[];
	//    createObject(Array,length);

	//    let index=parseInt(prompt("enter the index of array"));
	//     readObject(Array,index);

	    /*********************
	          DOM create element
	    **********************/

//   let get = prompt("enter html element");
//   let get1 = prompt("enter inner element");
//   let get2 = prompt("enter inner element");
//   let text= prompt("content for element");
//   let attribute=prompt("element atrribute");
//   let property=prompt("enter property ");
//   let value=prompt("enter a value");
//   let create = document.createElement(get);
//   let create1=document.createElement(get1);
//   let create2=document.createElement(get2);

//   document.body.appendChild(create);
//   create.appendChild(create1);
//   create.appendChild(create2);
//   create1.innerHTML=text;
//   create.setAttribute(attribute,property+":"+value);

// var getting=document.getElementsByTagName("h2");
// var gett=getting[0];
// getting[0].innerHTML="guru";
// getting[0].style.color="red";

// var input=document.getElementsByTagName("input");
//  console.log(input);
//  input[0].type=prompt("enter type");


/************
  EventListener  
 **********/
//inline la code eluthamal external ah js la event elutha use aguthu
let show = document.getElementById("show");
let text=document.getElementById("text");

 show.addEventListener("click",function(){
    text.setAttribute("type","text");
  })
   


