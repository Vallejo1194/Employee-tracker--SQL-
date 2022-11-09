INSERT INTO department (name)
VALUES ("Logistics"),
("Legal"),
("Marketing"),
("Accounting"),
("HR");
     
     INSERT INTO roles  (title, salary, department_id)
VALUES ("Logistics Analyst", 1000, 1),
("Logistics Manager", 3000, 1),
("Logistics Director", 5000, 1),
("legal Analyst", 1000, 2),
("Legal Manager", 3000, 2),
("Legal Director", 5000, 2),
("Marketing Analyst", 1000, 3),
("Marketing Manager", 3000, 3),
("Marketing Director", 5000, 3),
("Accounting Analyst", 1000, 4),
("Accounting Manager", 3000, 4),
("Accounting Director", 5000, 4),
("HR Analyst", 1000, 5),
("HR Manager", 3000, 5),
("HR Director", 5000, 5);


     INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES ("James", "Mclon", 2, NULL),
("David", "Lloyd", 5, NULL),
("John", "Joil", 8, NULL),

("Carlos", "Tevez", 12, 2),
("Cristiano", "Magallanes", 14, 4),
("Ron", "Davis", 17, 6),

("Salo", "Loki", 26, 8),
("Remi", "Kiol", 24, 4),
("Adrian", "Valdez", 29, 2),

("Raquel", "Remun", 32, 8),
("Karla", "Kultu", 37, 5),
("Sara", "Lara", 39, 19),

("George", "Desa", 41, 9),
("Miko", "Lader", 45, 13),
("Hurto", "Lopez", 48, 6);
