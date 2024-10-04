<template>
  <nav class="navbar bg-secondary fixed-top">
    <div class="container-fluid">
      <router-link class="text-decoration-none" to="/"
        ><a class="navbar-brand" href="#" v-text="text"></a
      ></router-link>
      <button
        class="btn btn-outline-info"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="mailto:noelpmax@gmail.com">Contact Me</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/guestbook">Guestbook</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Social Media Links
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="https://www.linkedin.com/in/max-nölp-18b41a312/"
                    >LinkedIn</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.instagram.com/prinz_tengen/"
                    >Instagram</a
                  >
                </li>
                <li><a class="dropdown-item" href="https://github.com/maxnoelp">Github</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      text: '<p>Portfolio 2024</p>',
    };
  },
};
</script>
