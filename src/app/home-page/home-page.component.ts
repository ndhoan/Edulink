import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as AWSCognito from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  coverImage = 'https://d3uf2ssic990td.cloudfront.net/images/5031/413b4a3e-5bf8-494b-bfda-ed9488ca3b0d/kids.jpg';
  
  USER_NAME = 'pbinh@gmail.com';
  PASSWORD = '87654321';
  CLIENT_SECRET = "6o6md0td7n95743ratp5shif4nemlufev2rlft3nqq654pai4do";

  poolData = { 
    UserPoolId : 'us-east-2_kRG9Z9XwW', //CognitoUserPool
    ClientId : '40u80o2mlbcb41cm485imdm2mb', //CognitoUserPoolClient 
  };
  // identityPool:string = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'; //CognitoIdentityPool 
  // apiURL:string = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX';  //ApiUrl
  // region:string = 'us-east-2'; //Region Matching CognitoUserPool region

  authenticateUserPool(){
    //Provide username and password.
    var authenticationData = {
      Username : this.USER_NAME,
      Password : this.PASSWORD,
      };
      
    var authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);

    //Create UserPool.
    var userPool = new AWSCognito.CognitoUserPool(this.poolData);

    //Take Cognito User.
    var userData = {
        Username : this.USER_NAME,
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoUser(userData);
    
    //Call Authen API and handle response.
    cognitoUser.authenticateUser(
      authenticationDetails, //user details.
      {
      onSuccess: function (result) {
        let cognitoGetUser = userPool.getCurrentUser();
        
        if (cognitoGetUser != null) {
          cognitoGetUser.getSession(function(err, result) {
            if (result) {
              console.log ("Authenticated to Cognito User Pools!");       
              console.log('access token + ' + result.getAccessToken().getJwtToken());   
            }
          });
        } // On Success Event Listener
      },
      onFailure: function(err) {
          console.log(err);
      }// On Failed Event Listener
    });
  }
  constructor() { }

  ngOnInit() {
      this.authenticateUserPool();
  }

}
