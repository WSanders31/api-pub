const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
  });


const getRecord = async (request) => {
    console.log("getRecord", request);
}

const createRecord = async (request) => {
    console.log("createRecord", request);
}

const deleteRecord = async (request) => {
    console.log("deleteRecord", request);
}

module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    deleteRecord: deleteRecord,
  }