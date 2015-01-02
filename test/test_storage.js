/*jslint node: true */
"use strict";

var test = require('tape');
var uuid = require('node-uuid');

var storage = require('../lib/storage');

test('clone', function (t) {
  t.plan(3);
  
  var thing1 = {id: uuid.v4(), name: 'Frank', description: 'Coder' };
  var thing2 = storage.clone(thing1);
  t.equal(thing1.name, thing2.name, 'names should be the same');
  t.equal(thing1.description, thing2.description, 'descriptions should be the same');
  t.notok(thing1.id === thing2.id, 'ids should not be the same');
});

