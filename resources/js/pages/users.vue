<template>
    <h1>
        Users
    </h1>
</template>

<script>
export default {
    mounted() {
        axios.get('api/users')
        .then((response) => {
            console.log(response.data)
        })
    },
}
</script>
