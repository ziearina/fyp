// select all required elements
// filterItem
const filterList = document.querySelector('#filter-list');
// filterImg
const filterProduct = document.querySelectorAll('.products-gallery .col-product');

window.onload = ()=>{ // once window loaded
    filterList.onclick = (selectedItem)=>{ // click on filterList
        if(selectedItem.target.classList.contains("filter")){
            filterList.querySelector(".selected").classList.remove("selected");
            selectedItem.target.classList.add("selected");
            let filterItem = selectedItem.target.getAttribute("data-name");
            filterProduct.forEach((image)=> {
                let filterImages = image.getAttribute("data-name"); // getting image data-name value

                if((filterImages == filterItem) || filterItem == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            
            });
        }
        
    } 

    for (let i = 0; i < filterProduct.length; i++){
        filterProduct[i].setAttribute("onclick", "preview(this)");
    }
} 