export default {
  components: {
    Baseline: () => import('../../layouts/Baseline.vue'),
    ConnectCard: () => import('./ConnectCard.vue'),
  },
  data() {
    return {
      providers: [
        { id: 'github', name: 'Github', icon: 'fa-github' },
      ],
    };
  },
};
