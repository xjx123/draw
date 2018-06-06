import VueX from 'vuex';
import mutations from './mutations';


export default () => {
    const store = new VueX.Store({
        state: {
            rule: [1]
        },
        mutations
    })

    return store;
}

