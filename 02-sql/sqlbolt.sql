CREATE TABLE IF NOT EXISTS Movies (
    id INTEGER PRIMARY KEY,
    title VARCHAR,
    director VARCHAR,
    year INTEGER,
    length_minutes INTEGER
);

CREATE TABLE IF NOT EXISTS Boxoffice (
    movie_id INTEGER,
    rating FLOAT,
    domestic_sales INTEGER,
    international_sales INTEGER
);

INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (1,'Toy Story','John Lasseter',1995,81);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (2,'A Bug''s Life','John Lasseter',1998,95);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (3,'Toy Story 2','John Lasseter',1999,93);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (4,'Monsters, Inc.','Pete Docter',2001,92);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (5,'Finding Nemo','Andrew Stanton',2003,107);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (6,'The Incredibles','Brad Bird',2004,116);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (7,'Cars','John Lasseter',2006,117);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (8,'Ratatouille','Brad Bird',2007,115);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (9,'WALL-E','Andrew Stanton',2008,104);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (10,'Up','Pete Docter',2009,101);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (11,'Toy Story 3','Lee Unkrich',2010,103);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (12,'Cars 2','John Lasseter',2011,120);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (13,'Brave','Brenda Chapman',2012,102);
INSERT INTO Movies(id,title,director,year,length_minutes) VALUES (14,'Monsters University','Dan Scanlon',2013,110);

-- .................................................................

INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (5,8.2,380843261,555900000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (14,7.4,268492764,475066843);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (8,8,206445654,417277164);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (12,6.4,191452396,368400000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (3,7.9,245852179,239163000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (6,8,261441092,370001000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (9,8.5,223808164,297503696);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (11,8.4,415004880,648167031);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (1,8.3,191796233,170162503);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (7,7.2,244082982,217900167);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (10,8.3,293004164,438338580);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (4,8.1,289916256,272900000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (2,7.2,162798565,200600000);
INSERT INTO Boxoffice(movie_id,rating,domestic_sales,international_sales) VALUES (13,7.2,237283207,301700000);





-----------------------------------



CREATE TABLE IF NOT EXISTS Buildings (
   building_name VARCHAR(2) NOT NULL
  ,capacity      INTEGER  NOT NULL
);

INSERT INTO Buildings(building_name,capacity) VALUES ('1e',24);
INSERT INTO Buildings(building_name,capacity) VALUES ('1w',32);
INSERT INTO Buildings(building_name,capacity) VALUES ('2e',16);
INSERT INTO Buildings(building_name,capacity) VALUES ('2w',20);


CREATE TABLE IF NOT EXISTS Employees(
   role           VARCHAR(8) NOT NULL
  ,name           VARCHAR(10) NOT NULL
  ,building       VARCHAR(2) NOT NULL
  ,years_employed INTEGER  NOT NULL
);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Engineer','Becky A.','1e',4);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Engineer','Dan B.','1e',2);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Engineer','Sharon F.','1e',6);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Engineer','Dan M.','1e',4);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Engineer','Malcom S.','1e',1);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Artist','Tylar S.','2w',2);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Artist','Sherman D.','2w',8);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Artist','Jakob J.','2w',6);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Artist','Lillia A.','2w',7);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Artist','Brandon J.','2w',7);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Manager','Scott K.','1e',9);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Manager','Shirlee M.','1e',3);
INSERT INTO Employees(role,name,building,years_employed) VALUES ('Manager','Daria O.','2w',6);
