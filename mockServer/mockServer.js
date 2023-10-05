import searchDataOnePost from "../src/api/search/searchDataExampleOnePost";
function runMockServer() {
    const mockserver = require('mockserver-node');

    mockserver
        .start_mockserver({
            serverPort: 1080,
            jvmOptions: [
                '-Dmockserver.enableCORSForAllResponses=true',
                '-Dmockserver.corsAllowOrigin="*"',
                '-Dmockserver.corsAllowMethods="CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT, PATCH, TRACE"',
                '-Dmockserver.corsAllowHeaders="Allow, Content-Encoding, Content-Length, Content-Type, ETag, Expires, Last-Modified, Location, Server, Vary, Authorization"',
                //'-Dmockserver.corsAllowCredentials=true',
                '-Dmockserver.corsMaxAgeInSeconds=300',


            ],
            mockServerVersion: "5.15.0",
            verbose: true
        })
        .then(
            function () {

                console.log("started MockServer");
                createExpectation()
            },
            function (error) {
                console.log("err occur in started MockServer");
                console.log(JSON.stringify(error, null, "  "));
            }
        );
}
function closeMockServer() {
    const mockserver = require('mockserver-node');

    mockserver
        .stop_mockserver({
            serverPort: 1080,
            mockServerVersion: "5.15.0",
        })
        .then(
            function () {
                console.log("closed MockServer");
            },
            function (error) {
                console.log(JSON.stringify(error, null, "  "));
            }
        );
}

function reset() {
    const mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080)
        .reset()
        .then(
            function () {
                console.log("reset all state");
            },
            function (error) {
                console.log(error);
            }
        );
}


function createExpectation() {
    const mockServerClient = require('mockserver-client').mockServerClient;

    mockServerClient("localhost", 1080)

        .mockAnyResponse({
            "httpRequest": {
                "method": "GET",

                "path": `/search.json`,
                "queryStringParameters": {
                    "q" : [ "mango" ],
                },
                "headers": {
                    "Host" : [ "localhost:1080" ],
                }
//localhost:1080/search.json?q=mango&restrict_sr=on&include_over_18=on&sort=relevance&t=all&raw_json=1
            },
            "httpResponse": {
                'statusCode': 200,
                'body': {type: "JSON", json: `${searchDataOnePost}`},
                'headers': {
                    'Access-Control-Allow-Origin': '*'
                }
            },
        })
        .then(
            function () {

                console.log(new Date().toISOString() + ": ################### created");

                console.log("expectation created");

            },
            function (error) {
                console.log("################### not   created");

                console.log(error);
            }
        );
}

function addArrayOfExpectations() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080).mockAnyResponse(
        [
            {
                'httpRequest': {
                    'path': '/somePathOne'
                },
                'httpResponse': {
                    'statusCode': 200,
                    'body': JSON.stringify({'value': 'one'})
                }
            },
            {
                'httpRequest': {
                    'path': '/somePathTwo'
                },
                'httpResponse': {
                    'statusCode': 200,
                    'body': JSON.stringify({'value': 'one'})
                }
            },
            {
                'httpRequest': {
                    'path': '/somePathThree'
                },
                'httpResponse': {
                    'statusCode': 200,
                    'body': JSON.stringify({'value': 'one'})
                }
            }
        ]
    )
        .then(
            function () {
                console.log("expectations created from addArrayOfExpectations");
            },
            function (error) {
                console.log(error);
            }
        )}


function retrieveRecordedLogMessages() {
    var mockServerClient = require('mockserver-client').mockServerClient;
    mockServerClient("localhost", 1080)
        .retrieveLogMessages({
            "path": "/some/path",
            "method": "POST"
        })
        .then(
            function (logMessages) {
                // logMessages is a String[]
                console.log(logMessages);
            },
            function (error) {
                console.log(error);
            }
        );
}


runMockServer()



