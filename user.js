const text = [
    {
        "name": "sardar",
        "lname": "nadeem",
        "dep" : '"bcs"',
        "id_num" :7384898,
        "phone":'0790584243',
        "email":"saradr1wadan@gmail.com",
        "photo":"photo",
       
         },
         {
            "name": "sardar",
            "lname": "nadeem",
            "dep" : '"bcs"',
            "id_num" :7384898,
            "phone":'0790584243',
            "email":"saradr1wadan@gmail.com",
            "photo":"photo",
           
             },
             {
                "name": "sardar",
                "lname": "nadeem",
                "dep" : '"bcs"',
                "id_num" :7384898,
                "phone":'0790584243',
                "email":"saradr1wadan@gmail.com",
                "photo":"photo",
               
                 },
                 {
                    "name": "sardar",
                    "lname": "nadeem",
                    "dep" : '"bcs"',
                    "id_num" :7384898,
                    "phone":'0790584243',
                    "email":"saradr1wadan@gmail.com",
                    "photo":"photo",
                   
                     },
]
var new1 = document.querySelector('#data_out');
var out = '';
const arl= text.length;
var i =0;
while(i<arl){
    out+= `
    <tr>
    <td>${text[i].name}</td>
    <td>${text[i].lname}</td>
    <td>${text[i].dep}</td>
    <td>${text[i].id_num}</td>
    <td>${text[i].phone}</td>
    <td>${text[i].email}</td>
    <td>${text[i].photo}</td>
</tr> 
    
`

i++
new1.innerHTML=out;

}


