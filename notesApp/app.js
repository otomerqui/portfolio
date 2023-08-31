//Global variables
const form = document.querySelector('#form');
const noteList = document.querySelector('#note-list');
let notes = [];

//console.log(noteList);

//Event listeners

eventListeners();
function eventListeners() {

    //Usuario crea nueva nota
    form.addEventListener('submit', addNote);

    //Cuando el documento esta listo carga listado de notas guardado en local storage
    document.addEventListener('DOMContentLoaded', () => {
        notes = JSON.parse( localStorage.getItem('notes'))  || [];

        createHTML();
    });

}


//Functions
//Read text from the form and validate
function addNote(e) {
    e.preventDefault();
    //console.log('desde formulario');

    //read value from text area
    const note = document.querySelector('#note').value;
    //console.log(note);

    //Validar formulario
    if(note === '') {
        showError('A note can not be empty');        
       
        
    }

    //Añar notes a objeto con su id por tiempo de publicar nota para poder usar para borrar
    const noteObj = {
        id: Date.now(),
        text: note
    }

    notes = [...notes, noteObj];
    console.log(notes);

    //crear HTML con notes
    createHTML();


    //reiniciar el formulario
    form.reset();
}

//mostrar mensaje de error
function showError(error) {
    
    const errorMessage = document.createElement('p');
    errorMessage.innerText = error;
    errorMessage.classList.add('error');
    console.log(errorMessage);

    //Insertar mensaje 
    const content = document.querySelector('#contenido');
    content.appendChild(errorMessage);

    //Elimina mensaje después de 3 segundos
    setTimeout(() => {
        errorMessage.remove();
    },3000)
}

//Crear HTML con listado de notas
function createHTML() {
    
    cleanHTML();
    if(notes.length > 0) {
        notes.forEach( note => {
            
            //crear HTML e insertarlo en lista de nottas
            const paragraph = document.createElement('P');
            paragraph.innerText = note.text;
            noteList.appendChild(paragraph);

            //Agregar botón para eliminr nota
            const btnDelete = document.createElement('a');
            btnDelete.innerText = 'X'
            btnDelete.classList.add('delete-note');
            paragraph.appendChild(btnDelete);

            //Añadir function para borrar nota
            btnDelete.onclick = () => {
                deleteNote(note.id);
            }      


        });
    }
    syncStorage();
}

//Agregar notas actuales a localStorage
function syncStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Eliminar una nota
function deleteNote(id) {
   
    notes = notes.filter( note => note.id !== id);
    createHTML();
}

function cleanHTML() {
    while(noteList.firstChild) {
        noteList.removeChild(noteList.firstChild);
    }
}