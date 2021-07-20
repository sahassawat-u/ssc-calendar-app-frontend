import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events:[],
        isLoggedIn: false,
        username: null,
        name: null,
        role: "",
    },
    getters:{
        EVENTS: state => state.events
    },
    mutations: {
        setIsLoggedIn(state, isLoggedIn){
            state.isLoggedIn = isLoggedIn;
        },
        setUsername(state, username){
            state.username = username;
        },
        setName(state, name){
            state.name = name;
        },
        setRole(state, role){
            state.role = role;
        },
        addEvent: (state, event) => {
            console.log(event);
            state.events.push(event)
        },
        updateEvent: (state, {id, title, start, end}) => {
            let index = state.events.findIndex(_event => _event.id == id)
            state.events[index].title = title;
            state.events[index].start = start;
            state.events[index].end = end;
        }
    },
    actions: {
        setLoggedInUser({commit}, payload){
            commit('setIsLoggedIn', payload.loggedIn);
            commit('setUsername', payload.username);
            commit('setName', payload.name);
            commit('setRole', payload.role);
            // console.log(payload);
            // state.isLoggedIn = payload.loggedIn;
            // state.username = payload.username;
            // state.name = payload.name;
            // state.role = payload.role;
        },
        clearUser({commit}){
            commit('setIsLoggedIn', false);
            commit('setUsername', null);
            commit('setName', null);
            commit('setRole', "");
            // state.isLoggedIn = false;
            // state.username = null;
            // state.name = null;
            // state.role = "";
        }
    },
    modules: {},
})