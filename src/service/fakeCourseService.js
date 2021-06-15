//BADGES:[BESTSELLER, PG DIPLOMA PROGRAM etc]
//STATUS:[SOLD OUT, FILLING FAST, NORMAL]
//discount in %

const courses = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "AWS Certification Training - Solutions Architect",
    badge: "BEST SELLER",
    students: 40150,
    rating: 4.4,
    price: 21000,
    discount: 10,
    skin: "(240deg,#bdd377,#09adef)",
    details: ["introduction", "deployment", "experience"],
    batch: [
      {
        date: "2021-06-14",
        status: "SOLD OUT",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
      {
        date: "2021-06-19",
        status: "FILLING FAST",
        timings: "08:30 PM to 10:30 PM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-21",
        status: "NORMAL",
        timings: "08:30 PM to 10:30 PM (IST)",
      },
      {
        date: "2021-07-17",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-19",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7yuybccd471815",
    title: "Devops Certification Training",
    badge: "BEST SELLER",
    students: 38600,
    rating: 4.5,
    skin: "(242deg, rgb(202, 73, 99), rgb(113, 26, 163))",
    price: 19000,
    discount: 10,
    details: ["introduction", "deployment", "experience"],

    batch: [
      {
        date: "2021-06-14",
        status: "SOLD OUT",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
      {
        date: "2021-06-19",
        status: "FILLING FAST",
        timings: "08:30 PM to 10:30 PM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-21",
        status: "NORMAL",
        timings: "08:30 PM to 10:30 PM (IST)",
      },
      {
        date: "2021-07-17",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-19",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
    ],
  },
  {
    _id: "5b21ca3eet4r6fbccd471815",
    title: "Python Certification Training",
    badge: "BEST SELLER",
    students: 40150,
    rating: 4.4,
    skin: "(240deg,#d677c0,#41bbbd)",
    price: 17995,
    discount: 10,

    batch: [
      {
        date: "2021-06-14",
        status: "SOLD OUT",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
      {
        date: "2021-06-19",
        status: "FILLING FAST",
        timings: "08:30 PM to 10:30 PM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-21",
        status: "NORMAL",
        timings: "08:30 PM to 10:30 PM (IST)",
      },
      {
        date: "2021-07-17",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-19",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
    ],
  },
  {
    _id: "5b21ca3eet3f6fbccd471815",
    title: "React with Redux Certification Training",
    badge: "",
    students: 40150,
    rating: 4.4,
    price: 16550,
    skin: "(240deg,#4fcdce,#975ae0)",
    discount: 12,
    details: ["introduction", "components", "experience"],

    batch: [
      {
        date: "2021-06-14",
        status: "SOLD OUT",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
      {
        date: "2021-06-19",
        status: "FILLING FAST",
        timings: "08:30 PM to 10:30 PM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-21",
        status: "NORMAL",
        timings: "08:30 PM to 10:30 PM (IST)",
      },
      {
        date: "2021-07-17",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
        info: "Weekend Batch",
      },
      {
        date: "2021-06-19",
        status: "NORMAL",
        timings: "07:00 AM to 09:00 AM (IST)",
      },
    ],
  },
];

export function getCourses() {
  return courses;
}
