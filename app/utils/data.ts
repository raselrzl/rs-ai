export const dataModel = [
  {
    id: "RM102",
    roomNumber: 102,
    type: "Deluxe",
    bedType: "King",
    pricePerNight: 139.00,
    currency: "USD",
    maxGuests: 2,
    isAvailable: true,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Balcony",
      "Room Service"
    ],
    images: [
      "https://example.com/images/deluxe-1.jpg",
      "https://example.com/images/deluxe-2.jpg"
    ],
    description: "The Deluxe Room offers a spacious king-size bed, private balcony, mini bar, partial sea view, free Wi-Fi, and modern decor to ensure a relaxing stay.",
    floor: 2,
    view: "Partial Sea View",
    hasBalcony: true,
    smokingAllowed: false,
    createdAt: "2025-05-28T12:00:00Z",
    updatedAt: "2025-05-28T15:00:00Z",
    topic: "room_deluxe",
    answer: "The Deluxe Room offers a king-size bed, balcony, mini bar, and partial sea view.",
    questions: [
      "What's included in the deluxe room?",
      "Tell me about your deluxe rooms.",
      "Deluxe room features?",
      "Does the deluxe room have a balcony?",
      "Is there a minibar in the deluxe room?"
    ],
    price: 139,
    priceRange: 3,
    available: true
  },
  {
    id: "RM201",
    roomNumber: 201,
    type: "Standard",
    bedType: "Queen",
    pricePerNight: 89.00,
    currency: "USD",
    maxGuests: 2,
    isAvailable: true,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV"
    ],
    images: [
      "https://example.com/images/standard-1.jpg",
      "https://example.com/images/standard-2.jpg"
    ],
    description: "Our Standard Room includes a queen-size bed, modern decor, free Wi-Fi, and a peaceful city view. Perfect for solo travelers or couples.",
    floor: 1,
    view: "City View",
    hasBalcony: false,
    smokingAllowed: false,
    createdAt: "2025-05-27T10:00:00Z",
    updatedAt: "2025-05-28T14:00:00Z",
    topic: "room_standard",
    answer: "Our Standard Room includes a queen-size bed, free Wi-Fi, and a city view.",
    questions: [
      "Tell me about the standard room.",
      "What comes with the standard room?",
      "Standard room amenities?",
      "Does the standard room have a view?",
      "Is there Wi-Fi in the standard room?"
    ],
    price: 89,
    priceRange: 2,
    available: true
  },
  {
    id: "RM301",
    roomNumber: 301,
    type: "Suite",
    bedType: "King",
    pricePerNight: 199.00,
    currency: "USD",
    maxGuests: 3,
    isAvailable: false,
    amenities: [
      "Free Wi-Fi",
      "Living Area",
      "Ocean View",
      "Luxury Bathroom",
      "Complimentary Breakfast"
    ],
    images: [
      "https://example.com/images/suite-1.jpg",
      "https://example.com/images/suite-2.jpg"
    ],
    description: "The Suite includes a separate living space, ocean view, king bed, luxury bathroom, and complimentary breakfast for a comfortable premium experience.",
    floor: 3,
    view: "Ocean View",
    hasBalcony: true,
    smokingAllowed: false,
    createdAt: "2025-05-20T09:30:00Z",
    updatedAt: "2025-05-25T12:00:00Z",
    topic: "room_suite",
    answer: "Our Suite includes a separate living area, luxury bathroom, ocean view, and complimentary breakfast.",
    questions: [
      "What does the suite offer?",
      "Tell me about your suites.",
      "Suite room features?",
      "Does the suite have a living area?",
      "Is breakfast included in the suite?"
    ],
    price: 199,
    priceRange: 4,
    available: false
  },
  {
    id: "RM401",
    roomNumber: 401,
    type: "Budget",
    bedType: "Single",
    pricePerNight: 59.00,
    currency: "USD",
    maxGuests: 1,
    isAvailable: true,
    amenities: [
      "Free Wi-Fi",
      "Desk",
      "Private Bathroom"
    ],
    images: [
      "https://example.com/images/budget-1.jpg"
    ],
    description: "A compact Budget Room ideal for solo travelers. Includes a single bed, desk, private bathroom, and free Wi-Fi.",
    floor: 4,
    view: "Courtyard View",
    hasBalcony: false,
    smokingAllowed: false,
    createdAt: "2025-05-15T08:00:00Z",
    updatedAt: "2025-05-28T11:00:00Z",
    topic: "room_budget",
    answer: "Our Budget Room is perfect for solo travelers with a cozy single bed, workspace, and free Wi-Fi.",
    questions: [
      "Do you have a budget room?",
      "What is included in the budget room?",
      "Is the budget room good for solo travelers?",
      "Does the budget room have a desk?",
      "Is Wi-Fi available in the budget room?"
    ],
    price: 59,
    priceRange: 1,
    available: true
  },
  {
    id: "RM501",
    roomNumber: 501,
    type: "Penthouse",
    bedType: "King",
    pricePerNight: 399.00,
    currency: "USD",
    maxGuests: 4,
    isAvailable: false,
    amenities: [
      "Private Rooftop",
      "Jacuzzi",
      "Panoramic View",
      "Concierge Service",
      "Luxury Interiors"
    ],
    images: [
      "https://example.com/images/penthouse-1.jpg",
      "https://example.com/images/penthouse-2.jpg"
    ],
    description: "Experience top-tier luxury in our Penthouse Suite with a private rooftop terrace, jacuzzi, and panoramic views of the city skyline.",
    floor: 5,
    view: "Panoramic City View",
    hasBalcony: true,
    smokingAllowed: false,
    createdAt: "2025-05-10T07:45:00Z",
    updatedAt: "2025-05-26T10:15:00Z",
    topic: "room_penthouse",
    answer: "The Penthouse Suite includes a private rooftop terrace, jacuzzi, and panoramic city views.",
    questions: [
      "Tell me about the penthouse suite.",
      "What does the penthouse include?",
      "Penthouse features?",
      "Does the penthouse have a jacuzzi?",
      "Is there a rooftop terrace in the penthouse?"
    ],
    price: 399,
    priceRange: 5,
    available: false
  }
];
