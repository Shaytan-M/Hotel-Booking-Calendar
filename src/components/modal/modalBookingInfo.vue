<script>
export default {
    computed: {
        bookingInfo() {
            return this.$store.state.modalBookingInfo;
        },
    },
};
</script>

<template>
    <div class="modal-booking-info" @click.stop="() => {}">
        <div class="guest">
            <h2>{{ bookingInfo.name }}</h2>
            <p>Phone: {{ bookingInfo.phone }}</p>
            <p>{{ bookingInfo.email }}</p>
        </div>
        <div class="apartment">
            <p>{{ bookingInfo.typeOfApartments }}</p>
            <p>Date of entry: {{ bookingInfo.start }}</p>
            <p>Departure date: {{ bookingInfo.end }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.modal-booking-info {
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #a8a7a7d0;
    border-radius: 20px;
    padding: 20px;
    h2 {
        color: #000;
        font-weight: 600;
    }
    p {
        color: #000;
    }
    .guest {
        margin-bottom: 30px;
    }
}
</style>
