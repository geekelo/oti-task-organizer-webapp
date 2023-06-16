export default class ShowDeleteBtn {
    constructor(){
        this.threedotsIcon = document.querySelectorAll('.moreIcon');
        this.deleteIcon = document.querySelectorAll('.deleteBtn');
        this.list = document.querySelectorAll('.listItems');
        this.setupListner();
    }


   setupListner() {
    this.threedotsIcon.forEach((each) => each.addEventListener('click', (e) => {
        this.threedotsIcon.forEach((each, index) => {
            if (each === e.target){
                this.deleteIcon[index].style.display = "flex";
                each.style.display = "none";
                this.list[index].style.backgroundColor = "#ece9f1";
            }
        });
    }))
   }
 
}