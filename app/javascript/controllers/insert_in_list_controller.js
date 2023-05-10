import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ['items', 'form']
  connect() {
    // console.log(`connected to insert_in_list_controller`)
    // console.log(`controller name :`, this.element)
    // console.log(`form :`, this.formTarget)
    // console.log(`items :`, this.itemsTarget)


    // renvois le contenu du meta (name= ... et content=...)
    // console.log(document.querySelector('meta[name="csrf-token"]'))
    // récupère le token (content=...)
    // document.querySelector('meta[name="csrf-token"]').getAttribute("content")

    csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content")

  }
  send(event) {

    //event.preventDefault()
    // console.log("event type :", event)
    // si on regarde le html du form, on vois que le parametre action est une clé de hash (:action), donc formTarget.action pour récupérer la valeur)
    // renvois l'url de la methode rails create
    // console.log(this.formTarget.action)
    // const url = ??? regarder dans la console l'adresse d'envois du formulaire
    // fetch(url, options)
    // parse la reponse en json
    // .then(response => response.json())
    // manipuler les datas reçus
    // .then((data) => {console.log(data)})

    const url = this.formTarget.action
    const options = {
      method: "POST",
      // headers: {"reponse que l'on accepte(html, json etc…)","token d'authenticité"}
      // voir ligne 13 comment pointer le token, on le met en variable dans connect (ligne 18) pour le récupérer une seule fois
      // headers: {"Accept": "application/json", "X-CSRF-Token": this.csrfToken },
      headers: {"Accept": "application/json"},

      // renvois un objet js
      body: new FormData(this.formTarget)
    }

    fetch(url, options)
    .then(response => response.json())
    .then((data) => {console.log(data)})
  }
}
