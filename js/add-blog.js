const addPostBtn = document.getElementById("addPostBtn");

addPostBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let formIsValid = true;

    const title = document.getElementById("title");
    const blogImageUrl = document.getElementById("blogImage");
    const category = document.getElementById("category");
    const content = document.querySelector("#editor .ql-editor");

    formIsValid = checkRequiredInput(title);
    formIsValid = checkRequiredInput(blogImageUrl);
    formIsValid = checkRequiredSelectInput(category);
    formIsValid = checkRequiredQuilInput(content);

    if(formIsValid){
        const loggedInUser = JSON.parse(localStorage.getItem("auth"));

        /* Function to create new post */
        const makeNewPost = postdata => {
           
            const newid = generateUniqueId(postdata);
            const curDate = getCurrentDateTime();
            
            const post = [
                ...postdata,
                {
                    id: newid,
                    title: title.value,
                    postImage: blogImageUrl.value,
                    content: content.innerHTML,
                    userId: loggedInUser[0].userId,
                    published: curDate
                }
            ];
            return post;
        }
    
        // Automobile
        if(category.value === "automobile"){
            const autoblog = JSON.parse(localStorage.getItem("autoblog"));
            const newpost = makeNewPost(autoblog);
            window.localStorage.setItem("autoblog", JSON.stringify(newpost));    
        }

        // Finance
        if(category.value === "finance"){
            const finblog = JSON.parse(localStorage.getItem("finblog"));
            const newpost = makeNewPost(finblog);
            window.localStorage.setItem("finblog", JSON.stringify(newpost));    
        }

        // Health
        if(category.value === "health"){
            const healthblog = JSON.parse(localStorage.getItem("healthblog"));
            const newpost = makeNewPost(healthblog);
            window.localStorage.setItem("healthblog", JSON.stringify(newpost));    
        }

        // Travel
        if(category.value === "travel"){
            const travelblog = JSON.parse(localStorage.getItem("travelblog"));
            const newpost = makeNewPost(travelblog);
            window.localStorage.setItem("travelblog", JSON.stringify(newpost));    
        }

        // Technology
        if(category.value === "technology"){
            const technologyblog = JSON.parse(localStorage.getItem("technologyblog"));
            const newpost = makeNewPost(technologyblog);
            window.localStorage.setItem("technologyblog", JSON.stringify(newpost));    
        }


        alert("Post has been added");
        const redirectTo = "/" + category.value + ".html";
        location.replace(redirectTo);

    }
})

