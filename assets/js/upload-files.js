(function() {
    const images_output = document.querySelector('.review-write-window__images');
    const upload_button = document.querySelector(".upload-files__input");
    const imageList = [];
    const dt = new DataTransfer();
    function updateImages() {
        images_output.innerHTML = "";
        imageList.forEach((elem, index) => {
            let name = elem.name;
            let preview = elem.preview;
            let item = document.createElement("li");
            item.classList.add("review-write-window__images-item");
            let close = document.createElement("button");
            close.classList.add("modal-window__close-min");
            close.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.54671 3.545C3.71549 3.37628 3.94436 3.28149 4.18301 3.28149C4.42166 3.28149 4.65054 3.37628 4.81931 3.545L8.00171 6.7274L11.1841 3.545C11.3539 3.38106 11.5812 3.29034 11.8172 3.2924C12.0531 3.29445 12.2789 3.3891 12.4457 3.55597C12.6126 3.72283 12.7073 3.94856 12.7093 4.18454C12.7114 4.42052 12.6207 4.64786 12.4567 4.8176L9.27431 8L12.4567 11.1824C12.6207 11.3521 12.7114 11.5795 12.7093 11.8155C12.7073 12.0514 12.6126 12.2772 12.4457 12.444C12.2789 12.6109 12.0531 12.7056 11.8172 12.7076C11.5812 12.7097 11.3539 12.6189 11.1841 12.455L8.00171 9.2726L4.81931 12.455C4.64957 12.6189 4.42223 12.7097 4.18625 12.7076C3.95027 12.7056 3.72454 12.6109 3.55767 12.444C3.39081 12.2772 3.29615 12.0514 3.2941 11.8155C3.29205 11.5795 3.38277 11.3521 3.54671 11.1824L6.72911 8L3.54671 4.8176C3.37799 4.64883 3.2832 4.41995 3.2832 4.1813C3.2832 3.94265 3.37799 3.71378 3.54671 3.545Z" fill="#CECECE"/>
            </svg>`;
            close.setAttribute("type", "button");
            close.addEventListener("click", () => {
                imageList.splice(index, 1);
                dt.items.clear();
                imageList.forEach((elem) => {
                    dt.items.add(elem.file);
                });
                upload_button.files = dt.files;
                updateImages();
            });
            let image = document.createElement("img");
            image.classList.add("review-write-window__images-item-img");
            image.alt = name;
            image.src = preview;
            item.appendChild(close);
            item.appendChild(image);
            images_output.appendChild(item);
        });

        if (imageList.length !== 0) {
            images_output.style.display = "flex";
        } else {
            images_output.style.display = "none";
        }
    }
    function clearImages(){
        imageList.splice(0, imageList.length);
        dt.items.clear();
        upload_button.files = null;
        updateImages();
    }
    upload_button.addEventListener("change", () => {
        let files = Array.from(upload_button.files);
        files.forEach((file) => { 
            dt.items.add(file)
        })
        let fileList = dt.files
        upload_button.files = fileList;
        if (files.length < 0) {
            return;
        } else {
            for (let i = 0; i < files.length; i++) {
                imageList.push({
                    name: files[i].name,
                    preview: window.URL.createObjectURL(files[i]),
                    file: files[i]
                });
            }
            updateImages();
        }
    });
})();