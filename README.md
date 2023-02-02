# simply-blogging
 Blog for the company where people can post articles and customers can benefit from the content.
 
 # Problem Statement
 As the project is progressing, management has asked you to create a blog page for the company website so that newsletters and other informative articles can be posted by experts for the benefit of the customers.

 Check out Live Preview [here](https://simply-blogging.vercel.app/index.html)

 ## Directory Structure

 ```
	simply-blogging
	├── README.md
	├── about-us.html
	├── add-blog.html
	├──automobile.html
	├──finance.html
	├──health.html
	├──index.html
	├──profile.html
	├──signin.html
	├──signup.html
	├──technology.html
	├──travel.html
	├── css
	│   ├── bootstrap.min.css
	│   ├── bootstrap.min.css.map
	│   └── style.css
	├── images
	│   ├── automobile
	│   ├── finance
	|   ├── health
	│   ├── technology
	│   └── travel
	├── js
	│   ├── add-blog.js
	│   ├── app.js
	|   ├── automobile.js
	|   ├── bootstrap.bundle.min.js
	|   ├── bootstrap.bundle.min.js.map
	|   ├── finance.js
	|   ├── health.js
	|   ├── jquery.js
	|   ├── news.json
	|   ├── profile.js
	|   ├── technology.js
	|   ├── travel.js
	│   └── users.js
	|
	└── src
		├── App.css
		├── App.js
		├── App.test.js
		├── index.css
		├── index.js
		├── logo.svg
		└── serviceWorker.js
		└── setupTests.js
```

## Technology Used

* Visual Studio Code
* HTML / CSS
* JavaScript
* Bootstrap 5 
* Quil Rich Text Editor
* NewsCatcher API
* LocalStorage (to store data on client browser)
* PhotoShop
 
## About Simply-Blogging

Simply Blogging is a static blogging website template that can give you the feeling of being dynamic website. The website is developed for the blogging community where people can view various blog articles related to different categories like automobile, finance, health, travel and technology. The users can register and sign in to the website and add articles of their interests. 

## Home Page

The home page consists of different section as follows:

The Header Section: The header section is common to all pages and consists of Logo and Navigation.

Carousel: The sliding carousel has 3 slides that rotate every second. 

Trending Section: This section consists of trending posts that displays posts from different News site using API. The news API that’s used for this project is newscatcher. The news catcher API allows on 50 calls per month for free version and hence I have used a fallback that shows posts from local json file if the API don’t work. 

Latest Posts: This is another section that displays the same or different query from newscatcher API. 
The Above section can be replaced by independent API call or getting data from your own server when we have server side implemented. 

NewsLetter: This is dummy news letter subscription form that just alerts the user that your subscribed. Newsletter subscription can be made functional further if we use server side technology. 

Footer: The common footer section that displays across the site that mentions site and designed by developer. 
