<script setup lang="ts">
import { useRouter } from "vue-router";
import AppForm from "./../components/AppForm.vue";


const submitForm = (formApp) => {
  // redirect to `/success?` page with query params from form data (name, age, role)
}
</script>

<template>
  <app-form @submitApp="submitForm" />
</template>
