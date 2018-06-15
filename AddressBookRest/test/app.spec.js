const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Contact = require('../src/api/contact/model');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Functionnal tests', function() {

  describe('GET /api/contacts', function() {

    it('should have status 200 and respond json', async function() {
      const contacts = [{prenom: 'A', nom: 'B'}];

      const mock = sinon.mock(Contact);
      mock.expects("find").once().resolves(contacts);

      const res = await chai.request(app).get('/api/contacts');
      expect(res).to.have.status(200);
      expect(res).to.be.json;

      mock.verify();
    });

  });

});

