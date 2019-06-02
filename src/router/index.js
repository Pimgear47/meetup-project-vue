import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Meetup from '@/components/Meetup/Meetup'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/meetups',
            name: 'Meetups',
            component: Meetups
        },
        {
            path: '/meetups/new',
            name: 'CreateMeetup',
            component: CreateMeetup
        },
        {
            path: '/meetups/:id',
            name: 'Meetup',
            props: true,
            component: Meetup
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/signup',
            name: 'Sign up',
            component: Signup
        },
        {
            path: '/signin',
            name: 'Sign in',
            component: Signin
        }
    ],
    mode: 'history'
})