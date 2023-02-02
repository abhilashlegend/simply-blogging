# simply-blogging
 Blog for the company where people can post articles and customers can benefit from the content.
 
 # Problem Statement
 As the project is progressing, management has asked you to create a blog page for the company website so that newsletters and other informative articles can be posted by experts for the benefit of the customers.

 Check out Live Preview [here](https://simply-blogging.vercel.app/index.html)

 ## Directory Structure

 ```
	simply-blogging
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
	├── README.md
	├── about-us.html
	├── add-blog.html
	├── automobile.html
	├── finance.html
	├── health.html
	├── index.html
	├── profile.html
	├── signin.html
	├── signup.html
	├── technology.html
	└──travel.html
	
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

![image](https://user-images.githubusercontent.com/24253084/216339057-5429bb15-9f62-43cf-9704-785ce4d03577.png)


The home page consists of different section as follows:

The Header Section: The header section is common to all pages and consists of Logo and Navigation.

Carousel: The sliding carousel has 3 slides that rotate every second. 

Trending Section: This section consists of trending posts that displays posts from different News site using API. The news API that’s used for this project is newscatcher. The news catcher API allows on 50 calls per month for free version and hence I have used a fallback that shows posts from local json file if the API don’t work. 

Latest Posts: This is another section that displays the same or different query from newscatcher API. 
The Above section can be replaced by independent API call or getting data from your own server when we have server side implemented. 

NewsLetter: This is dummy news letter subscription form that just alerts the user that your subscribed. Newsletter subscription can be made functional further if we use server side technology. 

Footer: The common footer section that displays across the site that mentions site and designed by developer. 

## About Page

![image](https://user-images.githubusercontent.com/24253084/216343045-61493a45-c6cb-4ee9-be03-76273dedccb1.png)


The about us page consists of dummy text currently that can replaced with the about site / company details. 

## Automobile Blog Page

![image](https://user-images.githubusercontent.com/24253084/216343325-604af292-784b-44c6-9984-6a579e9e871e.png)

The automobile page consists of blog / articles related to automobile. The user can view the full detail of the blog post by clicking on Read button. The articles are displayed currently using javascript objects stored in local storage. Users will be able to add more posts by login and going to Add Blog page. All the data is stored on Browser Local Storage. And hence this shortcoming can be met by using server side technology.

Similarly I have designed different pages for different categories as follows:

## Finance Blog Page

![image](https://user-images.githubusercontent.com/24253084/216343523-df472794-63ac-4779-915b-ffbe71886ad5.png)

## Health Blog Page

![image](https://user-images.githubusercontent.com/24253084/216343873-3bb11b82-107e-447a-82c6-9387ae093b3c.png)

## Travel Blog Page

![image](https://user-images.githubusercontent.com/24253084/216344002-ffc17a0e-5d31-4e2a-89f9-bc2837eddf95.png)

## Technology Blog Page

![image](https://user-images.githubusercontent.com/24253084/216344302-6696e7f7-fa9d-43f2-a928-caceafb050dc.png)

## Sign-in or Login Page

![image](https://user-images.githubusercontent.com/24253084/216344539-571ec8ff-7921-4946-85d7-2642eb0da7c7.png)

The Login page is used to login to the website to make the users add blog post in their machine. Users can Sign-up and Login or use default user with username admin and password 123456789 which is stored in Local Storage of the browser. 

## Sign-up Page

![image](https://user-images.githubusercontent.com/24253084/216344692-316354b3-0b97-49dc-a05f-1d774431980b.png)

The signup page consists of form with details like fullname, email, username and password. The form contains the validation functions available in the javascript file. Once the validation is ok the user data is stored in Browser Local Storage. 
Once the user is logged in He/she will be taken to Home page and user would be able to see new drop down menu called Account. 

![image](https://user-images.githubusercontent.com/24253084/216345031-acb7fc4c-1dce-47b8-9447-74770c3c628c.png)

The account menu consists of Profile, Add Blog and Logout menu. 

## Profile Page

![image](https://user-images.githubusercontent.com/24253084/216345240-a367e5a7-9758-456c-a32f-45f503e89b73.png)

The profile menu consists of user details like fullname, username and email which are readonly. 

## Add Blog Page

![image](https://user-images.githubusercontent.com/24253084/216345450-abe0cd9f-8fa7-4186-827f-d0ffe98b6ed4.png)

The add blog page consists of form to add new blog post based on category. The form consists of required validation. I have used Quil rich text editor to Add HTML text formatting. Caution: Please do not copy directly from webpage and paste instead add the formatting manually to get the content in blog pages. All the posts is added to localstorage that is visible only to client user. 

