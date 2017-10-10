import axios from 'axios';

export default {
  components: {
    Baseline: () => import('../../layouts/Baseline.vue'),
    ConnectCard: () => import('./ConnectCard.vue'),
  },
  data() {
    return {
      providers: null,
    };
  },
  mounted() {
    axios.get('/api/v1/providers')
      .then(({ data }) => {
        this.providers = data;
      });
  },
};
