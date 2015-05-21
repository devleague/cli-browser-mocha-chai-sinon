var window = window || undefined;
if (window) {
  GLOBAL = window;
} else {
  var vm = require('vm');
  var fs = require('fs');
  // var sinon = require('sinon');
  var chai = require('chai');

  var renameMe = fs.readFileSync(process.cwd() + '/renameMe.js', { encoding: 'UTF-8' });
  vm.runInThisContext(renameMe); // file runs and it's contents has access to GLOBAL
}

var expect = chai.expect;
var should = chai.should();

// load basics.js into new VM

describe('Test', function() {
  // var sandbox;

  // beforeEach(function() {
  //   // create a sandbox
  //   sandbox = sinon.sandbox.create();

  //   // stub some console methods
  //   sandbox.stub(console, 'log');
  //   sandbox.stub(console, 'error');
  // });

  // afterEach(function() {
  //   // restore the environment as it was before
  //   sandbox.restore();
  // });
  it('should test', function () {
    expect(GLOBAL.testFunction).to.be.defined;
    expect(GLOBAL.testFunction()).to.be.equal(1);
  });
});
