/*jshint node:true */
/*global describe:false, it:false */
'use strict';

var taskTree = require('../lib/taskTree');
var should = require('should');

require('mocha');

describe('taskTree()', function() {
  it('should form a tree properly', function(done){
    should.exist(taskTree); // lol shutup jshint

    var tasks = {
      test: {
        deps: ['abc', 'def']
      },
      abc: {
        deps: ['def']
      },
      def: {
        deps: []
      }
    };

    var expectTree = {
      nodes: [{
        label: 'test',
        nodes: ['abc', 'def']

      }, {
        label: 'abc',
        nodes: ['def']

      }, {
        label: 'def',
        nodes: []

      }]
    };

    taskTree(tasks).should.eql(expectTree);
    done();
  });
});