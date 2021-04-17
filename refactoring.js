class TouristLocation {
  constructor(placeName, attractions, cityName) {
    this.name = placeName;
    this.attractions = attractions;
    this.city = cityName;
  }
  toString() {
    return `${this.name} is in ${this.city} and features ${this.attractions.join(', ')}`;
  }
  printInfo() {
    console.log(this.toString());
  }
}
// Single Responsibility Principle: Any given function/method should have one job
// i.e toString just make strings
// if I want to console.log, I do that elsewhere or in another function/method

// consistent data types is important
const places = [
  new TouristLocation('Seattle Center', [
    'Space Needle',
    'Chihuly Glass & Garden',
    'Pacific Science Center'
  ], 'Seattle'),
  new TouristLocation('Balboa Park', [
    'Reuben H. Fleet Science Center',
    'San Diego Zoo',
    'Old Globe'
  ], 'San Diego'),
  new TouristLocation('Boston Common', ['public park'], 'Boston')
];
// better
// console.log(places.map(place => place3.toString()));

// even better
places.forEach(place => console.log(place.toString()));
