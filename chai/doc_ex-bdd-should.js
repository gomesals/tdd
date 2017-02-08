'use strict';

const should = require('chai').should()
    , foo = 'bar'
    , beverages = {tea: ['chai', 'matcha', 'oolong']};

foo.should.be.a('string');
foo.should.be.equal('bar');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);
