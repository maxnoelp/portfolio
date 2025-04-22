<template>
<nav class="navbar navbar-expand-lg navbar-light p-3">
      <div class="container-fluid">
        <h3 class="fs-3">Portfolio</h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#projects">Projekte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#skills">Skills</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Social Media
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://www.instagram.com/prinz_tengen/"><i class="bi bi-instagram me-2"></i>Instagram</a></li>
                <li><a class="dropdown-item" href="https://www.linkedin.com/in/max-n%C3%B6lp-18b41a312/"><i class="bi bi-linkedin me-2"></i>Linkedin</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
            <li class="nav-item mx-2">
              <a class="nav-link text-dark h5 fs-5" href="https://github.com/maxnoelp" target="blank"><i class="bi bi-github"></i></a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark h5 fs-5" href="" target="blank"><i class="bi bi-twitter-x"></i></a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-danger h5 fs-5" href="mailto:noelpmax@gmail.com" target="blank"><i class="bi bi-google"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  
}
</script>
