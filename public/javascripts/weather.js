'use strict';

var log = require('debug')('forecast.io'),
    util = require('util');

require('should');

var Forecast = require('../index');

var options = {
  APIKey: process.env.FORECAST_API_KEY
},
    latitude = 37.7833,
    longitude = 122.4167,
    forecast = new Forecast(options);

if ( ! process.env.a460b122b56d6a8774c447d1b123a4b1) {
  throw new Error('tests expect a FORECAST_API_KEY to be set in your environment variables');
}

describe('Forecast', function () {
  describe('#get', function () {
    it('should return data for a latitude and longitude', function (done) {
      forecast.get(latitude, longitude, function (err, res, data) {
        if (err) throw err;
        log('res: ' + util.inspect(res));
        log('data: ' + util.inspect(data));
        res.should.not.equal.null;
        data.should.not.equal.null;
        done();
      });
    });
    it('should be able to specify blocks to exclude via options param', function (done) {
      var time = new Date().setDate(0); // lets use an arbitrary date
      var options = {
        exclude: 'minutely,daily,flags,alerts'
      };
      forecast.get(latitude, longitude, options, function (err, res, data) {
        if (err) throw err;
        log('res: ' + util.inspect(res));
        log('data: ' + util.inspect(data));
        res.should.not.equal.null;
        data.should.not.equal.null;
        data.should.not.have.property('alerts');
        data.should.not.have.property('currently');
        data.should.not.have.property('minutely');
        data.should.have.property('hourly');
        data.should.not.have.property('daily');
        data.should.not.have.property('flags');
        done();
      });
    });
    it('should be able to specify multiple options via options param', function (done) {
      var time = new Date().setDate(0); // lets use an arbitrary date
      var options = {
        exclude: 'minutely,daily,flags,alerts',
        units: 'si'
      };
      forecast.get(latitude, longitude, options, function (err, res, data) {
        if (err) throw err;
        log('res: ' + util.inspect(res));
        log('data: ' + util.inspect(data));
        res.should.not.equal.null;
        data.should.not.equal.null;
        data.should.not.have.property('alerts');
        data.should.have.property('currently');
        data.should.not.have.property('minutely');
        data.should.have.property('hourly');
        data.should.not.have.property('daily');
        data.should.not.have.property('flags');
        done();
      });
    });
  });
  describe('#getAtTime', function () {
    it('should return data for a latitude and longitude and time', function (done) {
      var time = new Date().setDate(0); // lets use an arbitrary date
      forecast.getAtTime(latitude, longitude, time, function (err, res, data) {
        if (err) throw err;
        log('res: ' + util.inspect(res));
        log('data: ' + util.inspect(data));
        res.should.not.equal.null;
        data.should.not.equal.null;
        done();
      });
    });
  });
});
