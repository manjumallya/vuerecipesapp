import { mount } from '@vue/test-utils';
import searchBar from "../components/search-bar";

test('emits an event when clicked', () => {
    const wrapper = mount(searchBar)

    wrapper.find('input').trigger('change')
    wrapper.find('input').trigger('input')

    expect(wrapper.emitted()).toHaveProperty('search')
})