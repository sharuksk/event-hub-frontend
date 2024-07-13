// src/mockData.js
import image1 from "../assets/user/download.jpg";
export const mockData = {
  serviceData: [
    {
      id: 1,
      type: "venue",
      name: "Venue 1",
      location: "Location 1",
      rent: "$1000",
      displayImage: image1,
      availableDates: ["2024-07-12", "2024-07-13"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 2,
      type: "venue",
      name: "Venue 2",
      location: "Location 2",
      rent: "$2000",
      displayImage: [""],
      availableDates: ["2024-07-14", "2024-07-15"],
      description: "This is a detailed description of Venue 2.",
      Detailedimages: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
    },
    {
      id: 3,
      type: "venue",
      name: "Venue 3",
      location: "Location 3",
      rent: "$1000",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 3.",
      Detailedimages: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
    },
    {
      id: 4,
      type: "catering",
      name: "Catering 1",
      location: "City A",
      rent: "$500",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 5,
      type: "catering",
      name: "Catering 2",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 6,
      type: "photography",
      name: "Photography 1",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 7,
      type: "photography",
      name: "Photography 2",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 8,
      type: "decoration",
      name: "Decoration 1",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 9,
      type: "decoration",
      name: "Decoration 2",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 10,
      type: "organizer",
      name: "Organizer 1",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },
    {
      id: 11,
      type: "organizer",
      name: "Organizer 2",
      location: "City B",
      rent: "$700",
      displayImage: [""],
      availableDates: ["2024-07-16", "2024-07-17"],
      description: "This is a detailed description of Venue 1.",
      Detailedimages: [image1, image1, image1],
    },

    // Add more serviceData as needed
  ],
};
