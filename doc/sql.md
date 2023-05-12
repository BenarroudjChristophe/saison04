```
 toutes les promos, dans l'ordre alphabétique 

SELECT * FROM promo ORDER BY name;

```

```

tous les étudiants, dans l'ordre alphabétique des noms de famille

SELECT * FROM student ORDER BY last_name;

```

```

tous les étudiants de la promo 135

SELECT * FROM student WHERE promo_id = 135;

```

```

les étudiants dont le nom ou le prénom ressemble à "max"
SELECT * FROM student WHERE last_name LIKE '%Max%' OR first_name LIKE '%Max%'  ;
 