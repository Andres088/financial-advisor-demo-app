# Financial Advisor Demo App

This project was made to complete a challenge on ReactJS in my workplace. 

The designed app works as a financial advisor who asks the user about his prefered risk level and based on that proceeds to offer a portfolio of investments according to that risk level.
The user can also input his current investment portfolio, so the app can calculate the necessary transfers between investments so the user can hit the desired risk level.

For more details about the business logic, check the [requirements](https://drive.google.com/file/d/1jd_KRJBwrZKApQr6a3PLRnK8VPWY6LsV/view?usp=sharing) for this app.

## Demo video

In the next video recording the app is showcased and all its features described. It also provides a few commentaries about the implementation.

[![Video Link](https://i.imgur.com/hdbUg2n.png)](http://www.youtube.com/watch?v=nm3VCXk_ya8 "Video Link")

## Transfer algorithm

One of the features involves recommending the user a list of transfers to move from his current portfolio arrange to the adviced portfolio based on his prefered risk level. 
#### Current Portfolio 
Investment | Amount | Percentage
------------ | ------------- | -------------
Bonds | 10,000 US$ | 10%
Large Cap | 20,000 US$ | 20%
Mid Cap | 50,000 US$ | 50%
Foreign | 15,000 US$ | 15%
Small Cap | 5,000 US$ | 5%
#### Advised Portfolio por Risk Level 5
Investment | Amount | Percentage
------------ | ------------- | -------------
Bonds | 40,000 US$ | 40%
Large Cap | 20,000 US$ | 20%
Mid Cap | 20,000 US$ | 20%
Foreign | 20,000 US$ | 20%
Small Cap | 0 US$ | 0%

Assuming the amount of transfers matters, as the lesser the better, an algorithm was necessary to implement to calculate the least amount of transfers to move from one portfolio arrage to another.

So an algorithm was proposed to solve this problem, which is described in the next steps:

1. Calculate the differences between the amounts of the current portfolio and the advised portfolio.
   
   Investment | Current | Advised | Difference  
   ------------ | ------------- | ------------- | -------------
   Bonds | 10,000 US$ | 40,000 US$ | +30,000 US$
   Large Cap | 20,000 US$ | 20,000 US$ | 0 US$
   Mid Cap | 50,000 US$ | 20,000 US$ | -30,000 US$ 
   Foreign | 15,0000 US$ | 20,000 US$ | +5,000 US$
   Small Cap | 5000 US$ | 0 US$ | -5,000 US$

2. If all differences are equal to zero, go to the step 10. 
3 Pick the highest difference investment (HDI) and lowest one (LDI).
4. Register in memory a transfer** from the HDI to the LDI.    
5. Sum the HDI difference with the LDI difference.
6. If the result is 0 or higher, the amount of the transaction is exactly the lowest difference investment needs to reach the advised amount.
7. If the result is less than 0, the amount of the transaction is the difference amount of the highest difference investment.
8. Update the Current Portfolio amounts, based on the recommended transfer done.
9. Go back to step 1.   
10. List the registered recommended transfers. 

** Not an actual transfer, just for calculating the recommended transfers.

## Installation
To run this app in local host, simply clone this repository, open a command line interface in the project directory and execute the following commands:
### `npm install`
### `npm start`

