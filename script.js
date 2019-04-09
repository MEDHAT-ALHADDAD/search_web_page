var addField = document.getElementById('add_field');
var list =document.getElementById('data_table');
var submit_btn = document.getElementById('submit_button')
var checkbox_btn = document.getElementById('checkbox_btn')
console.log(addField)
console.log(list)
console.log(submit_btn)
console.log(checkbox_btn)
var array1 = []

submit_btn.addEventListener('click',function(e){
    if(addField.value == "" ){

    }
    else{
        array1.push(addField.value);
        list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${addField.value}</li>`;
    }
})

var print_btn = document.getElementById('print');
console.log(print_btn)

print_btn.addEventListener('click',function(e){
    if(addField.value == ""){
        for(i=0;i<array1.length;i++){
            list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${array1[i]}</li>`;
        }
    }
    else{
        for(i=0;i<array1.length;i++){
            list.innerHTML = "";
            if(array1[i] == addField.value){
                list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${array1[i]}</li>`;
            }
        } 
    }
})

addField.addEventListener('keyup',function (e) {
    if(e.keyCode == 13){
        if(addField.value == "" ){

        }
        else{
            array1.push(addField.value);
            list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${addField.value}</li>`;
        }
    }
    
})

addField.addEventListener('input',function(e){
    if(checkbox_btn.checked){
        list.innerHTML = "";
        if(addField.value == ""){
            for(i=0;i<array1.length;i++){
                list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${array1[i]}</li>`;
            }
        }
        else{
            var str = String(addField.value)
            for(i=0;i<array1.length;i++){
                var bo =false
                var strcom = String(array1[i])
                for(j=0; j< str.length ; j++){
                    if(strcom.includes(str)){
                        bo=true;
                        break;
                    }
                }
                if(bo==true){
                    list.innerHTML += `<li type="button" class="list-group-item list-group-item-action">${strcom}</li>`;
                }
            } 
        }
    }
})

var delete_btn = document.getElementById('delete');

delete_btn.addEventListener('click',function (e) {
    list.innerHTML = "";
    list =[];
    addField.value = "";
})

checkbox_btn.addEventListener('change',function (e) {
    addField.focus();
    addField.value = "";
})