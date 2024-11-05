export const TRAVEL_LOCATION = [
  { label: 'Charles De Gaulle Airport', value: 'Charles De Gaulle Airport' },
  { label: 'Orly Airport', value: 'Orly Airport' },
  { label: 'Beauvais Airport', value: 'Beauvais Airport' },
  { label: 'Disneyland Paris', value: 'Disneyland Paris' },
  { label: 'Paris', value: 'Paris' },
];

export const LOCATION_TYPE = {
  AIRPORT: 'airport',
  DISNEY: 'disney',
  PARIS: 'paris',
  FROM_AIRPORT: 'from_airport',
  AIRPORT_HOTEL: 'airport_hotel'
};

export const AIRPORT_LIST = ['Charles De Gaulle Airport', 'Orly Airport', 'Beauvais Airport']

export const DISNEY_LAND = [
  { label: 'Disneyland Park', value: 'Disneyland Park' },
  { label: 'Disneyland Hotel', value: 'Disneyland Hotel' },
  { label: `Disney's Hotel Newport Bay Club`, value: `Disney's Hotel Newport Bay Club` }
]

export const PARIS_OPTION = [
  { label: 'From Individual Address', key: 'input' },
  { label: 'From Paris Hotel', key: 'hotels' },
  { label: 'From Paris Train Stations', key: 'train_station' },
  { label: 'From AirBnB', key: 'input' },
  { label: 'From Historic Monuments', key: 'input' },
];

export const TRAIN_STATION = [
  { label: 'Paris Gare du Nord', value: 'Paris Gare du Nord' },
  { label: 'Paris Gare du Lyon', value: 'Paris Gare du Lyon' },
  { label: 'Paris Gare du lest', value: 'Paris Gare du lest' },
  { label: 'Paris Gare du Montpernass', value: 'Paris Gare du Montpernass' },
  { label: 'Paris Gare du Bercy', value: 'Paris Gare du Bercy' },
]

export const DEFAULT_LOCATION_OPTIONS = {
  fromLocation: '',
  toLocation: '',
}

export const optionsList = [
  { label: 'Airport', type: 'heading', value: '' },
  { label: 'Beavais Airport', type: 'option', value: 'Beavais Airport' },
  { label: 'Oly Airport', type: 'option', value: 'Oly Airport' },
  { label: 'CDS Airport', type: 'option', value: 'CDG Airport' },
  { label: 'Hotels', type: 'heading', value: '' },
  { label: 'Holiday Inn Beavais Airport', type: 'option', value: 'Holiday Inn Beavais Airport' },
];

export const BOOKING_FORM = {
  from_location: '',
  to_location: '',
  pickup_date: null,
  pickup_time: null,
  locationDetails: '',
  passengers_count: '',
  is_return_transfer: false,
  custom_from_location: '',
  custom_to_location: '',
  rate_charge: '0.00',
};

export const BOOKING_USER = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  flightNo: '',
  luggageCount: 1,
  payment_option: 'paybycash',
  baby_seat: false,
  booster_seat: false,
  special_notes: '',
};

export const EDITABLE_FIELDS = [
  "pickup_date",
  "pickup_time",
  "first_name",
  "last_name",
  "email",
  "phone",
  "flight_no",
  "baby_seat",
  "booster_seat",
  "special_notes"
];

export const BOOLEAN_FIELDS = ["baby_seat", "booster_seat"];

export const BOOKING_LABEL = {
  "first_name": "First name",
  "last_name": "Last name",
  "from_location": "From Location",
  "to_location": "To Location",
  "pickup_date": "Pickup Date",
  "pickup_time": "Pickup Time",
  "email": "Email",
  "phone": "Phone",
  "passengers_count": 'Passengers Count',
  "flight_no": 'Flight No',
  "luggage_count": 'Luggage Count',
  "payment_option": "Payment Option",
  "baby_seat": 'Baby Seat',
  "booster_seat": 'Booster Seat',
  "special_notes": "Messages",
  // "is_return_transfer": 'Return Transfer',
  "rate_charge": "Booking Price",
};

export const BOOKING_MOCK = {
  "from_location": "Disneyland Park - Chessy",
  "to_location": "Gare du Nord - Paris",
  "pickup_date": "2024-11-05",
  "pickup_time": "11:43:00",
  "passengers_count": 3,
  "is_return_transfer": false,
  "first_name": "Gokulan",
  "last_name": "Dhatchinamoorthy",
  "email": "dgokul19@gmail.com",
  "phone": "89122468",
  "flight_no": null,
  "luggage_count": 1,
  "payment_option": "paybycard",
  "baby_seat": true,
  "booster_seat": true,
  "special_notes": "test ",
  "trip": {},
  "rate_charge": "120.99",
  "language": "en",
  "booking_ref": "1JY0YY",
  "added_on": "2024-11-05T03:47:20.908023Z"
}
