## Things I learnt 
- If the  backend is expecting an object, like in htis project the backend was expecting an object url. When I send only the ``` url ``` as input body it considered it as ``` undefined ```. Hence you must always be aware of how the backend in accepting the input body and how you are sending it from the frontend. Here the correct way to send input body was ``` {url} ``` 

- Conditional Rendering means rendering element if condition is true. You cn use Ternary operation & formal coneditional statements. but yo ucan also use ``` && ``` for conditional rendering 