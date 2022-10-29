export function showLoader(color = "primary") {
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    loader.innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center fixed-top" style="background-color: #ffffff5e;">
           <div class="spinner-border text-${color}" role="status">
               <span class="visually-hidden">Loading...</span>
           </div>
       </div>
`;
    document.body.append(loaderDiv);
}
export function removeLoader() {
    const loader = document.querySelector('.loader');
    loader.remove();
}

export function progressShow(color='primary'){
    const div = document.createElement("div");
    div.classList.add("top-progress");
    div.innerHTML = `<div class="fixed-top">
        <div class="progress" style="height: 5px">
          <div class="progress-bar bg-${color} progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
    </div>`;
    document.body.append(div)

}
export function progressRemove(){
    const progress = document.querySelector('.top-progress');
    progress.remove()
}