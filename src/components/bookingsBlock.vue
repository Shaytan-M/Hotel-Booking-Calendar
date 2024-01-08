<script>
export default {
    props: {
        closeBooking: Array,
        date: String,
    },
    methods: {
        typeCloseBlock(info) {
            this.$store.state.modalBookingInfoStatus = true;
            this.$store.state.modalBookingInfo = info;
        },
    },
};
</script>
<!-- :class="typeCloseBlock()" -->
<template>
    <div class="date">
        <div
            class="bg-full"
            @click="
                (e) => {
                    typeCloseBlock(closeBooking[0]);
                }
            "
            v-if="
                closeBooking?.length == 1 &&
                date !== closeBooking[0].start &&
                date !== closeBooking[0].end
            "
        ></div>
        <div
            class="bg-left-half"
            v-if="closeBooking?.find((item) => item.end == date)"
            @click="typeCloseBlock(closeBooking?.find((item) => item.end == date))"
        ></div>
        <div
            class="bg-right-half"
            v-if="closeBooking?.find((item) => item.start == date)"
            @click="typeCloseBlock(closeBooking?.find((item) => item.start == date))"
        ></div>
    </div>
</template>
<style scoped lang="scss">
.date {
    position: relative;
    .bg-full {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(1, 1, 160, 0.603);
        z-index: 5;
        cursor: pointer;
    }
    .bg-right-half {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 48%;
        height: 100%;
        background: rgba(1, 1, 160, 0.603);
        z-index: 5;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        cursor: pointer;
    }
    .bg-left-half {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 48%;
        height: 100%;
        background: rgba(1, 1, 160, 0.603);
        z-index: 5;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        cursor: pointer;
    }
}
</style>
