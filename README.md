# CongressApp
Repository for my academic project "CongressApp"

This project is done for the academic purpose for the course CSCI 571.
Also, I have improved the codes to AngularJS from Javascript afterwards.


The application that I have created is able to view the current congress members’ informations and their inovolved subjects such as bills or legislators. Data was gotten from the congress API powered by Sunlight foundation.

My work mainly consists of three parts. Server, web client and android. 
First, server side code(index.php) respond to requests from script or android app and retrieve data from API and passes it to requester. 
Next, web client side codes(script.js, style.css, main.html, and rest of js files) render the data from server and present it to users.
Finally, android codes supports the same features but with better performance with web application to mobile users.

I worked closely to give pleasant both web and mobile experience for users which resulted adopting browser compatibility or responsive web design by bootstrap. Tests were done with different browsers, window sizes and mobile devices.


* Features of CongressApp
1. Search/Sort
  The navigation bar gives 4 pages. Legislator, Bills, Committees and Favorites. You can choose one of the pages to get the informaion that you are looking for. Each page gives multiple ways to filter and sort to get desired results. For example, you can narrow the result down by certain state-California. Also, search pages have pagination to give instant result to users.

2. Various information
  This application gives not only text-based information but also photos, previewd pdf, progress bars and links to social media that congress members have or involved with. In this way users can get the information that they want with eye-catching and not-boring presentation.

3. Favorite
  you can favoritize items by category(Legislators, Bills and Committees) and review it later. Of course, you can unfavoritize them whenever you want. 


* If you find problem finding related codes look out below links
server and web client: https://github.com/hoekyoungkim/CongressApp/tree/master/server_code
Java codes realted to android app: https://github.com/hoekyoungkim/CongressApp/tree/master/android_code/Congress_repack/app/src/main/java/com/hw9/assignment/baymax/congress

