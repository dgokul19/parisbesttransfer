export const TRAVEL_LOCATION = [
    {label : 'Charles De Gaulle Airport', value : 'Charles De Gaulle Airport'},
    {label : 'Orly Airport', value : 'Orly Airport'},
    {label : 'Beauvais Airport', value : 'Beauvais Airport'},
    {label : 'Disneyland Paris', value : 'Disneyland Paris'},
    {label : 'Paris', value : 'Paris'},
];

export const LOCATION_TYPE = {
    AIRPORT : 'airport',
    DISNEY : 'disney',
    PARIS : 'paris',
    FROM_AIRPORT : 'from_airport',
    AIRPORT_HOTEL : 'airport_hotel'
};

export const AIRPORT_LIST = ['Charles De Gaulle Airport', 'Orly Airport', 'Beauvais Airport']

export const DISNEY_LAND = [
    { label : 'Disneyland Park', value : 'Disneyland Park'},
    { label : 'Disneyland Hotel', value : 'Disneyland Hotel'},
    { label :  `Disney's Hotel Newport Bay Club`, value : `Disney's Hotel Newport Bay Club`}
]

export const PARIS_OPTION = [
    { label : 'From Individual Address', key: 'input'},
    { label : 'From Paris Hotel', key: 'hotels'},
    { label : 'From Paris Train Stations', key: 'train_station'},
    { label : 'From AirBnB', key: 'input'},
    { label : 'From Historic Monuments', key: 'input'},
];

export const TRAIN_STATION = [
    { label : 'Paris Gare du Nord', value: 'Paris Gare du Nord'},
    { label : 'Paris Gare du Lyon', value: 'Paris Gare du Lyon'},
    { label : 'Paris Gare du lest', value: 'Paris Gare du lest'},
    { label : 'Paris Gare du Montpernass', value: 'Paris Gare du Montpernass'},
    { label : 'Paris Gare du Bercy', value: 'Paris Gare du Bercy'},
]

export const DEFAULT_LOCATION_OPTIONS = {
    fromLocation : '',
    toLocation : '',
  }