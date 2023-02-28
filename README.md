# Rest-api-for-bank
To fetch bank details, using the data given in the API’s query parameters.

## Following are the steps

###Created database in PostgreSQL
--Created a database bank_det and table name bank_branches
--
--PGPASSWORD=l3AK61KAp0yrosaj2CFvDaiayUYkWTTD psql -h dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com -U chan bank_det
--Using above code in kali-linux terminal to alter,update,delete,insert table with query
![image](https://user-images.githubusercontent.com/94432813/221778708-46cc1ed4-ec37-4984-934c-83e37b53804d.png)

Now create NESTapi in Nodejs with express

Check the created api with Postman
![image](https://user-images.githubusercontent.com/94432813/221780165-add8d798-c3c3-48d1-97ae-dbc0deafb29c.png)

Create render account deploy the Nodejs in it with web service
![image](https://user-images.githubusercontent.com/94432813/221779993-c9849fe3-23ec-4dda-a53f-f7223669537e.png)

Now the deployed web is created(https://rest-api-for-bank.onrender.com/)
![image](https://user-images.githubusercontent.com/94432813/221780904-ca0b3fb2-b49a-46db-8348-9e47e7b08d7d.png)

Now can run the case 1(https://rest-api-for-bank.onrender.com/api/search?q=Mumbai&limit=2&offset=1)
![image](https://user-images.githubusercontent.com/94432813/221781024-29fc77e6-9ad6-4887-b689-525f96d548f9.png)

Case 2 execute only empty brecket because PostgreSQL can load only upto 10k rows but branch:LONI is not in the rows of first 10k rows
![image](https://user-images.githubusercontent.com/94432813/221782568-6bfafe67-40f8-42f2-beb0-b782aa58369c.png)

Instead of it we can use another barnch name which is in first 10k rows 
![image](https://user-images.githubusercontent.com/94432813/221782296-fb7044c7-7b0e-44ff-b065-4191a918f6b2.png)
Here I have used WASHIM as a branch name which is in first 10k rows



