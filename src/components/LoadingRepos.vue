<script setup>

</script>
<template>
    <section :class="{ loadingPage: true }">
        <section>Loading ...</section>
        <section className="spinner-container">
            <section className="loading-spinner"></section>
        </section>
    </section>
</template>
<style>
.loadingPage {
    display: flex;
    height: 100vh;
    align-items: center;
    flex-flow: column wrap;
    justify-content: center;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #050105;
    /* Light grey */
    border-top: 10px solid #92118d;
    /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
}</style>