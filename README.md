# rest-api-for-bank
To fetch bank details, using the data given in the API’s query parameters.

## Following are the steps

created database in PostgreSQL
--created a database bank_det and table name bank_branches
--
--PGPASSWORD=l3AK61KAp0yrosaj2CFvDaiayUYkWTTD psql -h dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com -U chan bank_det
--using above code in kali-linux terminal to alter,update,delete,insert table with query

![image](https://user-images.githubusercontent.com/94432813/221778708-46cc1ed4-ec37-4984-934c-83e37b53804d.png)

to make load more data from csv to database table -used (https://tableconvert.com/csv-to-sql) to make easy query

![image](https://user-images.githubusercontent.com/94432813/221778605-f69a4354-7da6-48ff-a51a-436ddfdb3982.png)

now create NESTapi in Nodejs with express 

