import nock from 'nock';
import UserDataHandler from "../../api/applicationForTest/user_data_handler";
import {expect, use} from 'chai';
import chaiJsonSchema from "chai-json-schema";
import {usersSchema} from "../../api/jsonSchema/usersSchema";
import {usersEmails} from "../../api/modules/usersEmails";
const fs = require('fs');
const path = require('path');
use(chaiJsonSchema);

describe('Check user_data_handler', function () {
    const pathToUsersJson = path.join(__dirname, '..', '..', 'api', 'applicationForTest', 'users.json');
    const users = JSON.parse(fs.readFileSync(pathToUsersJson));
    const userDataHandler = new UserDataHandler();

    before(function () {
        nock('http://localhost:3000')
            .get('/users')
            .reply(200, users);
    });

    it('loadUsers should response with users object', function () {
        userDataHandler.loadUsers();
        const response = userDataHandler.users;
        expect(response).to.be.jsonSchema(usersSchema);
    });

    it('Verify getting users emails list', function () {
        const userEmailList = userDataHandler.getUserEmailsList();
        expect(userEmailList).to.be.deep.equal(usersEmails);
    });

    it('Verify number of users', function () {
        const usersNumber = userDataHandler.getNumberOfUsers();;
        expect(usersNumber).to.be.equal(9);
    });

    it('Verify finding users', function () {
        const user = userDataHandler.findUsers({name: "Leanne Graham", username: "Bret"});
        expect(user.email).to.be.equal("Sincere@april.biz");
    });
});
