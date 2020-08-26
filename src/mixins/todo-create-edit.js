export default {
  components: {
    "model-header": require("components/shared/modal/Header").default,
    "input-text": require("components/shared/form/InputText").default,
    "input-date": require("components/shared/form/InputDate").default,
    "input-time": require("components/shared/form/InputTime").default,
    "input-radio": require("components/shared/form/InputRadio").default,
    "model-footer": require("components/shared/modal/Footer").default
  },
  data() {
    return {
      form: {
        title: "",
        dueDate: "",
        dueTime: "",
        priority: "none",
        status: false
      },
      inputOptions: {
        none: { name: "Regular", color: "grey" },
        low: { name: "Remember", color: "blue" },
        mid: { name: "Important", color: "amber" },
        high: { name: "Very Important", color: "red" }
      }
    };
  },
  methods: {
    validateFormInput() {
      if (this.form.dueDate == "") {
        this.form.dueTime == "";
      }
      this.$refs.title.$refs.inputText.validate();
      if (!this.$refs.title.$refs.inputText.hasError) {
        this.submitForm();
        this.$emit("closeModal");
      }
    },
    resetForm() {
      this.form = {};
      this.$refs.title.$refs.inputText.resetValidation();
    }
  }
  // let dateTarget = new Date(this.form.dueDate)
  // console.log('Target Date: ' + this.form.dueDate);

  // let dateMin = Date.now();
  // let dateMax = date.addToDate(Date.now(), { days: 7, month: 1 });
  // console.log('From: ' + this.dateMin);
  // console.log('To: ' + this.dateMax);
  // // **strictly** (i.e. exclusive range)
  // if (date.isBetweenDates(dateTarget, this.dateFrom, this.dateTo)) {
  //   console.log('ok');
  // } else {
  //   console.log('Not ok');
  // }
};
