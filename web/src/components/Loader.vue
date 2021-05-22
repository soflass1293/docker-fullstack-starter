<template>
    <div class="loader"></div>
</template>

<style lang="scss">
    .loader {
        border: 8px solid #1e7d7e;
        border-top: 8px solid #3fc7c7;
        border-radius: 50%;
        width: 30vw;
        height: 30vw;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
