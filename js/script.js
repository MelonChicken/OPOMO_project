

const list= document.getElementById('list');

function showList(val) {
    list.innerHTML='';
    const res = 
}



//검색기능
const searchInput = document.getElementById('search');
const searchBtn= document.getElementById('searchBtn');

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const val= searchInput.value;
    console.log(val);
    showList(val);
})