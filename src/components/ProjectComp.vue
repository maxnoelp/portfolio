<template>
  <div class="container">
    <h2 class="text-center mb-4 fs-1">Projects</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col text-center">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">
              <a href="https://maxnoelp.github.io/web-notes-app/">Web Notes App</a>
            </h3>
            <p class="card-text">
              A small but nice note app where notes can be saved and retrieved. Click on 'New Note'
              to create a new note, and you can create as many as you like. To delete the notes
              either individually with a double click in the note or all with 'clear all'. Here is
              the
              <a href="https://github.com/maxnoelp/web-notes-app" target="_blank">Link</a> to the
              code on GitHub.
            </p>
          </div>
          <div class="d-flex justify-content-center mb-4">
            <img
              class="web-img"
              src="../images/unknown_2024.07.09-16.27.png"
              alt="Screenshot from Web Notes App"
            />
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">
              <a href="https://github.com/maxnoelp/calculator">Calculator</a>
            </h3>
            <p class="card-text">
              Here we have a standard pocket calculator with the normal functions of a standard
              pocket calculator. The speciality here is that it is written with Vue.js and you can
              view the code for this small project
              <a href="https://maxnoelp.github.io/calculator/" target="_blank">here</a>.
            </p>
          </div>
          <div class="d-flex gap-3 justify-content-center mb-4">
            <img class="calc-pic" src="../images/calc.png" alt="Screenshot from Calculator App" />
            <img
              class="calc-pic"
              src="../images/calculator 1.png"
              alt="Screenshot from Calculator App"
            />
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">
              <a href="https://maxnoelp.github.io/music-player-w-vue/">Music Player</a>
            </h3>
            <p class="card-text">
              Here we have a music player that I programmed with Vue. You can do everything that a
              normal music player can do. It was a good exercise for me to learn something new, how
              to play or stop music. You can see the code
              <a href="https://github.com/maxnoelp/music-player-w-vue">here</a>.
            </p>
          </div>
          <div class="d-flex gap-3 justify-content-center mb-4">
            <img
              class="card-img-bottom img-fluid calc-pic"
              src="../images/music-player-1.png"
              alt="Screenshot von App"
            />
            <img
              class="card-img-bottom img-fluid calc-pic"
              src="../images/music-player-2.png"
              alt="Screenshot von App"
            />
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">
              <a href="https://github.com/maxnoelp/todo-app">Todo App with API</a>
            </h3>
            <p class="card-text">
              Here we have a simple todo app with a connection to a local API. The functions can be
              viewed in the app, filters to show or hide certain todos. There is also a button with
              which you can delete the selected todos (there is also a small extra sound).
              Furthermore, the form element is hidden and becomes visible after clicking on the '+'
              button. The todos in the list can then be ticked off and are then set to the status
              'done'. You can see the code <a href="https://github.com/maxnoelp/todo-app">here</a>.
            </p>
          </div>
          <div class="d-flex gap-3 justify-content-center mb-4">
            <img class="img-fluid calc-pic" src="../images/todo1.png" alt="Screenshot von App" />
            <img class="img-fluid calc-pic" src="../images/todo2.png" alt="Screenshot von App" />
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">
              <a href="https://github.com/maxnoelp/threadhub">ThreadHub</a>
            </h3>
            <p class="card-text">
              This project was our final project in the boot camp. We worked with a local api. There
              is a login that checks if the user is registered, if the data is entered correctly and
              if the user is an admin. This takes you to the start page, where all the threads that
              have been created are displayed and you can click on the threads to view and comment
              on them. You can delete and edit your own threads (for a certain time). There is also
              a profile page that shows your profile picture, recent threads and likes. You can view
              the code <a href="https://github.com/maxnoelp/threadhub">here</a>.
            </p>
          </div>
          <div class="d-flex gap-3 justify-content-center mb-4">
            <img class="img-fluid calc-pic" src="../images/threadhub-1" alt="Screenshot von App" />
            <img class="img-fluid calc-pic" src="../images/threadhub-1" alt="Screenshot von App" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.web-img {
  height: 180px;
  width: 250px;
}

.calc-pic {
  height: 190px;
  width: 120px;
}
</style>
