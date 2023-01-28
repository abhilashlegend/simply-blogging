

  /* Function to trim content */
  const truncateContent = (content, len) => {
    return content.substr(0, len - 1) + (content.length > len ? '&hellip;' : '');
  }

  /* Function that displays Blog in Blog Index Page */
  const displayBlog = (blogdata) => {
    const blogContainer = document.getElementById("blog");

    let output = '';
   
    blogdata.forEach((blog) => {
        output += `
        <div class="col-lg-4 col-md-6 mt-5">
            <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="${blog.postImage}" class="img-fluid" />
            <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
            </div>
            <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">
                ${truncateContent(blog.content, 200)}
            </p>
            <a href="#!" class="btn primary-btn" data-bs-toggle="modal" data-bs-target="#blogDetailModal" data-title="${blog.title}" data-content="${blog.content}" data-img="${blog.postImage}">Read</a>
            </div>
        </div>
      </div>
        `;  
    })
   
    blogContainer.innerHTML = output;
}

// Logout user
const logOut = () => {
  const clearLoginData = [
    {
        loggedIn: false,
        username: "",
        fullname: ""
    }
];
window.localStorage.setItem("auth", JSON.stringify(clearLoginData));
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", (e) => {
  logOut();
  location.replace("/index.html");
});


// Check user authorization
(() => {
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  const accMenu = document.getElementById("account-menu");
  const signinMenu = document.getElementById("signin-menu");
  const signupMenu = document.getElementById("signup-menu");
  auth.forEach(data => {
    
    if(data.loggedIn == true){
      console.log(true);
      
      accMenu.style.display = "block";
      signinMenu.style.display = "none";
      signupMenu.style.display = "none";
    } else {
      accMenu.style.display = "none";
      signinMenu.style.display = "block";
      signupMenu.style.display = "block";
      console.log(false);
    }
  })
})();

document.getElementById('blogDetailModal').addEventListener('show.bs.modal', (e) => {
  document.getElementById("modal-title").innerHTML = e.relatedTarget.dataset.title;
  document.getElementById("modal-image").setAttribute("src", e.relatedTarget.dataset["img"]);
  document.getElementById("modal-content").innerHTML = e.relatedTarget.dataset.content;
});