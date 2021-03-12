<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <h3 class="fw-bolder mb-4">Verify Email</h3>
        <img src="../assets/email.png" alt="">
        <b>A verification email has been sent</b>
        <p class="text-center" >Please click on the link in the email sent to <span class="fw-bold">{{email}}</span></p>
        <p class="w-75 border-top text-center pb-4" style="border-color: #eeeeee">For improved security, your verification link will expire after 6 hours. If it has expired, you will be directed to this page where you can resend email.</p>
        <form autocomplete="off" style="width: 400px">
            <input type="text" class="form-control text-center fw-bold fs-4 text-uppercase" v-model="code" minlength="4" maxlength="4">
            <div class="d-flex flex-row justify-content-between mt-4">
                <button class="rounded-pill px-4 py-2" style="color: #663399" @click="resendCode">RESEND NOW</button>
                <button class="rounded-pill px-4 py-2" style="color: white; background-color: #663399" @click="submitCode">SUBMIT CODE</button>
            </div>
        </form>
        <p class="mt-5">Not your correct address? <a @click="updateEmail" href="#"><u>Update your email address</u></a></p>
    </div>
</template>

<script>
import Button from '../components/Button'
import router from '../router/index'

export default {
    name: 'ConfirmEmail',
    props: {
        email: String
    },
    data() {
        return {
            code: '',
        }
    },
    components: {
        Button
    },
    methods: {
        resendCode(e) {
            e.preventDefault();
            alert("Verification code has been sent. Please check your email")
        },
        submitCode(e) {
            e.preventDefault();
            if(this.code.length === 4){
                alert("Email verified")
            }else{
                alert("Invalid Code")
            }
            
        },
        updateEmail(e) {
            router.back()
        }
    },
    created() {
        console.log(this.email)
        if(this.email === '' || this.email === undefined || this.email === null){
            router.push('apply')
        }
    }
}
</script>

<style scoped>
input {
    border-radius: 12px;
    background-color: #eeeeee;
    letter-spacing: 4px;
    color: #663399;
}

button {
    border-color: #663399;
    width: 180px;
}
</style>