import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: "http://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg",
                id: "asdfff1ssd",
                title: "Meetup in New York",
                date: '2019-07-17'
            },
            {
                imageUrl: "https://www.sbb.ch/content/dam/internet/sharedimages/ff-uebersichtsseiten/Lyria.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
                id: "asdsadsadff1ssd",
                title: "Meetup in Paris",
                date: '2019-07-19'
            },
            {
                imageUrl: "https://ramboll.com/-/media/images/environ/countries/singapore-merlion-getty-1360x765.jpg?h=765&la=en&w=1360",
                id: "asdffdaff1ssd",
                title: "Meetup in Singapore",
                date: '2019-07-23'
            }
        ],
        user: {
            id: 'sdasdasf52d1',
            registeredMeetups: ['asdsadsadff1ssd']
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                    title: payload.title,
                    location: payload.location,
                    imageUrl: payload.imageUrl,
                    description: payload.description,
                    date: payload.date,
                    id: 'sadasfkfosafofasip'
                }
                // Reach out to firebase and store it
            commit('createMeetup', meetup)
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            });
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
        }
    }
})