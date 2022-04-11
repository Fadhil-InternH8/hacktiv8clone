/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  desktop: {
    icons: [
      {
        name: "facebook",
        url: "https://facebook.com/hacktiv8id",
      },
      {
        name: "instagram",
        url: "https://instagram.com/hacktiv8id",
      },
      {
        name: "youtube",
        url: "https://youtube.com/HACKTIV8",
      },
      {
        name: "twitter",
        url: "https://twitter.com/hacktiv8id",
      },
    ],
    columns: [
      {
        title: "bootcamp",
        menu: [
          {
            label: "Full Stack Immersive",
            path: "/full-stack-javascript-immersive",
          },
          {
            label: "Data Science",
            path: "/data-science",
          },
          {
            label: "Digital Marketing",
            path: "/digital-marketing-bootcamp",
          },
          {
            label: "HacktivKidz",
            path: "https://kidz.hacktiv8.com",
          },
        ],
      },
      {
        title: "courses",
        menu: [
          {
            label: "Agile Scrum",
            path: "/agile-scrum",
          },
          {
            label: "Android With Java Native",
            path: "/android-with-java-native",
          },
          {
            label: "Digital Marketing",
            path: "/digital-marketing",
          },
          {
            label: "Fundamental UI/UX",
            path: "/fundamental-ui-ux-design",
          },
          {
            label: "Intro to NodeJS",
            path: "/intro-to-nodejs",
          },
          {
            label: "Product Owner",
            path: "/product-owner",
          },
          {
            label: "Python for Data Science",
            path: "/intro-to-python-for-data-science",
          },
          {
            label: "React & React Native Basic",
            path: "/react-and-react-native-basic",
          },
          {
            label: "Web Developer Program",
            path: "/web-developer-program",
          },
          {
            label: "Web Services with Golang",
            path: "/scalable-web-services-with-golang",
          },
        ],
      },
      {
        title: "about",
        menu: [
          {
            label: "Admission Info",
            path: "/admission",
          },
          {
            label: "Income Share Agreement",
            path: "/income-share-agreement",
          },
          {
            label: "Financial Partner",
            path: "/financial-partner",
          },
          {
            label: "Outcomes",
            path: "/outcomes",
          },
          {
            label: "Portfolio",
            path: "/portfolio",
          },
          {
            label: "Group & Referral Program",
            path: "/referral",
          },
          {
            label: "Blog",
            target: "_blank",
            path: "https://blog.hacktiv8.com/",
          },
          {
            label: "Careers",
            path: "/careers",
          },
        ],
      },
      {
        title: "corporate",
        menu: [
          {
            label: "Hire Our Grads",
            path: "/hire-our-grads",
          },
          {
            label: "Corporate Training",
            path: "/corporate-training",
          },
        ],
      },
    ],
  },
  mobile: [
    {
      parent: "bootcamp",
      child: [
        {
          title: "",
          menu: [
            {
              label: "Full Stack Immersive",
              path: "/full-stack-javascript-immersive",
            },
            {
              label: "Data Science",
              path: "/data-science",
            },
            {
              label: "Digital Marketing",
              path: "/digital-marketing-bootcamp",
            },
            {
              label: "HacktivKidz",
              path: "https://kidz.hacktiv8.com",
            },
          ],
        },
      ],
    },
    {
      parent: "professional development",
      child: [
        {
          title: "into programming",
          menu: [
            {
              label: "Intro to NodeJS",
              path: "/intro-to-nodejs",
            },
            {
              label: "Python for Data Science",
              path: "/intro-to-python-for-data-science",
            },
            {
              label: "Web Developer Program",
              path: "/web-developer-program",
            },
          ],
        },
        {
          title: "development",
          menu: [
            {
              label: "Android With Java Native",
              path: "/android-with-java-native",
            },
            {
              label: "React & React Native Basic",
              path: "/react-and-react-native-basic",
            },
            {
              label: "Web Services with Golang",
              path: "/scalable-web-services-with-golang",
            },
          ],
        },
        {
          title: "product",
          menu: [
            {
              label: "Agile Scrum",
              path: "/agile-scrum",
            },
            {
              label: "Digital Marketing",
              path: "/digital-marketing",
            },
            {
              label: "Fundamental UI/UX",
              path: "/fundamental-ui-ux-design",
            },
            {
              label: "Product Owner",
              path: "/product-owner",
            },
          ],
        },
      ],
    },
    {
      parent: "about",
      child: [
        {
          title: "admission",
          menu: [
            {
              label: "Admission Info",
              path: "/admission",
            },
            {
              label: "Income Share Agreement",
              path: "/income-share-agreement",
            },
            {
              label: "Financial Partner",
              path: "/financial-partner",
            },
            {
              label: "Group & Referral Program",
              path: "/referral",
            },
          ],
        },
        {
          title: "students",
          menu: [
            {
              label: "Outcomes",
              path: "/outcomes",
            },
            {
              label: "Portfolio",
              path: "/portfolio",
            },
          ],
        },
        {
          title: "Jobs",
          menu: [
            {
              label: "Careers",
              path: "/careers",
            },
          ],
        },
      ],
    },
    {
      parent: "corporate",
      child: [
        {
          title: "",
          menu: [
            {
              label: "Hire Our Grads",
              path: "/hire-our-grads",
            },
            {
              label: "Corporate Training",
              path: "/corporate-training",
            },
          ],
        },
      ],
    },
    {
      parent: "prakerja",
      path: "/prakerja",
      child: [],
    },
  ],
};
