export default {
  components: {
    Baseline: () => import('../../layouts/Baseline.vue'),
  },
  data() {
    return {
      valid: true,
      origin: '',
      confirmPassword: '',
      newPassword: '',
      rules: {
        newPassword: [
          value => (value.length > 6 ? true : 'Password should be at least 6 characters'),
          value => (value !== this.origin ? true : 'Cannot be the same with origin password'),
        ],
        confirmPassword: [
          value => (value === this.newPassword ? true : 'Incorrect Confirm Password'),
        ],
      },
    };
  },
};
