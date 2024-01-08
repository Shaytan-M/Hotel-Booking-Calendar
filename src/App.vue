<script>
import ModalBookingInfoVue from './components/modal/modalBookingInfo.vue';
import MainPage from './components/Table.vue';
export default {
    components: {
        MainPage: MainPage,
        ModalBookingInfoVue: ModalBookingInfoVue,
    },
    computed: {
        modalBookingStatus() {
            return this.$store.state.modalBookingInfoStatus;
        },
    },
    methods: {
        closeOverlay() {
            this.$store.state.modalBookingInfoStatus = false;
        },
    },
};
</script>

<template>
    <div id="main" :class="{ 'overlay-show': modalBookingStatus }">
        <div class="table-wrap">
            <MainPage />
        </div>
        <div class="overlay" v-if="modalBookingStatus" @click="closeOverlay()">
            <ModalBookingInfoVue />
        </div>
    </div>
</template>

<style scoped lang="scss">
#main {
    .table-wrap {
        @media (max-width: 800px) {
            overflow-y: scroll;
        }
    }
    &.overlay-show {
        overflow: hidden;
        .overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }
    }
}
</style>
