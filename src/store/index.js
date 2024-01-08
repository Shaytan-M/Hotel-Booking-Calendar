import { createStore } from 'vuex';

const store = createStore({
    state: {
        apartments: [],
        week: [],
        currentWeekPage: 0,
        modalBookingInfoStatus: false,
        modalBookingInfo: {},
    },
    mutations: {
        changeWeek(state, arr) {
            state.week = arr;
        },
        createApartmentsArr(state, arr) {
            state.apartments = arr;
        },
    },
    actions: {
        getApartmans(context, obj) {
            let set = new Set();
            obj.forEach((element) => {
                set.add(element.roomDetails.name);
            });
            let roomTypesArray = Array.from(set);
            context.commit('createApartmentsArr', roomTypesArray);
        },
        getWeek(context, weeksOffset = 0) {
            const currentDate = new Date();
            const currentDayIndex = currentDate.getDay();
            const daysUntilMonday = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
            let targetDate = new Date(currentDate);

            if (weeksOffset < 0) {
                targetDate.setDate(
                    targetDate.getDate() - (7 * Math.abs(weeksOffset) + daysUntilMonday),
                );
            } else {
                targetDate.setDate(targetDate.getDate() + (7 * weeksOffset - daysUntilMonday));
            }
            const weekDates = [];

            for (let i = 0; i < 7; i++) {
                const day = new Date(targetDate);
                day.setDate(targetDate.getDate() + i);
                var tzoffset = day.getTimezoneOffset() * 60000;
                const formattedDate = new Date(day - tzoffset).toISOString().split('T')[0];
                weekDates.push(formattedDate);
            }
            context.commit('changeWeek', weekDates);
        },
    },
});

export default store;
