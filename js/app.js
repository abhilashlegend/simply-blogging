(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

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
            <a href="#!" class="btn primary-btn">Read</a>
            </div>
        </div>
      </div>
        `;  
    })
   
    blogContainer.innerHTML = output;

}