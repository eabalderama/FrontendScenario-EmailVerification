<template>
<header class="navbar navbar-expand-md navbar-dark bd-navbar" style="background-color:#663399">
    <nav class="container-xxl flex-wrap flex-md-nowrap justify-content-end">
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
            <li class="nav-item">
                <Button @btn-click="$emit('login-click')" text="Login" />
            </li>
            <li class="nav-item">
                <Button @btn-click="$emit('register-click')" text="Apply" />
            </li>
        </ul>
    </nav>
    
</header>
    
</template>
<script>
import Button from './Button'

export default {
   name: 'Header',
   components: {
       Button
   }
}
</script>
