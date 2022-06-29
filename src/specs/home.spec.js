import { mount } from '@vue/test-utils';
import Home from '../views/Home.vue';
import axios from 'axios'
import Vuex from 'vuex'
import SearchBar from '../components/search-bar';
import RecipeList from '../components/recipe-list';

const mockRecipieList = [
    {   idMeal: '52977',
        strMeal: 'Corba',
        strCategory: 'Side',
        strArea: 'Turkish',
        strInstructions: 'Mockdata',
        strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/58oia61564916529.jpg',
        strTags: 'Soup',
        strYoutube: 'https:\/\/www.youtube.com\/watch?v=VVnZd8A84z4',
        strIngredient1: 'Lentils',
        strIngredient2: 'Onion',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '1 cup' ,
        strMeasure2: '1 large',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '' ,
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '' ,
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: 'https:\/\/findingtimeforcooking.com\/main-dishes\/red-lentil-soup-corba\/',
     }
]
jest.spyOn(axios, 'get').mockResolvedValue(mockRecipieList)


describe('Home.vue', () => {
    let store
    let actions
    let state
    let getters
    let wrapper
    const recipeMock = jest.fn();
    recipeMock.mockReturnValue(mockRecipieList);
    beforeEach(() => {
        state = { data: {recipes: []} }
        actions = {
            getRecipes: jest.fn()
        }
        jest.spyOn(actions, 'getRecipes').mockResolvedValue(mockRecipieList)
        getters = {
            recipes: recipeMock,
        }
        store = new Vuex.Store({
            state,
            actions,
            getters
        })
        wrapper = mount(Home, {
            global: {
                provide: {
                    store: store
                },
            },
        })
    })

    test('Home component', () => {
        const myRecipes = wrapper.get('[data-test=myrecipes]')
        expect(myRecipes.text()).toBe('My Recipes')
        expect(actions.getRecipes.mock.calls).toHaveLength(1)
        expect(wrapper.vm.recipieData).toEqual(mockRecipieList)
    })

    test('check if child SearchBar component exists', ()=>{
        expect(wrapper.getComponent(SearchBar)).toBeDefined();
    })

    test('check if child Recipe List component exists', ()=>{
        expect(wrapper.getComponent(RecipeList)).toBeDefined();
    })
})