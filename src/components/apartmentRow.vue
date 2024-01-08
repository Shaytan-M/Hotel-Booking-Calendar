<script>
import bookingBlock from '@/components/bookingsBlock.vue';
export default {
    data() {
        return {};
    },
    props: {
        apartmentName: String,
        week: Array,
        bookings: Object,
    },
    components: {
        bookingBlock: bookingBlock,
    },
    methods: {
        closeBooking(date) {
            let filterArr = this.bookings.filter(
                (element) => element.bookingDays.find((e) => e == date) !== undefined,
            );
            if (filterArr.length > 0) {
                return filterArr;
            }
        },
    },
    beforeMount() {
        this.bookings.forEach((element) => {
            const startDate = new Date(element.start);
            const endDate = new Date(element.end);
            const dateArray = [];
            let currentDate = startDate;
            while (currentDate <= endDate) {
                var tzoffset = currentDate.getTimezoneOffset() * 60000;
                dateArray.push(new Date(currentDate - tzoffset).toISOString().split('T')[0]);
                currentDate.setDate(currentDate.getDate() + 1);
            }
            element.bookingDays = dateArray;
        });
    },
};
</script>
<template>
    <div class="apartment">
        <div class="apartment__name">
            <h3>{{ apartmentName }}</h3>
        </div>
        <div class="apartment__status-on-date">
            <bookingBlock
                v-for="(item, index) in week"
                :key="index"
                :closeBooking="closeBooking(item)"
                :date="item"
            />
        </div>
    </div>
</template>
