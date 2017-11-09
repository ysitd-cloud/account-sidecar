import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

import ConnectCard from '../../../src/frontend/pages/connect/ConnectCard.vue';

/* global describe, it, expect */

describe('ConnectCard.vue', () => {
  it('matches snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(ConnectCard, {
      propsData: {
        id: 'foo',
        icon: 'bar',
        name: 'Test',
      },
    });

    renderer.renderToString(wrapper.vm, (e, str) => {
      if (e) throw new Error(e);
      expect(str).toMatchSnapshot();
    });
  });
});
