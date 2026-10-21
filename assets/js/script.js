/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/
const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

const myTask = [
    {
        id: 1,
        titoloTask: 'Studiare JavaScript',
        completato: true,
    },
    {
        id: 2,
        titoloTask: 'Scrivere la ToDoList',
        completato: false,
    },

    {
        id: 3,
        titoloTask: 'Bere il caffè',
        completato: true,
    },

    {
        id: 4,
        titoloTask: 'Ripassare gli eventi del DOM',
        completato: false,
    },
];

/* - Intercettare la lista (#lista-task) FATTO
- Creare un array con dentro degli oggetti con testo, data formattata (stringa), priorità (alta-media-bassa) FATTO
- Scrivere gli oggetti nella lista FATTO
- intercettare lo span #contatore FATTO
- Sostituire il contenuto dello span contatore col numero di oggetti nell'array FATTO */

function aggiungiTask() {
    myTask.forEach((task) => {
        const newLi = document.createElement('li');
      
        const textSpan = document.createElement('span');
        textSpan.textContent = task.titoloTask;
        newLi.appendChild(textSpan);

        const elimina = document.createElement('button');
        elimina.textContent = 'Elimina';
        newLi.appendChild(elimina);
        

        lista.appendChild(newLi);

    })
}

function aggiornaContatore() {
    contatore.textContent = myTask.length;
}

aggiungiTask();
aggiornaContatore();