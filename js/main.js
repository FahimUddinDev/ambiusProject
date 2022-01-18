// navigation bar responsive start
document.querySelector('#navBtn').addEventListener('click',showHideNav);
function showHideNav(){
    let nav = document.querySelector('#navbar');
    if(nav.classList[1]=='clickShow'){
        nav.classList.remove('clickShow');
        document.querySelector('#navBtn').classList.remove('navBtnMove');
        document.querySelector('#cross').classList.add('cross');
        document.querySelector('#add').classList.remove('deActive');
        document.querySelector('#carouselRadio').classList.remove('changeIndex');
        document.querySelector('#changeImage').classList.remove('changeIndex');
    }else{
        nav.classList.add('clickShow');
        document.querySelector('#navBtn').classList.add('navBtnMove');
        document.querySelector('#cross').classList.remove('cross');
        document.querySelector('#add').classList.add('deActive');
        document.querySelector('#carouselRadio').classList.add('changeIndex');
        document.querySelector('#changeImage').classList.add('changeIndex');
    }
}
// navigation bar responsive end 
//navigation button click function start
document.querySelector('#navbar').addEventListener('click',activeProfile);
function activeProfile(e){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    let fullNav = document.getElementById('navbar').children;
    for(let i=0;i<fullNav.length;i++){
    if(fullNav[i].innerText.toLowerCase().replace(/ /g,'')==e.target.innerText.toLowerCase().replace(/ /g,'')){
        if(e.target.tagName==='BUTTON'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active');
            }
        }else if(e.target.tagName==='SPAN'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }else{
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.parentElement.previousElementSibling.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }
    }else if(fullNav[i].innerText.split(' ')[0].split('\n')[0].toLowerCase()==e.target.innerText.toLowerCase()){
        if(e.target.tagName==='BUTTON'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active');
            }
        }else if(e.target.tagName==='SPAN'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }else{
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.parentElement.previousElementSibling.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }
    }
    else if(fullNav[i].innerText!==''){
        try{
            if(e.target.innerText.length<9 &&e.target.innerText.length>0 ){
                document.getElementById(`${document.getElementById('navbar').children[i].innerText.toLowerCase().replace(/ /g,'')}`).classList.remove('active');
            }
        }catch{

        }
    }
    }
    if(e.target.innerText!==''){
        document.querySelector('#navBtn').click();
    }
}
//navigation button click function end
// carousel start 
document.querySelector(`#carouselBtn1`).checked= true;
function radioBtn(){
    let radioBtn1 = document.querySelector('#carouselBtn1'),
    radioBtn2 = document.querySelector('#carouselBtn2'),
    radioBtn3 = document.querySelector('#carouselBtn3'),
    radioBtn4 = document.querySelector('#carouselBtn4'),
    radioBtn5 = document.querySelector('#carouselBtn5');
    if(radioBtn1.checked==true){
        return 1;
    } else if(radioBtn2.checked==true){
        return 2;
    } else if(radioBtn3.checked==true){
        return 3;
    } else if(radioBtn4.checked==true){
        return 4;
    } else if(radioBtn5.checked==true){
        return 5;
    }
}
function moveRadioBtn(){
    if(radioBtn()>4){
        document.querySelector(`#carouselBtn${1}`).checked= true;  
    }else{
        document.querySelector(`#carouselBtn${radioBtn()+1}`).checked= true;
    }
}
let carouselInterval = setInterval(moveRadioBtn,5000);
setInterval(() => {
    imgMargin(radioBtn());
}, 1);
function imgMargin(count){
    let  firstImg= document.querySelector('#carouselImgfirst')
    if(count==1){
        firstImg.style.marginRight='0%';
    }else if(count==2){
        firstImg.style.marginRight='-20%';
    }else if(count==3){
        firstImg.style.marginRight='-40%';
    }else if(count==4){
        firstImg.style.marginRight='-60%';
    }else{
        firstImg.style.marginRight='-80%';
    }
}
function moveLeft(){
    if(radioBtn()==1){
        document.querySelector(`#carouselBtn${5}`).checked= true;
    }else{
        document.querySelector(`#carouselBtn${radioBtn()-1}`).checked= true;
    }
}
function moveRight(){
    if(radioBtn()==5){
        document.querySelector(`#carouselBtn${1}`).checked= true;  
    }else{
        document.querySelector(`#carouselBtn${radioBtn()+1}`).checked= true;
    }
}
document.querySelector('#moveLeft').addEventListener('click',moveLeft);
document.querySelector('#moveRight').addEventListener('click',moveRight);

document.querySelector('#carousel').addEventListener('mouseover',()=>{clearInterval(carouselInterval)});
document.querySelector('#carousel').addEventListener('mouseout',()=>{carouselInterval= setInterval(moveRadioBtn,5000)});
// carousel end 



//project change start
let first = document.getElementById('first-box');
document.getElementById('moveRightp').addEventListener('click',moveRightp);
function moveRightp(){
    let oldMargin = parseInt(document.getElementById('first-box').style.marginLeft);
    let projectWidth = document.getElementById('first-box').offsetWidth;
    let projectDivContent= Math.floor(document.getElementById('projectSlider').offsetWidth/projectWidth);
    let total= Math.floor(document.getElementById('projectSlider').offsetWidth);
    let distence=(total-projectWidth*projectDivContent)/(projectDivContent)
    if(isNaN(oldMargin)){
        oldMargin -=projectWidth+distence;
        first.style.marginLeft=`-${projectWidth+distence}px`
    }else if(oldMargin/projectWidth<`-${document.getElementById('projectSlider').childElementCount-projectDivContent}`){
        first.style.marginLeft=`${0}px`
    }else{
        first.style.marginLeft=`${oldMargin-projectWidth-distence}px` 
    }
    console.log(first.style.marginLeft)
}

document.getElementById('moveLeftp').addEventListener('click',moveLeftp);
function moveLeftp(){
    let oldMargin = parseInt(document.getElementById('first-box').style.marginLeft);
    let projectWidth = document.getElementById('first-box').offsetWidth;
    let projectDivContent= Math.floor(document.getElementById('projectSlider').offsetWidth/projectWidth);
    let total= Math.floor(document.getElementById('projectSlider').offsetWidth);
    let displayProject =document.getElementById('projectSlider').childElementCount;
    let distence=(total-projectWidth*projectDivContent)/(projectDivContent)
    if(isNaN(oldMargin)){
        oldMargin -=(projectWidth+distence)*(displayProject-projectDivContent);
        first.style.marginLeft=`-${(projectWidth+distence)*(displayProject-projectDivContent)}px`
    }else if(oldMargin===0||oldMargin>0){
        first.style.marginLeft=`-${(projectWidth+distence)*(displayProject-projectDivContent)}px`
    }
    else{
        first.style.marginLeft=`${oldMargin+projectWidth+distence}px`
    }
}
//project change end

//customer slider start
let moveTestl = document.getElementById(`customerMoveLeft`)
moveTestl.addEventListener('click',customerLeft);
let moveTestr = document.getElementById(`customerMoveRight`)
moveTestr.addEventListener('click',customerRight);
function customerLeft(){
    let firstCustomer= document.querySelector('#firstCustomer');
    let oldMargin = parseInt(firstCustomer.style.marginLeft);
    let pageWidth = document.querySelector('#customerSlider').offsetWidth;
    let totalWidth = document.querySelector('#customerFull').offsetWidth;
    if(isNaN(oldMargin)){
        firstCustomer.style.marginLeft = `${pageWidth-totalWidth}px`;
    }else if(oldMargin>=0){
        firstCustomer.style.marginLeft = `${pageWidth-totalWidth}px`;
    }else if(-pageWidth<=oldMargin){
        firstCustomer.style.marginLeft ='15px'
    }else{
        firstCustomer.style.marginLeft = `${oldMargin+pageWidth}px`
    }
}
function customerRight(){
    let firstCustomer= document.querySelector('#firstCustomer');
    let oldMargin = parseInt(firstCustomer.style.marginLeft);
    let pageWidth = document.querySelector('#customerSlider').offsetWidth;
    let totalWidth = document.querySelector('#customerFull').offsetWidth;
    if(isNaN(oldMargin)){
        firstCustomer.style.marginLeft = `${-pageWidth}px`;
    }else if(totalWidth<=pageWidth){
        firstCustomer.style.marginLeft =`${parseInt(firstCustomer.style.marginRight)}px`;
    }else if(totalWidth/pageWidth<2){
        firstCustomer.style.marginLeft=`-${(totalWidth-pageWidth)-oldMargin}px`;
    }else{
        firstCustomer.style.marginLeft = `${oldMargin-pageWidth+5}px`;
    }
}
let pageWidth = document.querySelector('#customerSlider').offsetWidth;
let seletcMr =((pageWidth-(Math.floor(pageWidth/140)*100))/Math.floor(pageWidth/140))/2
let selectMrApply = document.getElementsByClassName('customerA')
    for(let i=0;i<selectMrApply.length;i++){
        selectMrApply[i].style.marginLeft =`${Math.floor(seletcMr)}px`
        selectMrApply[i].style.marginRight =`${Math.floor(seletcMr)}px`
    }
//customer slider end 


//product sidebar start
let sideBarOpen = document.querySelector('#productMenu');
sideBarOpen.addEventListener('click',showSidebar);

function showSidebar(e){
    if(e.target.className=='fa fa-bars productSidebarOpen'){
        document.querySelector('#productSidebarOpen').classList.add('deActive')
        document.querySelector('#productMenu').classList.remove('productMenuOpen')
        document.querySelector('#productMenu').classList.add('productMenuShow')
        document.querySelector('#productSideBar').classList.remove('productSideBarHide')
        document.querySelector('#productSidebarClose').classList.add('active')
    }else{
        removeSideBar();
    }
}

function removeSideBar(){
    document.querySelector('#productSidebarOpen').classList.remove('deActive')
        document.querySelector('#productMenu').classList.add('productMenuOpen')
        document.querySelector('#productMenu').classList.remove('productMenuShow')
        document.querySelector('#productSideBar').classList.add('productSideBarHide')
        document.querySelector('#productSidebarClose').classList.remove('active')
}
//product sidebar end

function getCategory(){
    let all =JSON.parse(localStorage.getItem('products'));
    let category = [];
    try{
        for(let i = 0; i<all.length; i++){
            if(category.find(e=>all[i].catagori.toUpperCase()===e)){
            }else{
                category.push(all[i].catagori.toUpperCase());
            }
        }
    }catch{

    }
    return category;
}
function makeCategory(categoryPosition, category,condition){
    for(let i=0;i<category.length;i++){
        let makeLi = document.createElement(condition);
        makeLi.innerText = category[i];
        categoryPosition.appendChild(makeLi)
    }
}
function makeCategoryDiv(categoryPosition, category){
    for(let i=0;i<category.length;i++){
        let makeDiv = document.createElement('div');
        makeDiv.classList.add('categoryCardDiv');
        makeDiv.classList.add('active')
        makeDiv.innerHTML = `<h1>${category[i]}</h1>
                            <div class='categoryCard' id='${category[i]}'></div>`;
        categoryPosition.appendChild(makeDiv)
    }
}
makeCategory(document.querySelector('#catagoriList'),getCategory(),'li');
makeCategory(document.querySelector('#productSubMenu'),getCategory(),'button');
makeCategoryDiv(document.querySelector('#categoryWiseProduct'),getCategory());

//make card
function cardMaker(productInfo){
    try{
        let makeCard = document.createElement('div');
        makeCard.classList.add('productCard');
        makeCard.innerHTML = `<img src="image/homeCard/STSctg.jpg" alt="">
                                <h1>${productInfo.name}</h1>
                                <div class="productInfo">
                                    <p><span>Brand</span> : ${productInfo.brand} <br>
                                        <span>Model</span> : ${productInfo.model} <br>
                                        <span>Origin </span> : ${productInfo.origin} <br>
                                    </p>
                                    <p class="productDes">
                                        <span>Description :</span>
                                        ${productInfo.description}
                                    </p>
                                </div>
                                <div class="productCardBtn">
                                    <button class="showMore">Show More</button>
                                    <button class="catalogueDownload">Catalogue</button>
                                </div>`;
        return makeCard;
    }catch{}
}
const all =JSON.parse(localStorage.getItem('products'));
try{
    for(let i=0;i<all.length;i++){
        document.getElementById(`${all[i].catagori.toUpperCase()}`).appendChild(cardMaker(all[i]))
    }
}catch{

}

//Show more and catalogue button work
function showMore(){
    let showMore = document.getElementsByClassName('showMore')
    for(let i=0; i<showMore.length;i++){
        showMore[i].addEventListener('click',showMoreBtn);
    }
}
showMore();

function showMoreBtn(e){
    if(e.target.innerText==='Show More'){
        e.target.parentElement.previousElementSibling.lastElementChild.classList.add('active');
        e.target.parentElement.parentElement.classList.add('productCardExpand');
        e.target.parentElement.parentElement.scrollIntoView('smooth','center','center');
        e.target.innerText='Less More'
        console.log('mmmm')
    }else{
        e.target.parentElement.previousElementSibling.lastElementChild.classList.remove('active')
        e.target.parentElement.parentElement.classList.remove('productCardExpand');
        e.target.parentElement.parentElement.scrollIntoView('smooth','center','center');
        e.target.innerText='Show More'
    }
}


// product sidebar and product subMenu click function

let productSidebar = document.querySelector('#catagoriList');
productSidebar.addEventListener('click',sidebarWork);
function sidebarWork(e){
    document.getElementById(`searchDiv`).classList.add('deActive');
    let fullList = e.target.parentElement.children
    for(let i=0;i<fullList.length;i++){
        if(e.target.innerText===fullList[i].innerText){
            document.getElementById(`${e.target.innerText}`).parentElement.classList.add('active');
        }else{
            document.getElementById(`${fullList[i].innerText}`).parentElement.classList.remove('active');
        }
    }
}

let productSubNav = document.querySelector(`#productSubMenu`)
productSubNav.addEventListener('click',productSubNavWork);
function productSubNavWork(e){
    let fullList = e.target.parentElement.children
    for(let i=0;i<fullList.length;i++){
        if(e.target.innerText===fullList[i].innerText){
            document.getElementById(`${e.target.innerText}`).parentElement.classList.add('active');
        }else{
            document.getElementById(`${fullList[i].innerText}`).parentElement.classList.remove('active');
        }
    }
    let fullNav = document.getElementById('navbar').children;
    for(let i=0;i<fullNav.length;i++){
    if(fullNav[i].innerText.toLowerCase().replace(/ /g,'')==e.target.innerText.toLowerCase().replace(/ /g,'')){
        if(e.target.tagName==='BUTTON'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active');
            }
        }else if(e.target.tagName==='SPAN'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }else{
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.parentElement.previousElementSibling.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }
    }else if(fullNav[i].innerText.split(' ')[0].split('\n')[0].toLowerCase()==e.target.innerText.toLowerCase()){
        if(e.target.tagName==='BUTTON'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active');
            }
        }else if(e.target.tagName==='SPAN'){
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }else{
            if(e.target.innerText!==''){
                document.querySelector(`#${e.target.parentElement.previousElementSibling.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active')
            }
        }
    }
    else if(fullNav[i].innerText!==''){
        if(document.getElementById('navbar').children[i].innerText.toLowerCase().replace(/ /g,'').length<10){
            document.getElementById(`${document.getElementById('navbar').children[i].innerText.toLowerCase().replace(/ /g,'')}`).classList.remove('active');
        }else{
            document.getElementById(`${document.getElementById('navbar').children[i].firstElementChild.firstElementChild.innerText.toLowerCase().replace(/ /g,'')}`).classList.add('active');

        }
    }
    }
    document.querySelector(`#productSubMenu`).click();
}


// search button function

document.getElementById('searchBtn').addEventListener('click',searchCard);
document.getElementById('searchInput').addEventListener('keyup',searchInput);
function searchInput(e){
    if(e.keyCode ===13){
        searchCard();
    }
}
function searchCard(){
    let nav = document.querySelector('#navbar').children;
    for(let i=0;i<nav.length;i++){
        if(i===1){
            document.getElementById(`${nav[i].innerText.toLowerCase()}`).classList.add('active');
        }
        else{
        try{
            document.getElementById(`${nav[i].innerText.toLowerCase().replace(/ /g,'')}`).classList.remove('active');
        }catch{}
        }
    }
    let search = document.getElementById('searchInput').value.toLowerCase();
    document.getElementById(`searchDiv`).innerHTML = '<h1>Search Result</h1>';
    document.getElementById(`searchDiv`).classList.remove('deActive');
    try{
        for(let i=0;i<all.length;i++){
            if(all[i].keyword.find(e=>search==e)){
                document.getElementById(`searchDiv`).appendChild(cardMaker(all[i]));
            }
        }
    }catch{}
    if(document.getElementById(`searchDiv`).childElementCount<2){
        let searchResult = document.createElement('h4');
        searchResult.id='searchResult';
        searchResult.innerText =`Sorry There are nothing.....`
        document.getElementById(`searchDiv`).appendChild(searchResult);
    }
    document.getElementById('searchInput').value ='';
    showMore();
    document.querySelector('#navBtn').click();
}

// get best of us 

let bestOfUsCount=[];
try{
    for(let i=0;bestOfUsCount.length<10;i++){
        if(bestOfUsCount.length<all.length){
            let number =Math.round(Math.random()*all.length);
            if(number===all.length){
                number-=1;
            }
            if(bestOfUsCount===[]){
                bestOfUsCount.push(number);
            }else if(bestOfUsCount.find(e=>e==number)){
                
            }else{
                bestOfUsCount.push(number);
            }
        }else{
            break;
        }
    }
    for(let i=0; i<bestOfUsCount.length;i++){
        document.getElementById('bestOfUs').appendChild(cardMaker(all[bestOfUsCount[i]]));
    }
}catch{}



// email send
document.getElementById('mailBtn').addEventListener('click', sendMail);
function sendMail(){
    document.getElementById('emailFull').classList.add('active');
}

document.getElementById('closeMessage').addEventListener('click', closeMessage);
function closeMessage(){
    document.getElementById('emailFull').classList.remove('active');
}