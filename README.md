# mean_stack_poc

angular_frontend -- this folder contains code for front-end pages

node_services -- this folder contains code for backend services

***************************************************************************
ANGULAR SETUP
***************************************************************************
After checking out code:

Navigate to "angular_frontend" folder, run following commands:

npm install
npm install -g @angular/cli
ng build
ng serve

URL to open page --> http://localhost:4200/login

Login credentials:
MEAN_POC
PASSWORD

***************************************************************************
NODE (Express.js) SETUP
***************************************************************************
Navigate to "node_services" folder, run following commands:

npm install
npm install --save express
npm install --save body-parser

================
Services
================

Service Name: Login
URL: http://localhost:3000/api/authenticateUser
HTTP method: POST

Input JSON:

{
    "client_id": "iJavaScript",
    "user": {
        "id": "MEAN_POC",
        "password": "PASSWORD"
    }
}

Output JSON:

{
    "success": "true",
    "isUserAuthenticated": "true",
    "customerid": "IJ101"
}

--------------------------------

Service Name: Dashboard details
URL: http://localhost:3000/api/retrieveUserDetails
HTTP method: POST

Input JSON:
None

Output JSON:

{
    "success": "true",
    "customer": {
        "id": "IJ101",
        "name": "Jim Smith",
        "last_login": "14 March 2021",
        "balance": "$3000",
        "transaction": [
            {
                "date": "10 March 2021",
                "desc": "Room rent",
                "amount": "$75"
            },
            {
                "date": "11 March 2021",
                "desc": "Dinner",
                "amount": "$20"
            }
        ]
    }
}

--------------------------------

Service Name: Team details
URL: http://localhost:3000/api/retrieveTeamDetails
HTTP method: POST

Input JSON:
None

Output JSON:

{
    "teammembers": [
        {
            "id": "1",
            "personName": "Beng Tiong Tang"
        },
        {
            "id": "2",
            "personName": "Niraj Kumar Jha"
        },
        {
            "id": "3",
            "personName": "Siddharth Pandey"
        },
        {
            "id": "4",
            "personName": "Jatin Suri"
        },
        {
            "id": "5",
            "personName": "Parasmani Jain"
        },
        {
            "id": "6",
            "personName": "Saurabh Nilegaonkar"
        },
        {
            "id": "7",
            "personName": "Bhawana Sarma"
        },
        {
            "id": "8",
            "personName": "Vimlesh Singh"
        }
    ]
}
--------------------------------