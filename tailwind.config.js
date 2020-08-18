module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        "7": "1.75rem",
        "9": "2.25rem",
        "13": "3.25rem",
        "14": "3.50rem",
        "15": "3.75rem",
        "72": "18rem",
      },
      opacity: {
        "80": "0.80",
        "85": "0.85",
      },
      padding: {
        "5/6": "83.3333333%",
      },
      maxWidth: {
        xxs: "16rem",
      },
    },
    customForms: (theme) => ({
      default: {
        select: {},
        checkbox: {
          height: theme("spacing.6"),
          width: theme("spacing.6"),
          iconColor: theme("colors.white"),
        },
        radio: {
          height: theme("spacing.6"),
          width: theme("spacing.6"),
        },
      },
    }),
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: [
      "responsive",
      "hover",
      "active",
      "focus",
      "group-hover",
      "group-focus",
    ],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
