
// get input

class Product{
    constructor(name, catagori,brand,model,origin,description,price,keyword,image){
        this.name = name;
        this.catagori = catagori;
        this.brand = brand;
        this.model = model;
        this.origin = origin;
        this.description = description;
        this.price = price;
        this.keyword =keyword;
        this.image = image;
    };
};
document.querySelector('#from').addEventListener('submit',productSubmit);
function productSubmit(e){
    let name = document.querySelector('#name').value,
     catagori = document.querySelector('#catagori').value,
     brand = document.querySelector('#brand').value,
     model = document.querySelector('#model').value,
     origin = document.querySelector('#origin').value,
     description = document.querySelector('#description').value,
     price = document.querySelector('#price').value,
     keyword = document.querySelector('#keyword').value.toLowerCase().split(';'),
     image = document.getElementById('image').files;
    let products =new Product(name, catagori,brand,model,origin,description,price,keyword,image);
    if(name ===''){
        document.querySelector('#name').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(catagori ===''){
        document.querySelector('#catagori').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(brand ===''){
        document.querySelector('#brand').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(model ===''){
        document.querySelector('#model').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(origin ===''){
        document.querySelector('#origin').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(description ===''){
        document.querySelector('#description').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(price ===''){
        document.querySelector('#price').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(keyword ===''){
        document.querySelector('#keyword').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else if(image ===''){
        document.querySelector('#image').style.border = '2px solid red';
        UI.note('Please Check all field is fill correctly','error')
    }else{
        Storage.setFile(products);
        imageSave();
        UI.note('Product update successful','successful')
        clearfield()
    }
     e.preventDefault()
}

function clearfield(){
    document.querySelector('#name').value='';
    document.querySelector('#brand').value='';
    document.querySelector('#model').value='';
    document.querySelector('#origin').value='';
    document.querySelector('#description').value='';
    document.querySelector('#price').value='';
    document.querySelector('#keyword').value='';
    document.querySelector('#image').value='';
    document.getElementById('uplodeImg').src='#'
}

class Storage{
    static getFile(){
        let products;
        if(localStorage.getItem('products')===null){
            products=[];
        }else{
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    };
    static setFile(product){
        let products = Storage.getFile();
        products.push(product);
        localStorage.setItem('products',JSON.stringify(products))
    }
};

class UI{
    static note(massage,condition){
        let note = document.querySelector('#note');
        note.textContent = massage;
        note.classList.add(condition);
        setTimeout(()=>{
            note.classList.remove(condition);
        },3000)

    }
}
function imageSave(){
    image = document.getElementById('image').files;
     const reader = new FileReader();
     reader.addEventListener('load', ()=>{
         document.getElementById('uplodeImg').src = `${reader.result}`
        let images;
        if(localStorage.getItem('images')===null){
            images=[];
        }else{
            let image =localStorage.getItem('images');
            images = JSON.parse(image);
        }
        images.push(reader.result);
        localStorage.setItem('images',JSON.stringify(images));
    });
     reader.readAsDataURL(image[0]);
  }
document.getElementById('image').addEventListener('change',()=>{
    let imageView = document.getElementById('image').files;
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        document.getElementById('uplodeImg').src = `${reader.result}`
   });
    reader.readAsDataURL(imageView[0]);
})
  