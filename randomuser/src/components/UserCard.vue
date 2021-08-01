<template>
  <div class="card border-primary">
    <div class="card-body text-center">
      <img
        :src="user.picture?.large"
        height="150"
        width="150"
        class="rounded-circle img-thumbnail border-danger zoomIn"
      />
      <div class="card-title text-primary">
        <h1>
          <span class="pl-2">{{ user.name?.title }}</span>
          <span class="pl-2">{{ user.name?.first }}</span>
          <span class="pl-2">{{ user.name?.last }}</span>
        </h1>
      </div>
      <i class="fa fa-envelope" aria-hidden="true"></i>{{ user.email }}
      <br />
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span class="pl-2">{{ user.location?.street.name }},</span>
      <span class="pl-2">{{ user.location?.city }},</span>
      <span class="pl-2">{{ user.location?.state }}-</span>
      <span class="pl-2">{{ user.location?.postcode }}</span>
      <br />
      <i class="fa fa-phone" aria-hidden="true"></i>{{ user.phone }}
      <br /><br />
      <p class="text-muted">
        <span class="pl-2">Registered On: </span>
        <span class="pl-2">{{ formatedDate(user.registered?.date) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "UserCard",
  props: ["user"],
  methods: {
    formatedDate: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>
</style>
