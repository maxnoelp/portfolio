<template>
  <div><NavBarComp /></div>
  <!-- Div für Passwort eingabe -->
  <div class="blur-con" v-if="showPassInput">
    <form class="showpop" action="">
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn-close mb-3"
          aria-label="Close"
          @click="closeInput"
        ></button>
      </div>
      <label for="inputPassword5" class="form-label">Password</label>
      <input
        type="password"
        id="inputPassword5"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="input"
      />
      <!-- Div für die Bestätigung zum löschen und weiterleiten zum passwort -->
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-danger mt-3" @click="checkPassword(this.selectedBook)">
          Delete
        </button>
      </div>
    </form>
  </div>
  <div class="blur-con" v-if="deleteField == true">
    <div class="showpop">
      <div>
        <p class="text-center">Do you want to delete?</p>
      </div>
      <div class="d-flex justifycontent-between gap-5">
        <button type="button" class="btn btn-outline-danger fs-5" @click="checkInput">
          Delete
        </button>
        <button type="button" class="btn btn-outline-success fs-5" @click="clickDelete">
          No Delete
        </button>
      </div>
    </div>
  </div>
  <!-- Button um Formelement sichtbar zu machen -->
  <div class="margin">
    <div class="ms-5" v-if="!showForm">
      <button type="button" class="btn btn-secondary" @click="showBool">Post</button>
      <p v-if="this.showOk">{{ okMessage }}</p>
    </div>
  </div>
  <!-- Form element um einen Eintrag zu erstellen -->
  <form v-if="showForm" class="container-sm">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Please Enter your Name..."
        v-model="newBook.name"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Add some Text about me or my Site</label
      >
      <textarea
        v-model="newBook.text"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Date</label>
      <input
        type="date"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="jjjj.mm.tt"
        v-model="newBook.date"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Social-Media-Link</label>
      <input
        type="link"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Please Enter one of your Social-Media-Link..."
        v-model="newBook.link"
      />
    </div>
    <div class="mb-3 d-flex justify-content-end align-items-center gap-3">
      <p v-if="showErr" class="mb-0 text-danger" style="font-weight: 700">{{ this.errMessage }}</p>
      <button type="button" class="btn btn-success" @click="saveBook">Success</button>
    </div>
  </form>
  <!-- Div für die dynamische Erstellung der Einträge -->
  <div class="d-flex justify-content-center align-items-center">
    <div class="container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <div class="margin col-lg-4 col-md-6 col-sm-12" v-for="book in books" :key="book.id">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn-close mb-3"
                aria-label="Close"
                :data-id="book.id"
                @click="clickDelete(book.id)"
              ></button>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <h3 class="card-title text-decoration-underline">{{ book.name }}</h3>
              <p class="card-date bg-secondary code-tag" style="font-size: 0.75rem">
                {{ book.date }}
              </p>
            </div>

            <p class="card-text fs-5">{{ book.text }}</p>
            <a :href="book.link" target="_blank" class="card-link btn btn-secondary">Profil</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <div class="fixed-bottom"><FooterComp /></div>
</template>
<script>
import NavBarComp from '@/components/NavBarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: { NavBarComp, FooterComp },
  data() {
    return {
      apiUrl: import.meta.env.VITE_API_URL,
      books: [],
      newBook: {
        name: '',
        text: '',
        date: '',
        link: '',
      },
      showForm: false,
      errMessage: 'All fields must be are filled',
      okMessage: 'Great, thanks for your comment <3',
      showOk: false,
      showErr: false,
      deleteField: false,
      fieldblow: 'login',
      selectedBook: null,
      passphrase: 'portfolio',
      input: '',
      showPassInput: false,
    };
  },
  methods: {
    showBool() {
      this.showForm = !this.showForm;
    },
    saveBook() {
      //   localStorage.setItem('bookData', JSON.stringify(this.newBook));
      //   this.showForm = !this.showForm;
      fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newBook),
      }).then((response) => {
        if (!response.ok) {
          this.showErr = !this.showErr;
        } else {
          this.showOk = !this.showOk;
          this.showForm = !this.showForm;
          this.resetForm();
          this.refreshPage();
          return response.json;
        }
      });
    },
    closeInput() {
      this.showPassInput = !this.showPassInput;
    },
    checkInput() {
      this.showPassInput = !this.showPassInput;
      this.deleteField = !this.deleteField;
    },
    clickDelete(bookId) {
      this.selectedBook = bookId;
      this.deleteField = !this.deleteField;
      console.log(this.selectedBook);
    },
    checkPassword(bookId) {
      if (this.input === this.passphrase) {
        this.deleteBook(bookId);
      } else {
        console.error('Falsche Passwort');
      }
    },
    deleteBook(bookId) {
      fetch(`${import.meta.env.VITE_API_URL}${bookId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log('Buch erfolgreich gelöscht.');
            // Option 1: Seite neu laden
            location.reload();
            this.selectedBook = null;
            // Option 2: Daten im Frontend aktualisieren (z.B. mit Vuex oder einer Methode, um die Buchliste neu zu laden)
            // this.loadBooks(); // Beispiel für das erneute Laden der Buchdaten
          } else {
            console.error('Fehler beim Löschen des Buchs:', response.statusText);
          }
        })
        .catch((error) => {
          console.error('Fehler:', error);
        });
    },
  },

  refreshPage() {
    window.location.reload();
  },
  resetForm() {
    this.newBook = {
      name: '',
      text: '',
      date: '',
      link: '',
    };
  },
  async created() {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    console.log(data);
    this.books = await data;
    console.log(this.books.id);
  },
};
</script>
