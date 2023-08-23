export const formFields = [
  {
    label: "Your name",
    type: "text",
    name: "name",
    placeholder: "full name",
    required: true,
  },
  {
    label: "Email address",
    type: "email",
    name: "email",
    placeholder: "joe.bloggs@example.com",
    required: true,
  },
  {
    label: "Years of experience",
    type: "select",
    name: "experience",
    options: [
      "Less than a year",
      "1 - 2 years",
      "2 - 4 years",
      "4 - 7 years",
      "7 - 10 years",
      "10+ years",
    ],
    required: true,
  },
  {
    label: "Tell us more about yourself",
    type: "textarea",
    name: "message",
    placeholder: "about your self?",
  },
  {
    label: "Your CV",
    type: "file",
    name: "cv",
    required: true,
  },
];
