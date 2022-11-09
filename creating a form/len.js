< input type="file" id="image_input" accept="image/png , image/jpg">
    <div id="display_image"></div>
    const image_input = document.query selector("#image_input#");
    var uploaded_image="" ;

     image_input.addEventListener("change" , function(){
        constreader=new FileReader();
        reader.addEventListener("load" , () => {
             uploaded_image = reader.result ;
             document.querySelector("display_image").style.backgroundImage = 'url'($(uploaded_image))

        })
        reader.readAsDataURL(this.file[0]);

        
    })
