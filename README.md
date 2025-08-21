- When ever making the api call we must enable the {withCredentials:true} if it not not cookies are not stored.

# Deployment
# Frontend
- SignUp onAWS
- Launch instance
- cp /mnt/c/Users/Dell/Downloads/developerCommunity-secret.pem ~/
- cd /mnt/c/Users/Dell/Downloads
- chmod 400 ~/developerCommunity-secret.pem
- chmod 400 <secret>.pem -> It store our secrete key
- Connect a machine using ssh command -> ssh -i ~/developerCommunity-secret.pem ubuntu@ec2-65-0-170-122.ap-south-1.compute.amazonaws.com
- Install node version - current laptop version in locall
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20.15.0

 - Upload the all the project code to our machine
 - first i have clone the frontend project
 git clone https://github.com/PratyakshaAmbig/Developer-community-web.git

 - second i have clone the backend project
 https://github.com/PratyakshaAmbig/DevTinder.git

 Step for Forntend
 ls
 cd Developer-community-web 
  - npm install -> Install the dependencies
  - npm run build
  - sudo apt update -> update the system
  - sudo apt install nginx -> install the nginx in our system
   INSTALL THE nginx -> Because it will give an http server
  - nginx -> It will create a http server and we have to deploy our application into that server
  - Once the install the nginx i have to start the nginx using following command
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) folder to nginx http server and it is located in path /var/www/html/
  the below command is no need to use that command is basicall check the what are the file available in that path
  cd /var/www/html
  ls
  suppose i am enter this command /var/www/html it we are in the that path , but i want to copy the code from dist folder because i want go back to cd ~ -> it will take you to the home page 
  cd ~
  ls 
  cd Developer-community-web
  we have to copy the code from dist folder and add it to the this path -> /var/www/html/
   Now we are in /Developer-community-web$ -> this path 

   - now we have to copy the code using below command

   sudo scp -r dist/* /var/www/html/
   sudo -> To get the root level permission 
   scp -> Copy command
   -r -> This is for recursiveness it means all the files and folder i want to copy 
   - dist/* -> copy all the files and folder in side the dist folder
   - /var/www/html  -> In this location i want to place it


   after executing this command -> sudo scp -r dist/* /var/www/html/  -> All the code will copy and paste it in the /var/www/html path

   we can check the result
   /var/www/html
   ls
   output ->  assets  index.html  index.nginx-debian.html  vite.svg

   then go back instance 
   cd ~ or cd

   - Enable port :80 of your Instance

   # Backend
   - Allowed EC2 instance public IP on mongoDB altas -> Network Access
   - Install the PM2 -> PM2 is a daemon process manager that will help you manage and keep your application online 24/7
   - npm install pm2 -g
   - After Installation start the server using below command
   -  pm2 start npm --name "devtinder-backend" -- start
   - Suppose our server is not started after runing above command and now we can check the logs using below command
   - pm2 logs
   - pm2 list -> Check the available applications
   - pm2 stop <npm> or <name of the application> -> Stop the backend
   - pm2 delete <npm> or <name of the application> -> It will delete the application
   - while runing our backend application we can give the name of the our application
   - pm2 start npm --name "devtinder-backend" -- start

   Frontend = http://52.66.255.172/
   Backend  = http://52.66.255.172:7777/

   Domain Name = devcommunity.in - http://52.66.255.172/

   Frontend = devcommunity.in

   Backend  = devcommunity.in:7777 => we have map to 7777 to /api => devcommunity.in/api 
   sudo -> give the root access
   nano -> used to edit a file
 
   - Ask chatgpt ->  nginx proxy pass /api to 7777 node application
   - config the nginx file and path is below
   -> sudo nano /etc/nginx/sites-available/default

   change server_name _i; to=> server_name 52.66.255.172; 

   location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    - Once the configuration is done we have to restart the nginx because we have made the changes

    - sudo systemctl restart nginx

    - Modify the BASEURL in frontend project to /api


    ----- Suppose I have modify the changes in the frontend and push the code to the git hub ---
    - I have get the updated code in the remote system it means aws
    - git pull
    - and again build the application
    - npm run build
    - copy the all the file from the dist folder and add to the /var/www/html
    - sudo scp -r dist/* /var/www/html

   


