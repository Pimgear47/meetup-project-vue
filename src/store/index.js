import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: "http://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg",
                id: "asdfff1ssd",
                title: "Meetup in New York",
                date: new Date,
                location: 'The New York tower',
                description: 'If you love New York, music and people. Join with us!'
            },
            {
                imageUrl: "https://www.sbb.ch/content/dam/internet/sharedimages/ff-uebersichtsseiten/Lyria.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
                id: "asdsadsadff1ssd",
                title: "Meetup in Paris",
                date: new Date,
                location: 'The paris in love',
                description: 'Paris is the capital of France and the country largest city. It is situated on the river Seine, in northern France, at the heart of the Île-de-France region. If you love paris, music and people. Join with us!'
            },
            {
                imageUrl: "https://ramboll.com/-/media/images/environ/countries/singapore-merlion-getty-1360x765.jpg?h=765&la=en&w=1360",
                id: "asdffdaff1ssd",
                title: "Meetup in Singapore",
                date: new Date,
                location: 'The spy cafe',
                description: 'If you love Singapore, music and people. Join with us!'
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