# Zendesk Guide Pusher Boilerplate

## What is it?
This repository is a boilerplate project for developing Zendesk Guide themes, with the Zendesk Guide Pusher package. In here is included: the standard Copenhagen theme from Zendesk with templates, css and javascript.

## How to develop locally
* Make sure you have gulp installed
* Run `npm install` to get js dependencies
* Duplicate .env-example and call it .env
* Make sure you have a custom theme, ie. one that is not the default Copenhagen theme, since you will not be able to edit this.
* Log into Zendesk theme editor with chrome devtools open. Go to the network tab and check "preserve log". Now make a change to a file and click save. Find the PUT request to https://yourdomain.zendesk.com/hc/admin/help_centers/{your_help_center_id}. Now grab the Cookie and X-CSRF-Token from the request headers and the "help center id" and "theme id" from the response, and paste them into your .env file. You need to do this everytime you log in, but only the cookie and the csrf token will change.
* From the root of this project run `gulp sass:watch` to watch and compile sass into css and `gulp upload:watch` to watch the template files, javascript and css for changes. 
* Now make your changes to the files inside the /templates folder and gulp will automatically push the code

## Do you have any ideas?
Please let us know by making an issue here on github. Also feel free to contribute to the development, by making a pull request.
