let addBtn=document.getElementById("+add");
let addForm=document.getElementById("Add");
let Form=document.getElementById("form");
let edit=document.getElementById('edit');
let deleteBtn=document.getElementById('delete');
let editInx;
let addcontact=new Array();

addcontact[0]=
{
    NAME      :'Chandermani Arora',
    EMAIL     : 'chandermani@technovert.com',
    MOBILE    :92929292922,
    LANDLINE  :"040 30 1231211",
    ADDRESS   :"123 now here Some street Madhapur, Hyderabad 500033"
};

addcontact[1]=
{
    NAME      :'Sashi Pagadala',
    EMAIL     : 'vijay@technovert.com',
    MOBILE    :92929292922,
    LANDLINE  :"040 30 1231211",
    ADDRESS   :"123 now here Some street Madhapur, Hyderabad 500033"
};
addcontact[2]=
{
    NAME      :'Praveen Battula',
    EMAIL     : 'vijay@technovert.com',
    MOBILE    :92929292922,
    LANDLINE  :"040 30 1231211",
    ADDRESS   :"123 now here Some street Madhapur, Hyderabad 500033"
}
addcontact[3]=
{
    NAME      :'Vijay Yalamanchili',
    EMAIL     : 'vijay@technovert.com',
    MOBILE    :92929292922,
    LANDLINE  :"040 30 1231211",
    ADDRESS   :"123 now here Some street Madhapur, Hyderabad 500033"
};


let addBtnfun=(addcontact)=>
    {   
        let ed= document.querySelectorAll('.ed');
                  for(let i=0;i<2;i++)
                    {
                        ed[i].style.display='none';
                    }
        document.getElementsByClassName('section3')[0].style.display='none';
        document.getElementById("Name").value=null;
        document.getElementById("Email").value=null;
        document.getElementById("Mobile").value=null;
        document.getElementById("Landline").value=null;
        document.getElementById("Address").value=null;
        Form.style.display="block";
        let disBloc=Form.style.display;
       Form.focus();
      

    }  ;
    
addBtn.addEventListener('click',addBtnfun);  

addForm.addEventListener('click',()=>
    {
          addbook(addcontact);
       document.getElementsByClassName('section3')[0].style.display='grid';
       Form.style.display="none";
          
    })
edit.addEventListener('click',()=>
{   document.getElementsByClassName('section3')[0].style.display='none';
    Form.style.display="block";
    console.log(editInx);
       Form.focus();
       let namep=addcontact[editInx].NAME;
       let emailpara=addcontact[editInx].EMAIL;
       let mobilep= addcontact[editInx].MOBILE;
       let landlinep= addcontact[editInx].LANDLINE;
       let addressp=addcontact[editInx].ADDRESS;
       
       document.getElementById("Name").setAttribute('value',namep)== document.getElementById("Name").value;
       document.getElementById("Email").setAttribute('value',emailpara)== document.getElementById("Email").value;
       document.getElementById("Mobile").setAttribute('value',mobilep)==document.getElementById("Mobile").value;
       document.getElementById("Landline").setAttribute('value',landlinep)== document.getElementById("Landline").value;
       document.getElementById("Address").setAttribute('value',addcontact[editInx].ADDRESS)== document.getElementById("Address").value;
       console.log(addcontact[editInx].ADDRESS);
    //    document.getElementById("Address").setAttribute('value',addcontact[editInx].ADDRESS)=document.getElementById("Address").value;
       addForm.addEventListener('click',()=>
        {
    //        document.getElementsByClassName('section3')[0].style.display='grid';
    //        Form.style.display="none";
              
    
        let person={
            NAME:null,
            EMAIL:null,
            MOBILE:null,
            LANDLINE:null,
            ADDRESS:null
        };
       let Name=document.getElementById("Name").value;
        let Email=document.getElementById("Email").value;
        let Mobile=document.getElementById("Mobile").value;
        let Landline=document.getElementById("Landline").value;
        let Address=document.getElementById("Address").value;
        person.NAME=Name;
       person.EMAIL=Email;
       person.MOBILE=Mobile;
       person.LANDLINE=Landline;
       person.ADDRESS=Address;
       console.dir(person);
       addcontact.splice(editInx,1);
       let list=document.getElementsByClassName('contactlist')[0];
        list.innerHTML='';
        display();

        displayDetails(addcontact);

})
});

 let deleteContact=()=>
    {
        let index=editInx;
        console.log(index);
        console.log(addcontact.length);
        let list=document.getElementsByClassName('contactlist')[0];
        list.innerHTML='';
        addcontact.splice(index,1);
        document.getElementsByClassName('section3')[0].firstElementChild.innerHTML='';
        
        console.log(addcontact.length);
      display();
            
    displayDetails(addcontact);
            
        
    };
    
deleteBtn.addEventListener('click',deleteContact);






let display=()=>
    {    let item;
        let list=document.getElementsByClassName('contactlist')[0];
        for(item=0;item<addcontact.length;item++)
        {
        
            let temp=document.createElement('div');
            let namep=document.createElement('p');
            let emailpara=document.createElement('p');
            let mobilep=document.createElement('p');
            namep.textContent=addcontact[item].NAME;
            emailpara.textContent=addcontact[item].EMAIL;
            mobilep.textContent=addcontact[item].MOBILE;
            temp.append(namep); 
            temp.append(emailpara);
            temp.append(mobilep);
            list.append(temp);
            

        };
       
    }
 
    
        

// let validation=(formpage)=>
// {   
//     var atposition=Email.indexOf("@");  
//     var dotposition=Email.lastIndexOf(".");  

//     if(Name==""||Name=='')
//         {
//             alert("Enter your name.");
            
//             return false;
            
//         }
//         else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
//             {
//                 alert("enter valid email!");
//                 return false;
//             }
//         else if(!(isNaN(Number))||Number<100000000)
//             {
//                 alert("enter valid number!");
//                 return false;   
//             }
//             else if(!(isNaN(Landline))||Landline<1000000000)
//                 {
//                     alert("enter valid Landline!");
//                     return false;
//                 }
//                 else if(Address==""||Address=='')
//                     {
//                         ("enter your address!");
//                         return false;
//                     }
//                     else 
//                     return true;
                

// }

function addbook(addcontact)
{       
       let Name=document.getElementById("Name").value;
        let Email=document.getElementById("Email").value;
        let Mobile=document.getElementById("Mobile").value;
        let Landline=document.getElementById("Landline").value;
        let Address=document.getElementById("Address").value;
        if(Name.trim()===''||Email.trim()===''||Mobile.trim()===''||Landline.trim()===''||Address.trim()==='')
    {   alert('enter full details');
        return false;
    }
        let person=
        {    NAME :Name,
            EMAIL:Email,
            MOBILE  :Mobile,
            LANDLINE    :Landline,
            ADDRESS :Address
            
        };
       addcontact.push(person);
       let item;
       let list=document.getElementsByClassName('contactlist')[0];
       let temp=document.createElement('div');
            let namep=document.createElement('p');
            let emailpara=document.createElement('p');
            let mobilep=document.createElement('p');
            namep.textContent=person.NAME;
            emailpara.textContent=person.EMAIL;
            mobilep.textContent=person.MOBILE;
            temp.append(namep); 
            temp.append(emailpara);
            temp.append(mobilep);
            list.append(temp);


       console.dir(addcontact);
       displayDetails(addcontact);
      
       
}

display(addcontact);

let displayDetails=(addcontact)=>
    {
        document.getElementsByClassName('section3')[0].style.display='grid';
        
        let item;
        let contactBook=document.querySelector('.contactlist');
        let contactDetails=contactBook.children;
        let list=document.getElementsByClassName('section3')[0];
        console.dir(contactDetails);
        for (let item = 0; item < addcontact.length; item++) {
            contactDetails[item].addEventListener('click',()=>
                {   
                  let ed= document.querySelectorAll('.ed');
                  for(let i=0;i<2;i++)
                    {
                        ed[i].style.display='flex';
                    }
    
                    editInx=item;
                    console.log(editInx);
                    
                    let removefirst=document.querySelector('.section3 div');
                    list.removeChild(removefirst);
                    let temp=document.createElement('div');
                    let namep=document.createElement('h1');
                    let emailpara=document.createElement('p');
                    let mobilep=document.createElement('p');
                    let landlinep=document.createElement('p');
                    let address=document.createElement('div');
                    let address1p=document.createElement('div');
                    
                    let websitep=document.createElement('p');
                    namep.textContent=addcontact[item].NAME;
                    emailpara.textContent='Email:'+addcontact[item].EMAIL;
                    mobilep.textContent='Mobile:'+ addcontact[item].MOBILE;
                    landlinep.textContent='Landline:'+ addcontact[item].LANDLINE;
                    address1p.textContent='Address:'+addcontact[item].ADDRESS;;
                    websitep.textContent='Website: http://www.technovert.com';
                   
                    address.append(address1p);
                    
                    temp.append(namep); 
                    temp.append(emailpara);
                    temp.append(mobilep);
                    temp.append(landlinep);
                    temp.append(websitep);
                    temp.append(address);
                    list.prepend(temp);
                     
                
                    

                }
            )
            
        }
    }

    displayDetails(addcontact);
