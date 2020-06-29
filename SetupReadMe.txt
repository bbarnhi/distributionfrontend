************ Initial setup ***********
From PowerShell

// Initialized server
// npm init
// npm install express --save
// npm install body-parser --save
// npm install pg
// npm install nodemon
// npx nodemon app.js

************ Database Setup *********

Via psql GUI tool generated the following Tables

             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | Customers     | table | postgres
 public | Manufactures  | table | postgres
 public | Users         | table | me
 public | items         | table | postgres
 public | purchaseOrder | table | postgres
 public | salesOrder    | table | postgres

                                         Table "public.Customers"
    Column    |       Type        | Collation | Nullable |                     Default
--------------+-------------------+-----------+----------+-------------------------------------------------
 companyName  | character varying |           |          |
 contactName  | character varying |           |          |
 contactEmail | character varying |           |          |
 contactPhone | integer           |           |          |
 customerId   | integer           |           | not null | nextval('"Customers_customerId_seq"'::regclass)

                                         Table "public.Manufactures"
    Column     |          Type          | Collation | Nullable |                  Default
---------------+------------------------+-----------+----------+--------------------------------------------
 companyName   | character varying(50)  |           |          |
 contactName   | character varying(50)  |           |          |
 contactEmail  | character varying(255) |           |          |
 contactPhone  | integer                |           |          |
 manufactureId | integer                |           | not null | nextval('"Manufactures_id_seq"'::regclass)

                                        Table "public.Users"
  Column   |         Type          | Collation | Nullable |                 Default
-----------+-----------------------+-----------+----------+-----------------------------------------
 firstName | character varying     |           |          |
 lastName  | character varying(50) |           |          |
 userId    | integer               |           | not null | nextval('"Users_userId_seq"'::regclass)
 email     | character varying     |           |          |

                                        Table "public.items"
   Column    |       Type        | Collation | Nullable |                 Default
-------------+-------------------+-----------+----------+-----------------------------------------
 name        | character varying |           |          |
 description | text              |           |          |
 itemId      | integer           |           | not null | nextval('"items_itemId_seq"'::regclass)
Indexes:
                                     Table "public.purchaseOrder"
    Column     |  Type   | Collation | Nullable |                       Default
---------------+---------+-----------+----------+-----------------------------------------------------
 itemId        | integer |           |          |
 qty           | integer |           |          |
 dateOrdered   | date    |           |          |
 dateRecieved  | date    |           |          |
 purchaseId    | integer |           | not null | nextval('"purchaseOrder_purchaseId_seq"'::regclass)
 manufactureId | integer |           |          |

                                   Table "public.salesOrder"
    Column    |  Type   | Collation | Nullable |                    Default
--------------+---------+-----------+----------+-----------------------------------------------
 salesID      | integer |           | not null | nextval('"salesOrder_salesID_seq"'::regclass)
 customerId   | integer |           |          |
 itemId       | integer |           |          |
 qty          | integer |           |          |
 dateOrdered  | date    |           |          |
 dateRecieved | date    |           |          |

