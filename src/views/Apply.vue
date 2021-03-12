<template>
    <div class="d-flex flex-column align-items-center mt-5" style="width: 400px">
        <h3>Apply</h3>
        <form @submit="onSubmit" class="d-flex flex-wrap flex-column" style="width: 100%">
            <div class="mb-3">
                <label for="fname" class="form-label">First Name</label>
                <input type="text" class="form-control" name="fname" v-model="fname" required>
            </div>
            <div class="mb-3">
                <label for="lname" class="form-label">Last Name</label>
                <input type="text" class="form-control" name="lname" v-model="lname" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" v-model="password" required>
            </div>
            <p :class="[check_pass ? 'visually-hidden' : '', 'fs-6 text-danger']">Password must be at least 8 characters, and contain digits from 0-9 and a special characters !@#$%^&*?</p>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>   
    </div>
    
</template>

<script>
import router from '../router/index'

export default {
    name: 'Apply',
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            password: '',
            check_pass: true,
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?]).*$/
            if(regex.test(this.password)){
                this.check_pass = true
                router.push({name:'ConfirmEmail', params: {email:this.email}})
            }else{
                this.check_pass = false
            }
            
            
        }
    }
}
</script>