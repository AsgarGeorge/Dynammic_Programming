SELECT * FROM LEADS;
SELECT * FROM CUSTOMER_DETAILS;
SELECT * FROM TICKET;
SELECT * FROM APP_USER;

SELECT join_date FROM customer_details FETCH FIRST 10 ROWS ONLY;


DROP TABLE Customer_Details;
DROP TABLE TICKET;


DESC CUSTOMER_DETAILS;


SELECT 
    TO_CHAR(TO_DATE(join_date, 'DD/MM/YYYY'), 'YYYY-MM') AS month,
    COUNT(*) AS count
FROM 
    customer_details
WHERE 
    TO_DATE(join_date, 'DD/MM/YYYY') >= ADD_MONTHS(TRUNC(SYSDATE), -2)
GROUP BY 
    TO_CHAR(TO_DATE(join_date, 'DD/MM/YYYY'), 'YYYY-MM')
ORDER BY 
    month;
   
   
   SELECT TRUNC(SYSDATE) AS today_date FROM dual;
   
   SELECT ADD_MONTHS(TRUNC(SYSDATE), -2) AS old_date FROM dual;

   
BEGIN
   FOR t IN (SELECT table_name FROM user_tables) LOOP
      EXECUTE IMMEDIATE 'DROP TABLE "' || t.table_name || '" CASCADE CONSTRAINTS';
   END LOOP;
END;
/





