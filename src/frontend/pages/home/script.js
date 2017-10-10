import { mapState } from 'vuex';

export default {
  components: {
    Baseline: () => import('../../layouts/Baseline.vue'),
  },
  computed: {
    ...mapState({
      avatarUrl: state => state.params.user.avatar_url,
      displayName: state => state.params.user.display_name,
      email: state => state.params.user.email,
      username: state => state.params.user.username,
    }),
  },
};
