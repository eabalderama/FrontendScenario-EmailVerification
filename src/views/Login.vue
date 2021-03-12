<template>
    <div class="d-flex flex-column align-items-center justify-content-center mt-5" style="width: 350px">
        <h3>Login</h3>
        <form @submit="onSubmit" class="w-100 d-flex flex-wrap flex-column" autocomplete="off">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>   
    </div>
    
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if(this.email === '' && this.password === ''){
                alert("Invalid login credentials")
            }else{
                alert("Login clicked")
            }
        }
    }
}
</script>

<style scoped>

</style>