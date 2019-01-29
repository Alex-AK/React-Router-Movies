/**
 * @author Ahmet Ozan Tekin
 *               16.03.2017
 * ahmetozantekin@gmail.com
 */

const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const cors = require('cors');
let app = express();
app.use(cors());

app.get('/', function(req, res) {
  url = 'http://www.imdb.com/chart/top';
  request(url, function(error, response, html) {
    if (!error) {
      let $ = cheerio.load(html, {});
      let top250 = [];
      let _name, _year, _poster, _rank, _id;
      $('.seen-collection').filter(function() {
        let tableRow = $(this)
          .find('.lister-list')
          .find('tr');
        let i = 0;
        tableRow.each(function() {
          let self = $(this);
          i += 1;
          _poster = self
            .find('.posterColumn')
            .find('a')
            .find('img')
            .attr('src');
          _name = self
            .find('.titleColumn')
            .find('a')
            .text()
            .trim();
          _year = self
            .find('.titleColumn')
            .find('.secondaryInfo')
            .text()
            .split(')')[0]
            .split('(')[1]
            .trim();
          _rank = self
            .find('.ratingColumn')
            .find('strong')
            .text();
          _imdbID = self.find('.seen-widget').attr('data-titleid');

          let data = {
            id: i,
            name: _name,
            year: _year,
            rating: _rank,
            poster: _poster,
            imdbID: _imdbID
          };
          top250.push(data);
        });
      });
      res.json(top250);
    }
  });
});
app.listen(5000);
console.log(':5000 sendeyiz beybi.');
exports = module.exports = app;
