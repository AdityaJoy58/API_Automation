
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://api.openweathermap.org/data/2.5/forecast/daily?q=');
var destination = 'Sydney';
var dayOfTheWeek = 'Thursday';
describe('A happy holidaymaker', function () {

    it('like to holiday in sydney', function (done) {
        api.post('destination')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                appid: "b1b15e88fa797225412429c1c50c122a1",
            })
            .expect('Content-Type', /json/)
            .expect(200) // The response is valid JSON
            .end(function (err, response) {
                if (err) return done(err);
                response.status.should.equal(200);
                assert(response.body.city.name).to.equal(destination); // Verifying whether city is Sydney or not
                done();
            })
    });
    it('like to holiday on Thursdays and the temperature is warmer than 10 degrees', function (done) {
        api.get('destination')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect('Content-Type', /json/)
            .expect(200) // The response is valid JSON
            .end(function (err, response) {
                if (err) return done(err);
                response.status.should.equal(200);
                console.log(response.body.cnt);
                for (var datesCount = 0; datesCount < response.body.cnt; datesCount++){
                    if(response.body.list[datesCount].forecast.time.day.getDay() == dayOfTheWeek) {
                        console.log(response.body.list[datesCount].forecast.time.day + "is a Thursday");
                        // Verifying whether any day in the forecast falls on Thursday
                        assert(response.body.list[datesCount].forecast.time.day.getDay()).to.equal(dayOfTheWeek);
                        dayFound = true;
                        break;
                    }
                }
                if(dayFound) {
                    console.log(response.body.list[datesCount].forecast.time.day + "is a Thursday which means forecast has a day which is Thursday");
                    // Verifying whether for that day, the temperature is more than 10 degrees
                    assert(response.body.list[datesCount].deg).to.greaterThan(10);
                }
                done();
            })
    });


});
