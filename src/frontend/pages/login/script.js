import { mapState } from 'vuex';

export default {
  components: {
    BodyDisplay: () => import('../../layouts/BodyDisplay.vue'),
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    nextUrl() {
      return 'next' in this.query ? this.query.next : '/';
    },
    errorMessage() {
      if (!('error' in this.query)) {
        return null;
      }

      switch (this.query.error) {
        case 'not_found':
          return 'Seems like some mistake in the username';
        case 'not_match':
          return 'Seems like some mistake in the password';
        default:
          return 'Something not going right';
      }
    },
    ...mapState({
      query: state => state.route.query,
    }),
  },
};
