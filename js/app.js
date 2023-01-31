

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

logoutBtn?.addEventListener("click", (e) => {
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
      accMenu.style.display = "block";
      signinMenu.style.display = "none";
      signupMenu.style.display = "none";
    } else {
      accMenu.style.display = "none";
      signinMenu.style.display = "block";
      signupMenu.style.display = "block";
    }
  })
})();

document.getElementById('blogDetailModal')?.addEventListener('show.bs.modal', (e) => {
  document.getElementById("modal-title").innerHTML = e.relatedTarget.dataset.title;
  document.getElementById("modal-image").setAttribute("src", e.relatedTarget.dataset["img"]);
  document.getElementById("modal-content").innerHTML = e.relatedTarget.dataset.content;
});

/* Form Validation function to check required */
function checkRequiredInput(ele) {
  if(ele.value === ""){
    ele.nextElementSibling.style.display = "block";
    return false;
  }
  ele.nextElementSibling.style.display = "none";
  return true;
}

/* Email Validation function */
function checkEmailInput(ele) {
  const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(ele.value.trim()) && ele.value !== ""){
      ele.nextElementSibling.style.display = "block";
        return false;
    }
    ele.nextElementSibling.style.display = "none";
    return true;
}

/* Confirm Password validator */
function checkConfirmPassword(passwordInput, confirmPasswordInput){
  if(confirmPasswordInput.value !== passwordInput.value){
    confirmPasswordInput.nextElementSibling.style.display = "block";
    return false;
  }
  confirmPasswordInput.nextElementSibling.style.display = "none";
  return true;
}


/* Function that generates unique id */
function generateUniqueId(obj) {
  let newId = Math.floor(Math.random() * 1000000);
  let isUnique = obj.every(idObj => idObj.id !== newId);
  if (isUnique) {
    return newId;
  } else {
    return generateUniqueId(obj);
  }
}

/* Function get formated date - Month Day, Year */
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;
  const dt = new Date(year + '-' + month + '-' + day).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric'});
  return dt;
}

/* Function that loads posts in Latest Posts section in home page */
function LoadRecentNews() {
  
  const url = `https://api.newscatcherapi.com/v2/search?q=*&countries=IN&page_size=10`;
  
  const xhttp = new XMLHttpRequest();
xhttp.onload = () => {
  
  if (xhttp.status === 200) {
    const newsData = JSON.parse(xhttp.responseText);
    const articles = newsData.articles;
    let content = '';
    const newsPostBlock = document.querySelector(".newsPosts");
    for(let i = 0; i < 4; i++){
      if(i == 0){
        const fullColumnElement = document.querySelector(".fullColumnPost");
        let firstPost = `
        <a class="entry-inner" target="_blank" href="${articles[i].link}" title="${articles[i].title}">
        <span class="entry-image-wrap before-mask is-image">
          <span class="entry-image pbt-lazy"  style="background-image:url('${articles[i].media}')"></span>
        </span>
        <div class="entry-header entry-info">
          <span class="entry-category">${articles[i].topic}</span>
          <h2 class="entry-title">${articles[i].title}</h2>
          <div class="entry-meta">
            <span class="entry-author mi">
              <span class="sp">by</span>
              <span class="author-name">${articles[i].author}</span>
            </span>
            <span class="entry-time mi">
              <span class="sp">-</span>
              <time class="published" datetime="2021-07-31T12:22:00.002-07:00">${formatDate(articles[i].published_date)}</time>
            </span>
          </div>
        </div>
      </a>
    </div> 
        `;
        fullColumnElement.innerHTML = firstPost;
      } else{
        content += `
      <div class="block1-item item-${i}">
                        <a title="${articles[i].title}" target="_blank" class="entry-image-wrap sz-1 is-image" href="${articles[i].link}">
                          <span class="entry-image pbt-lazy" style="background-image:url('${articles[i].media}')">
                          </span>
                        </a>
                        <div class="entry-header">
                          <h2 class="entry-title">
                            <a href="${articles[i].link}" title="${articles[i].title}">${articles[i].title}</a>
                          </h2>
                          <div class="entry-meta">
                            <span class="entry-time mi"><time class="published">${formatDate(articles[i].published_date)}</time>
                            </span>
                          </div>
                        </div>
                      </div>
      `;
      }      
    }
    newsPostBlock.innerHTML = content;
  } else {
    console.log("There was a problem with the request.");
  }

}
xhttp.open("GET", url);
xhttp.setRequestHeader("x-api-key", "gB07CQgAPyQUocD0ZgZDggraYo17qm878MZgFRDiJQ0");
xhttp.send();
}
//LoadRecentNews();
setTimeout(LoadRecentNews, 1000); // Used settimeout because of only 1 call per sec to api 

/* Function that loads  Popular posts in Trending Posts section in home page */
function LoadTrendingNews() {

  
  
  const url = `https://api.newscatcherapi.com/v2/search?q=trending&&countries=IN&page_size=10`;
  
  const xhttp = new XMLHttpRequest();
xhttp.onload = () => {
  
  if (xhttp.status === 200) {
    const newsData = JSON.parse(xhttp.responseText);
    const articles = newsData.articles;
    let content = '';
    const trendingPostBlock = document.querySelector(".trending-posts");
    for(let i = 1; i <= 6; i++){
     
        content += `
        <div class="col-sm-4 mb-3">
        <div class="trend-card">
            <div class="trend-no">0${i}</div>
            <div class="trend-cont">
              <div class="trend-author">
                <span class="authorpic"><img src="./images/profile.png" alt="author" class="img-fluid" /></span>
                <span class="trend-authname">Abhilash N</span>                        
              </div>
              <h3 class="trend-title"><a target="_blank" href="${articles[i].link}" title="${articles[i].title}">${articles[i].title}</a></h3>
              <div class="trend-date">${formatDate(articles[i].published_date)}</div>
            </div>
        </div>
      </div>
      `;
    }
    trendingPostBlock.innerHTML = content;
  } else {
    console.log("There was a problem with the request.");
  }

}
xhttp.open("GET", url);
xhttp.setRequestHeader("x-api-key", "gB07CQgAPyQUocD0ZgZDggraYo17qm878MZgFRDiJQ0");
xhttp.send();
}
LoadTrendingNews();
